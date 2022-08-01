import React from 'react';
import Market from './components/Market';
import UserOverview from './components/UserOverview';

function App() {
  return (
    <div className="bg-black h-screen p-4 ">
      {/* USER overview and writing of calls */}
      <UserOverview/>
      {/*  */}
      <div className="market-container">
      <Market/>
      </div>
    </div>
  );
}

export default App;
