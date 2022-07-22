import './index.css';
import App from './App';
// import { Connectors } from 'web3-react'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useState} from 'react';

import { ethers } from 'ethers'
import Navbar from './components/Navbar';
// const web3Provider = // ...
// const provider = new ethers.providers.Web3Provider(web3Provider)
export default function Wrapper(){
  const [connected, setConnected] = useState(false);
  const [user , setUser] = useState({});
  
    return(
        <div className='bg-poly-bg bg-contain bg-fixed text-white ' > 
        <Navbar connected={connected} user={user} setUser={setUser} setConnected={undefined}/>
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

