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
// TODO: Make function to loop over amounts in fixed/variable arrays and add to variables

const App = () => {
  // Creating the app's state w/ hook
  const [state, setState] = useState({
    income: 10,
    fixedSpending: 0,
    variableSpending: 0,
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
    variableList: [
      {
        id: 1,
        title: 'Movie',
        amount: 20,
      },
      {
        id: 2,
        title: 'Food',
        amount: 15,
      },
    ],
    addIncome: function(income) {
      console.log('State Method');
      setState({
        // Create copy of state, update income value
        ...state,
        income,
      });
    },
  });

  // Functions
  const addIncome = income => {
    setState({
      // Create copy of state, update income value
      ...state,
      income,
    });
  };

  const addFixedItem = newItem => {
    // state.fixedList.push(newItem);
    setState({
      // Create copy of state, update income value & fixed array
      ...state,
      fixedList: [...state.fixedList, newItem],
      fixedSpending: newItem.amount,
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
