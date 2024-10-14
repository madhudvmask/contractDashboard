import React from 'react';
import ContractBreakdown from './components/ContractBreakdown.jsx';
import ContractProgress from './components/ContractProgress.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='zDashboard'>
        <ContractProgress />
        <ContractBreakdown />
      </div>
      
    </div>
  );
}

export default App;
