import CovNFT from "./CovNFT";

const CovTest =  {
        strike: 2400,
        duration: "1",
        collateral: 100,
        id: "0x1234567890123456789012345678901234567890",
        owner: "0x1234567890123456789012345678901234567890",
        collateralTokenAddress: "0x1234567890123456789012345678901234567890",
        collateralTokenSymbol: "cETH",
        collateralTokenPrice: 1638,
}

const Market = () => {
    return (
        <div>
        <h1>Market</h1>
        {/* <CovNFT {...CovTest}/> */}
        </div>
    );
    }

export default Market;