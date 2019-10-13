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
// TODO: Create component for List?

const App = () => {
  // Creating the app's state w/ hook
  const [state, setState] = useState({
    income: 10,
    fixedSpending: 20,
    variableSpending: 30,
    fixedList: [
      {
        id: 1,
        title: 'Car',
        amount: 100,
      },
      {
        id: 2,
        title: 'Insurance',
        amount: 50,
      },
    ],
    variableList: [],
  });

  const addIncome = income => {
    setState({
      // Create copy of state, update income value
      ...state,
      income,
    });
  };

  const addFixedItem = (fixedSpending, fixedTitle) => {
    state.fixedList.push(fixedTitle);
    setState({
      // Create copy of state, update income value
      ...state,
      fixedSpending,
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
            <FixedSpending addFixedItem={addFixedItem} />
            <VariableSpending />
          </div>
          <Totals />
        </div>
      </div>
    </SpendingContext.Provider>
  );
};

export default App;
