import React, { Component } from 'react';
import { Card } from './IncomeInput';

export default class FixedSpending extends Component {
  render() {
    return (
      <Card>
        <p>Monthly Income</p>
        <form>
          <input type="number" />
          <button>Submit</button>
        </form>
      </Card>
    );
  }
}
