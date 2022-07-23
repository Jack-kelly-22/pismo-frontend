import { Cov } from "../types/types";

const CovPreview = ({ collateral, strike, duration }: Cov) => {
    return (
        <div className="                                                                                                            ">
            <h2>Collateral: {collateral}</h2>
            <h2>Strike: {strike}</h2>
            <h2>Duration: {duration}</h2>
            <h2> % change</h2>
        </div>
    );
}
