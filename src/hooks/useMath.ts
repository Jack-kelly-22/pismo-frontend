import { Cov } from "../types/types";

export const estValue = (cov: Cov): number => {
  // Get the current account
  console.log("estimating cov value");
  // Value of the option is the strike - (collateral quantity * collateral price)
  const val = (cov.collateralTokenPrice - cov.strike) * cov.collateral;
  if (val > 0) {
    return val;
  } else {
    return 0;
  }
};

export const calcStrikes = (currentPrice: number, increment:number, count:number) => {
    // round current price to nearest increment
    const roundedPrice = Math.round(currentPrice / increment) * increment;
    const strikes = [];
    for (let i = 0; i < count; i++) {
        strikes.push(roundedPrice + (i * increment));
    }
    return strikes;
}
