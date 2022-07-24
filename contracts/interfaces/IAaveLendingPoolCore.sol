// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

interface IAaveLendingPoolCore {
    function getReserveCurrentLiquidityRate(address _reserve) external view returns (uint256);

    function getReserveInterestRateStrategyAddress(address _reserve) external view returns (address);

    function getReserveTotalBorrowsStable(address _reserve) external view returns (uint256);

    function getReserveTotalBorrowsVariable(address _reserve) external view returns (uint256);

    function getReserveCurrentAverageStableBorrowRate(address _reserve) external view returns (uint256);

    function getReserveAvailableLiquidity(address _reserve) external view returns (uint256);
}
