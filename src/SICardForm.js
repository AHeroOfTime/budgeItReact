import React, { useState } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';

const SICardForm = () => {
  const [income, setIncome] = useState(0);

  return (
    <CardForm>
      <CardInput
        type="number"
        placeholder="Income"
        onChange={e => setIncome(e.target.value)}
        value={income}
      />
      <button>Submit</button>
      <h3>{income}</h3>
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
