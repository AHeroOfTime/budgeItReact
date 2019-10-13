import React from 'react';

import Card from './Card';

const FixedSpending = props => {
  return (
    <>
      <Card title={'Fixed Spending'} addFixedItem={props.addFixedItem} />
    </>
  );
};

export default FixedSpending;
