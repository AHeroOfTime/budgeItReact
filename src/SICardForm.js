import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';
import { useInputSubmit } from './hooks/useInputSubmit';

const SICardForm = () => {
  const inputRef = useRef();
  const h3Ref = useRef();

  return (
    <CardForm
      onSubmit={e => {
        e.preventDefault();
        // Grab h3 reference, and update with input value
        h3Ref.current.innerText = inputRef.current.value;
      }}
    >
      <CardInput type="number" placeholder="Income" ref={inputRef} />
      <Button>Submit</Button>
      <h3 ref={h3Ref}>Income</h3>
    </CardForm>
  );
};

export default SICardForm;

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
