// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFactoryClone {
    function wethToken() external view returns (IERC20);

    function implementation() external view returns (address);

    function limitOrderProtocol() external view returns (address);

    function lendingProtocols(address _protocol) external view returns (bool);

    function deploy() external returns (address clone);

    function isRegistered(address _notifReceiver) external returns (bool);

    function getDeployedContract(uint256 index) external view returns (address);
}
