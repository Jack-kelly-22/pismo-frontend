export type Cov = {
    strike: number;
    duration: string;
    collateral: number;
    collateralTokenAddress: string | undefined;
    collateralTokenSymbol: string| undefined;
    id: string;
    collateralTokenPrice: number;
    owner: string;

}

export type Chain = {
    id: string;
    name: string;
    symbol: string;
}
