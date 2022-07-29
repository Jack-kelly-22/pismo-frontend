import { useEffect } from "react";
import { Chain } from "../types/types";
import { switchChain } from '../hooks/useChains';
interface Props {
    // connected: boolean;
    // connect: (target:any) => void;
    // setConnected: (connected: boolean) => void;
    chains: Chain[];
}

const ChainDropdown = ({chains}:Props) => {
    
    useEffect(() => {
        console.log("ON page reload")
    } 
     , []);
    
    
    
    return (
        <div className="chain-dropdown">
        <select onChange={(event)=>switchChain(event.target.value)} value={chains[0].id}>
            {/* <option value={chains[0]} onChange={(event)=>connect(event.target.value.id){</select>}>Select a chain</option> */}
            {chains.map((chain) => (
                            <option value={chain.id}>{chain.name}</option>
                        ))}
        </select>
        </div>
    );
    }
export default ChainDropdown;
