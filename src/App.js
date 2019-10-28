import React, { useState, useEffect } from 'react';

import IncomeInput from './IncomeInput';
import FixedSpending from './FixedSpending';
import VariableSpending from './VariableSpending';
import Totals from './Totals';
import { SpendingContext } from './SpendingContext';

import logo from './logo.svg';
import './App.css';

// ! Warning in console - useEffect dep?
// ! First useEffect not saving state before 2nd runs?
// TODO: Make function to loop over amounts in fixed/variable arrays and add to variables. AFTER RENDER? --Done(for fixed)?
// TODO: Add Check to inputs for up to 2 decimal places
// TODO: Create format function for inputs strings -> numbers?
// TODO: Move header to its own component, add reset button(_there or to total?)

const App = () => {
  // Creating the app's state w/ hook
  const [state, setState] = useState({
    income: 0,
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
  });

  //* Hooks
  // useEffect runs after every render -- unless 2nd [param] doesn't change
  useEffect(() => {
    // Handle fixed totals
    const getFixedSpendingTotal = () => {
      const fixedTotals = state.fixedList.map(item => {
        return item.amount;
      });

      const total = fixedTotals.reduce((total, currentValue) => {
        return total + currentValue;
      });
      setState({
        ...state,
        fixedSpending: total,
      });
    };

    getFixedSpendingTotal();
  }, [state.fixedSpending, state.fixedList]);

  useEffect(() => {
    // Handle variable totals
    const getVariableSpendingTotal = () => {
      const variableTotals = state.variableList.map(item => {
        return item.amount;
      });

      const total = variableTotals.reduce((total, currentValue) => {
        return total + currentValue;
      });

      setState({
        ...state,
        variableSpending: total,
      });
    };
    getVariableSpendingTotal();
  }, [state.variableSpending, state.variableList]);

  //* Functions
  const addIncome = income => {
    setState({
      // Create copy of state, update income value
      ...state,
      income: parseFloat(income),
    });
  };

  const addFixedItem = newItem => {
    setState({
      // Create copy of state, update income value & fixed array
      ...state,
      fixedList: [...state.fixedList, newItem],
    });
  };

  const addVariableItem = newItem => {
    setState({
      // Create copy of state, update income value & variable array
      ...state,
      variableList: [...state.variableList, newItem],
    });
  };

  // ! DELETEDELETEDELETEDELETEDELETE
  console.log(state);
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
            <VariableSpending addVariableItem={addVariableItem} />
          </div>
          <Totals />
        </div>
      </div>
    </SpendingContext.Provider>
  );
};

export default App;
