import React, { Component } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';

export default class Totals extends Component {
  render() {
    return (
      <SpendingContext.Consumer>
        {context => (
          <FooterWrapper>
            <h2>Totals</h2>
            <p>{context.spending.income}</p>
          </FooterWrapper>
        )}
      </SpendingContext.Consumer>
    );
  }
}

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
