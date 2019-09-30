import React, { Component } from 'react';
import styled from 'styled-components';

export default class SICardForm extends Component {
  render() {
    return (
      <CardForm>
        <CardInput type="number" placeholder="Income" />
        <Button>Submit</Button>
      </CardForm>
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
