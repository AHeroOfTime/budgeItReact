import React from 'react';

import IncomeInput from './IncomeInput';
import FixedSpending from './FixedSpending';
import VariableSpending from './VariableSpending';
import Totals from './Totals';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <IncomeInput />
      <FixedSpending />
      <VariableSpending />
      <Totals />
    </div>
  );
}

export default App;
