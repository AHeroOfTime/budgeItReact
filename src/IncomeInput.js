import React, { Component } from 'react';
import Card from './Card';

const IncomeInput = props => {
  return (
    <div>
      <Card title={'Monthly Income'} addIncome={props.addIncome} />
    </div>
  );
};

export default IncomeInput;
