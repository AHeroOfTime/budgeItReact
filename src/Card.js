import React, { Component } from 'react';
import styled from 'styled-components';

import SICardForm from './SICardForm';

const Card = props => {
  return (
    <CardWrapper>
      <CardTitle>{props.title}</CardTitle>
      <CardBody>
        <SICardForm addIncome={props.addIncome} />
      </CardBody>
    </CardWrapper>
  );
};

export default Card;

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
