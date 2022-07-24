// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../limit-order-protocol/interfaces/InteractiveNotificationReceiver.sol";
import "./ILendingProtocol.sol";

interface IMarginTradingNotifReceiver is InteractiveNotificationReceiver {
    struct MarginOrderData {
        ILendingProtocol lendingPool;
        uint256 takerAmount;
        uint256 amtToLend;
        bool useVault;
        bytes data;
    }

    function initialize(address _limitOrderProtocol, IERC20 _wethToken) external;

    function deposit(IERC20 token, uint256 amount) external;

    function withdraw(IERC20 token, uint256 amount) external;

    function transferOwnership(address newOwner) external;

    function owner() external view returns (address);
}
