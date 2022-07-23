import './index.css';
import App from './App';
// import { Connectors } from 'web3-react'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';

import { ethers } from 'ethers'
import Navbar from './components/Navbar';
import { connectToMetamask } from './hooks/useWallet';

export default function Wrapper(){

  const connectWallet = async () => {
    if (!connected) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const user = await connectToMetamask(provider);
      setConnected(true);
      setProvider(provider);
      setUser(user);
    }
  }

  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState({} as ethers.providers.Web3Provider);
  const [user , setUser] = useState({});
  
    return(
        <div className='p-3 bg-black' > 
        <Navbar connected={connected} setConnected={setConnected} connect={connectWallet} />
        <BrowserRouter>
        <Routes>
          {/* HOME PAGE */}
          {/* <Route path="/" element={<Home/>} /> */}
          {/* <Route path="/home" element={<Home/>} /> */}
          <Route path="/app" element={<App/>} />
        </Routes>
      </BrowserRouter>
      </div>
    );
}

