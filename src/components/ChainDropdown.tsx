import { useEffect } from "react";
import { Chain } from "../types/types";
import { switchChain } from '../hooks/useChains';
interface Props {
    // connected: boolean;
    // connect: (target:any) => void;
    // setConnected: (connected: boolean) => void;
    chains: Chain[];
    currentChain: Chain;
}

const ChainDropdown = ({ chains, currentChain }: Props) => {

    useEffect(() => {
        console.log("ON page reload")
    }
        , []);

    return (
        <div>
            <select className="chain-dropdown" onChange={(event) => switchChain(event.target.value)} value={currentChain.id}>
                {/* <option value={chains[0]} onChange={(event)=>connect(event.target.value.id){</select>}>Select a chain</option> */}
                {chains.map((chain) => (
                    <option value={chain.id}>
                        <div className="flex flex-row justify-between p-2 p-1">
                            <img className="w-10 h-10" src={`./tokens/asset_{symbol}.png`}/>
                        {chain.name}
                        </div>
                    </option>
                ))}
            </select>
        </div>
    );
}
export default ChainDropdown;
