// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "./interfaces/IFactoryClone.sol";
import "./interfaces/IMarginTradingNotifReceiver.sol";
import "./interfaces/ILendingProtocol.sol";
import "./interfaces/IWETH.sol";

/// @title MarginTradingNotifReceiver
/// @dev This contract receives callback function from 1inch Limit Order Protocol.
///      When thec callback is executed, this contract will deposit toknes which maker buy and additional collateral.
///      Maker address is not given by limit order protocol, So it seems that this contract needs to be deployed per user address.
contract MarginTradingNotifReceiver is IMarginTradingNotifReceiver, Initializable, OwnableUpgradeable {
    using SafeERC20 for IERC20;

    IERC20 private constant USE_ETHEREUM = IERC20(address(0));
    IERC20 public wethToken;

    address public factory;
    address public limitOrderProtocol;

    event Deposit(IERC20 indexed token, uint256 amount);
    event Withdrawal(IERC20 indexed token, uint256 amount);

    function initialize(address _limitOrderProtocol, IERC20 _wethToken) public override initializer {
        __Ownable_init();
        factory = msg.sender;
        limitOrderProtocol = _limitOrderProtocol;
        wethToken = _wethToken;
    }

    function deposit(IERC20 token_, uint256 amount) external override {
        // Effects
        IERC20 token = _toERC20(token_);

        // Interactions
        if (token_ == USE_ETHEREUM) {
            IWETH(address(wethToken)).deposit{ value: amount }();
        } else {
            token.safeTransferFrom(msg.sender, address(this), amount);
        }
        emit Deposit(token, amount);
    }

    function withdraw(IERC20 token_, uint256 amount) external override {
        // Effects
        IERC20 token = _toERC20(token_);

        // Interactions
        if (token_ == USE_ETHEREUM) {
            IWETH(address(wethToken)).withdraw(amount);
            // solhint-disable-next-line
            (bool success, ) = msg.sender.call{ value: amount }("");
            require(success, "eth-transfer-failed");
        } else {
            token.safeTransfer(msg.sender, amount);
        }
        emit Withdrawal(token, amount);
    }

    function _toERC20(IERC20 token_) internal view returns (IERC20) {
        return token_ == USE_ETHEREUM ? wethToken : token_;
    }

    /// @notice Callback, for to notify maker on order execution.
    ///         Deposit tokens which maker bought to lending protocol, and then borrow tokens which maker want to sell
    ///         and transfer it to the owner.
    /// @param taker limitOrderProtocol address
    /// @param makerAsset asset which maker account want to sell
    /// @param takerAsset asset which maker account want to bought
    /// @param makingAmount amounts of maker asset
    /// @param takingAmount amounts of taker asset
    /// @param interactiveData arbitrary data
    function notifyFillOrder(
        address taker,
        address makerAsset,
        address takerAsset,
        uint256 makingAmount,
        uint256 takingAmount,
        bytes memory interactiveData
    ) external override {
        MarginOrderData memory marginOrderData = abi.decode(interactiveData, (MarginOrderData));
        ILendingProtocol pool = marginOrderData.lendingPool;

        require(msg.sender == limitOrderProtocol, "only-limit-order-protocol");
        require(IFactoryClone(factory).lendingProtocols(address(pool)), "not-approved-lending-protocol");
        require(
            marginOrderData.amtToLend >= takingAmount, /* || marginOrderData.amtToBorrow >= makingAmount */
            "invalid-amount"
        );

        uint256 amtToPull = marginOrderData.amtToLend - marginOrderData.takerAmount;
        uint256 pullingAmount = (amtToPull * takingAmount) / marginOrderData.takerAmount;
        uint256 amtToDeposit = pullingAmount + takingAmount;

        // if useVault is true, tokens which this contract holds are deposited to a lending protocl
        if (!marginOrderData.useVault) {
            // In addition to `takingAmount`, pull additional tokens to deposit as collateral.
            IERC20(takerAsset).safeTransferFrom(owner(), address(this), pullingAmount);
        }

        require(
            IERC20(takerAsset).balanceOf(address(this)) >= amtToDeposit,
            "balance-received-is-less-than-the-deposit-amount"
        );

        // Deposit collateral which maker buy and then borrow asset which maker would sell.
        _lend(pool, takerAsset, owner(), amtToDeposit, marginOrderData.data);

        _borrow(pool, makerAsset, owner(), makingAmount, marginOrderData.data);

        // Transfer borrowed asset to wallet address.
        uint256 amtToSell = IERC20(makerAsset).balanceOf(address(this));
        require(makingAmount >= amtToSell, "inconsistent-balance");
        IERC20(makerAsset).safeTransfer(owner(), amtToSell);
    }

    /// @param pool lending protocols
    /// @param takerAsset taker asset i.e. asset which maker account bought
    /// @param onBehalfOf debt being incurred by `onBehalfOf`
    /// @param amtToDeposit amount to deposit to lending protocol
    /// @param data arbitrary data
    function _lend(
        ILendingProtocol pool,
        address takerAsset,
        address onBehalfOf,
        uint256 amtToDeposit,
        bytes memory data
    ) internal {
        IERC20(takerAsset).transfer(address(pool), amtToDeposit);
        pool.lend(IERC20(takerAsset), onBehalfOf, data);
    }

    /// @dev Assume that IDebtToken(debtTokenAddress).approveDelegation(borrower, amountInWei);
    /// @param pool lending protocols
    /// @param makerAsset maker asset i.e. asset which maker account sold
    /// @param onBehalfOf debt being incurred by `onBehalfOf`
    /// @param borrowAmount amounts of maker asset
    /// @param data arbitrary data
    function _borrow(
        ILendingProtocol pool,
        address makerAsset,
        address onBehalfOf,
        uint256 borrowAmount,
        bytes memory data
    ) internal {
        pool.borrow(IERC20(makerAsset), borrowAmount, onBehalfOf, data);
    }

    function transferOwnership(address newOwner) public override(IMarginTradingNotifReceiver, OwnableUpgradeable) {
        super.transferOwnership(newOwner);
    }

    function owner() public view override(IMarginTradingNotifReceiver, OwnableUpgradeable) returns (address) {
        return super.owner();
    }

    receive() external payable {}
}
