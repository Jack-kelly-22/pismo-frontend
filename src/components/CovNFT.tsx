import { estValue } from "../hooks/useMath";
import { Cov } from "../types/types";

interface GraphProps {
    minPrice: number;
    maxPrice: number;
}

const GraphOutline = ({minPrice,maxPrice}:GraphProps) => {
    const y_base = "230";
    const line_length = "180";
    const x_base = "30";
    return (
        <div className="graph-outline">
            <svg width="300px" height="300px">
                // Vertical line on left
                <line x1={x_base} y1="50" x2={x_base} y2={y_base} stroke="white" strokeWidth="4" strokeLinecap="round" />
                <line x1={x_base} y1={y_base} x2={line_length} y2={y_base} stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
        </div>
    )
}

const calcInterval = (price:number):GraphProps => {
    return {
        minPrice: price - price * 0.1,
        maxPrice: price + price * 0.3
    }

}

const CovNFT = (cov: Cov) => {
    const { strike, duration, collateral, collateralTokenSymbol, collateralTokenPrice } = cov;
    const graphProps = calcInterval(strike);
        return (
            <div className="rounded-3xl text-center text-white bg-gradient-to-br from-cyan-500 to-blue-300 w-80 h-100">
                <h1 className="cov-header">{collateralTokenSymbol} @ {strike}</h1>
                <GraphOutline {...graphProps}/>
                <p className="opacity-60 p-3 text-right w-full">est. val {estValue(cov)}</p>
                <img className={`w-10 h-10 rounded-full `} title={collateralTokenSymbol} src={`./tokens/asset_${collateralTokenSymbol}.png`} alt={collateralTokenSymbol} />
            </div>
        );
    }

    export default CovNFT;