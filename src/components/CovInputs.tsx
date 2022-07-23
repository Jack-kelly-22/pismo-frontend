
const durations = [
    {
        label: '1 week',
    },
    {
        label: '2 weeks',
    },
    {
        label: '1 month',
    },
    {
        label: '2 months',
    },
    {
        label: '3 months',
    },
    {
        label: '6 months',
    }
];

const calcStrikes = (currentPrice: number, increment:number, count:number) => {
    // round current price to nearest increment
    const roundedPrice = Math.round(currentPrice / increment) * increment;
    const strikes = [];
    for (let i = 0; i < count; i++) {
        strikes.push(roundedPrice + (i * increment));
    }
    return strikes;
}

const CovInputs = () => {
    return (
        <div className="cov-inputs">
            <div className="cov-input">

            </div>
        </div>
    );
}