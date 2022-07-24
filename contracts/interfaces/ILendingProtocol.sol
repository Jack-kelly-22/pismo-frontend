// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ILendingProtocol {
    function lend(
        IERC20 token,
        address onBehalfOf,
        bytes memory data
    ) external;

    function borrow(
        IERC20 token,
        uint256 amount,
        address onBehalfOf,
        bytes memory data
    ) external;
}
