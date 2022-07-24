import React from 'react';
import { useState } from 'react';
import { switchChain } from '../hooks/useChains';
import Icons from './Icons';
import Logo from './Logo';


interface NavbarProps {
    connected: boolean;
    connect: () => void;
    setConnected: (connected: boolean) => void;
}

interface Chain {
    name: string;
    id: string;
}

const chains: Chain[] = [
    {
        name: 'Ethereum',
        id: '0x01'
    },
    {
        name: 'Ropsten',
        id: '0x02'
    }
];


export default function Navbar({ connect, connected, setConnected }: NavbarProps) {


    return (
        <nav className="m-2">
            <div className="flex flex-row justify-between items-center mx-auto p-3">
                <a href='/app' className="flex items-center">
                    <Logo />
                </a>
                <div className="flex flex-row gap gap-3 p-1 items-center">
                    <Icons />
                    <select className="w-40 text-black rounded-lg" placeholder="duration" onChange={(event) => switchChain(event.target.value)}>
                        {chains.map((chain) => (
                            <option value={chain.id}>{chain.name}</option>
                        ))}
                    </select>
                    {connected ? (
                        <button className="h-10 text-green outline outline-2 outline-green font-bold py-1 px-2 rounded-3xl">Connected</button>) :
                        (<button onClick={connect} className=" h-10 rounded-lg font-lg font-bold px-2 py-1  hover:bg-black hover:text-white bg-white border border-3 border-white" >Connect Wallet</button>)
                    }
                </div>
            </div>
        </nav>
    );
}
