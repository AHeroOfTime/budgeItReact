import React, { Component, useRef, useContext } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';

const Totals = props => {
  // todo: May not need this ref anymore
  // Context
  const totalValues = useContext(SpendingContext);
  // ! Remove log
  console.log(totalValues);

  return (
    <FooterWrapper>
      <h2>Totals</h2>
      <p>Context Value: {totalValues.income}</p>
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
