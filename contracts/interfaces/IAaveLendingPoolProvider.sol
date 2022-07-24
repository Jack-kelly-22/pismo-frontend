// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

interface IAaveLendingPoolProvider {
    function getLendingPool() external view returns (address);

    function getLendingPoolCore() external view returns (address);
}
