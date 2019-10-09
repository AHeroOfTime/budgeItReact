import React, { useRef } from 'react';
import styled from 'styled-components';

const DICardForm = props => {
  // Double Input Card Form
  // Create ref for input in form
  const inputRef = useRef();

  const submitIncome = e => {
    e.preventDefault();

    // Check for input in income box, if falsy set to 0
    const income = inputRef.current.value ? inputRef.current.value : 0;
    props.addIncome(income);
    // Clear input
    inputRef.current.value = '';
  };

  return (
    <CardForm onSubmit={submitIncome}>
      <CardInput type="text" placeholder="Title" />
      <CardInput type="number" placeholder="Income" ref={inputRef} />
      <Button>Submit</Button>
    </CardForm>
  );
};

export default DICardForm;

// Styled Components
const CardForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const CardInput = styled.input`
  flex: 1;
  padding: 0.5rem;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  border: none;

  &:hover {
    background: green;
  }
`;
