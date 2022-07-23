import { useState } from "react";
import { calcStrikes } from "../hooks/useMath";



const Parameters = () => {
    const incriments = calcStrikes(1268, 50, 5);
    const [token, setToken] = useState("ETH");
    const [duration, setDuration] = useState("1 week");
    const [strike, setStrike] = useState("1400");
    const [collateral, setCollateral] = useState("100");
    return (
        <div>
            <h1 className="font-bold text-2xl p-2">Set Parameters</h1>
            <div className="text-left bg-midBlue w-80 h-50 rounded-2xl outline outline-2 outline-white">
                {/* DURATION */}
                <div className="flex flex-row justify-between gap-4 p-3">
                    {/* Duration */}
                    <p className="text-lg"> Duration </p>
                    <select className="w-40 text-black rounded-lg" value={duration} placeholder="duration" onChange={(event) => setDuration(event.target.value)}>
                        <option value="1w">1 week</option>
                        <option value="2w">2 week</option>
                        <option value="1mo">1 month</option>
                        <option value="6mo">6 month</option>
                    </select>

                </div>
                {/* Strike */}
                <div className="flex flex-row justify-between gap-4 p-3" >
                    <p className="text-lg"> Strike </p>
                    <select className="w-40 text-black rounded-lg" value={duration} placeholder="duration" onChange={(event) => setDuration(event.target.value)}>
                        {incriments.map((incriment) => (
                            <option value={incriment}>{incriment}</option>
                        ))}
                    </select>
                </div>
                {/* Strike */}
                <div className="flex flex-row justify-between gap-4 p-2" >
                    <p className="text-lg"> Collateral ({token}) </p>
                    <input className="w-40 text-black rounded-lg" value={collateral} placeholder="collateral" onChange={(event) => setCollateral(event.target.value)}/>
                </div>

            </div>
        </div>
    )

}

export default Parameters;