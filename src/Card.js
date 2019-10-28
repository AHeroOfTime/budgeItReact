import React from 'react';
import styled from 'styled-components';

import SICardForm from './SICardForm';
import DICardForm from './DICardForm';
import SpendingList from './SpendingList';

const Card = props => {
  return (
    <CardWrapper>
      <CardTitle>{props.title}</CardTitle>
      <CardBody>
        {(() => {
          switch (props.title) {
            case 'Monthly Income':
              return <SICardForm addIncome={props.addIncome} />;
            case 'Fixed Spending':
              return (
                <>
                  <DICardForm
                    title={props.title}
                    addFixedItem={props.addFixedItem}
                  />
                  <SpendingList title={props.title} />
                </>
              );
            case 'Variable Spending':
              return (
                <>
                  <DICardForm
                    title={props.title}
                    addVariableItem={props.addVariableItem}
                  />
                  <SpendingList title={props.title} />
                </>
              );
            default:
              return null;
          }
        })()}
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
