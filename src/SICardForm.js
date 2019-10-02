import React, { Component } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';

export default class SICardForm extends Component {
  submitIncome = e => {
    e.preventDefault();
    this.setState({
      income: this.income.value,
    });
  };

  render() {
    return (
      <SpendingContext.Consumer>
        {context => (
          <CardForm>
            <CardInput
              type="number"
              ref={input => (this.income = input)}
              placeholder="Income"
            />
            <Button onClick={this.submitIncome}>Submit</Button>
          </CardForm>
        )}
      </SpendingContext.Consumer>
    );
  }
}

// Styled Components
const CardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const CardInput = styled.input`
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  border: none;

  &:hover {
    background: green;
  }
`;
