import React, { Component } from 'react';
import styled from 'styled-components';

export default class Card extends Component {
  render() {
    return (
      <CardWrapper>
        <CardTitle>Monthly Income</CardTitle>
        <CardBody>
          <CardForm>
            <CardInput type="number" placeholder="Income" />
            <Button>Submit</Button>
          </CardForm>
        </CardBody>
      </CardWrapper>
    );
  }
}

// Styled Components
export const CardWrapper = styled.div`
  background: #eee;
  margin: 1rem auto;
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
`;

const CardTitle = styled.p`
  background: #ddd;
  padding: 1rem;
  text-align: left;
`;

const CardBody = styled.div`
  padding: 20px;
`;

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
