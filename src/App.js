import React, { useState } from 'react';

import IncomeInput from './IncomeInput';
import FixedSpending from './FixedSpending';
import VariableSpending from './VariableSpending';
import Totals from './Totals';
import { SpendingContext } from './SpendingContext';

import logo from './logo.svg';
import './App.css';

// TODO: Move header to its own component, add reset button(_there or to total?)
// TODO: Add Check to inputs for up to 2 decimal places
// TODO: Create format function for inputs strings -> numbers

const App = () => {
  // Creating the app's state w/ hook
  const [state, setState] = useState({
    income: 10,
    fixedSpending: 0,
    variableSpending: 0,
  });

  const addIncome = income => {
    setState({
      // Create copy of state, update income value
      ...state,
      income: income,
    });
  };

  return (
    <SpendingContext.Provider
      // spread state in context provider to make available in other components
      value={{
        ...state,
      }}
    >
      <div className="App">
        <header className="App-header">
          <h2>BudgeIt</h2>
        </header>
        <div className="container">
          <IncomeInput addIncome={addIncome} />
          <div className="spending-container">
            <FixedSpending />
            <VariableSpending />
          </div>
          <Totals />
        </div>
      </div>
    </SpendingContext.Provider>
  );
};

export default App;
