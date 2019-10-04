import React, { Component, createContext, useState } from 'react';

import IncomeInput from './IncomeInput';
import FixedSpending from './FixedSpending';
import VariableSpending from './VariableSpending';
import Totals from './Totals';
import { SpendingContext } from './SpendingContext';

import logo from './logo.svg';
import './App.css';

// TODO: Move header to its own component, add reset button etc.
// TODO: Replace context w/ hook?

class SpendingProvider extends Component {
  state = {
    income: 0,
    fixedSpending: 0,
    variableSpending: 0,
  };

  render() {
    return (
      <SpendingContext.Provider
        value={{
          spending: this.state,
        }}
      >
        {this.props.children}
      </SpendingContext.Provider>
    );
  }
}

const App = () => {
  const [state, setState] = useState({
    income: 0,
    fixedSpending: 0,
    variableSpending: 0,
  });

  const addIncome = income => {
    setState({
      ...state,
      income: income,
    });
    console.log(state.income);
  };

  return (
    <SpendingProvider>
      <div className="App">
        <header className="App-header">
          <h2>BudgeIt</h2>
        </header>
        <IncomeInput addIncome={addIncome} />
        <div className="spending-container">
          <FixedSpending />
          <VariableSpending />
        </div>
        <Totals state={state} />
      </div>
    </SpendingProvider>
  );
};

export default App;
