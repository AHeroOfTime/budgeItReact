import React, { useContext } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';

const Totals = props => {
  // Context
  const totalValues = useContext(SpendingContext);

  return (
    <FooterWrapper>
      <p>Monthly Income : {`$${totalValues.income}`}</p>
      <p>Fixed Spending : {`$${totalValues.fixedSpending}`}</p>
      <p>Variable Spending : {`$${totalValues.variableSpending}`}</p>
      <p>
        Total Spending :{' '}
        {`$${totalValues.fixedSpending + totalValues.variableSpending}`}
      </p>
      <p>Disposable Income : $0</p>
    </FooterWrapper>
  );
};

export default Totals;

// Styled Components
const FooterWrapper = styled.footer`
  display: grid;
  background: #222;
  color: #fff;
  padding: 16px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
