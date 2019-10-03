import React, { Component, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';
import { useInputSubmit } from './hooks/useInputSubmit';

const Totals = () => {
  const ref = useRef();

  return (
    <FooterWrapper>
      <h2>Totals</h2>
      <p>{'a'}</p>
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
