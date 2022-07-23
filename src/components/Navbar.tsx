import React from 'react';
import { useState } from 'react';
import Icons from './Icons';
import Logo from './Logo';


interface NavbarProps {
    connected: boolean;
    connect: () => void;
    setConnected: (connected: boolean) => void;
}

export default function Navbar({connect, connected, setConnected}: NavbarProps) {

    
    return (
        <nav className=" h-12 top-0 m-2">
            <div className="flex flex-row justify-between items-start mx-auto p-3">
                <a href='/app' className="flexitems-center">
                    <Logo/>
                </a>
                <Icons/>
                {connected ? (
                    <button className=" text-green outline outline-2 outline-green font-bold py-2 px-4 rounded-3xl">Connected</button>):
                (<button onClick={connect} className="rounded-lg w-70 font-2xl p-3 m-5  hover:bg-black hover:text-white bg-white rounded-3xl border border-3 border-white" >Connect Wallet</button>)
}
            </div>
        </nav>
    );
}
