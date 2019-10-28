import React from 'react';

import Card from './Card';

const VariableSpending = props => {
  return (
    <div>
      <Card
        title={'Variable Spending'}
        addVariableItem={props.addVariableItem}
      />
    </div>
  );
};

export default VariableSpending;
