import React, { useRef, useContext } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';

const DICardForm = props => {
  // Double Input Card Form
  // Create ref for input in form
  const inputRef = useRef();
  const titleRef = useRef();
  // Context
  const context = useContext(SpendingContext);

  const submitFixedItem = e => {
    e.preventDefault();

    // Handle fixed amount submission
    const fixedSpending = inputRef.current.value;

    // Handle title
    const fixedTitle = titleRef.current.value;

    props.addFixedItem(fixedSpending, fixedTitle);
  };

  return (
    <CardForm onSubmit={submitFixedItem}>
      <CardInput type="text" placeholder="Title" ref={titleRef} required />
      <CardInput type="number" placeholder="Amount" ref={inputRef} required />
      <Button>Submit</Button>
    </CardForm>
  );
};

export default DICardForm;

// Styled Components
const CardForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  grid-gap: 1rem;
`;

const CardInput = styled.input`
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  border: none;
  grid-column: 1 / span 2;

  &:hover {
    background: green;
  }
`;
