import React, { Component } from 'react';
import styled from 'styled-components';

export default class Totals extends Component {
  render() {
    return (
      <FooterWrapper>
        <h2>Totals</h2>
      </FooterWrapper>
    );
  }
}

// Styled Components
const FooterWrapper = styled.footer`
  background: #222;
  color: #fff;
  padding: 16px;
`;
