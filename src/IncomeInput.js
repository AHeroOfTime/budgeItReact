import React from 'react';

import Card from './Card';

const IncomeInput = props => {
  return (
    <>
      <Card title={'Monthly Income'} addIncome={props.addIncome} />
    </>
  );
};

export default IncomeInput;
