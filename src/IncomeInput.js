import React, { Component } from 'react';
import styled from 'styled-components';

export default class IncomeInput extends Component {
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

// Styled Components
export const Card = styled.div`
  background: #999;
  margin: 0 auto;
  width: 80%;
`;
