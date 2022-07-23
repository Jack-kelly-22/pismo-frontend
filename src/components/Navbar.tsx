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
        <nav className="sticky h-12 top-0">
            <div className="flex flex-row justify-between items-start mx-auto">
                <a href='/app' className="flexitems-center">
                    <Logo/>
                </a>
                <Icons/>
                <button onClick={connect} className="rounded-lg w-70 font-2xl p-3 m-5  hover:bg-black hover:text-white bg-white rounded-3xl border border-3 border-white" >Connect Wallet</button>)
            </div>
        </nav>
    );
}
