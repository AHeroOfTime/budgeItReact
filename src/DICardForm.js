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

  // Functions
  const submitItem = e => {
    e.preventDefault();

    if (props.title === 'Fixed Spending') {
      // Handle fixed amount submission
      let fixedSpending = inputRef.current.value;
      // Handle title
      let fixedTitle = titleRef.current.value;
      const newItem = {
        id: context.fixedList.length + 1,
        title: fixedTitle,
        amount: parseFloat(fixedSpending),
      };

      props.addFixedItem(newItem);

      // Clear input fields
      inputRef.current.value = '';
      titleRef.current.value = '';
    }
  };

  return (
    <CardForm onSubmit={submitItem}>
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
