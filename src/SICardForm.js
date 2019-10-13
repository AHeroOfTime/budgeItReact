import React, { useRef } from 'react';
import styled from 'styled-components';

const SICardForm = props => {
  // Single Input Card Form
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
      <CardInput type="number" placeholder="Income" ref={inputRef} />
      <Button>Submit</Button>
    </CardForm>
  );
};

export default SICardForm;

// Styled Components
const CardForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

  &:hover {
    background: green;
  }
`;
