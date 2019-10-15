import React, { useContext } from 'react';
import styled from 'styled-components';

import { SpendingContext } from './SpendingContext';

const SpendingList = props => {
  // Context
  const context = useContext(SpendingContext);
  const fixedList = context.fixedList;
  const variableList = context.variableList;

  return (
    <>
      <List>
        {props.title === 'Fixed Spending' &&
          fixedList.map(item => {
            return (
              <ListItem
                key={item.id}
              >{`${item.title} : $${item.amount}`}</ListItem>
            );
          })}
        {props.title === 'Variable Spending' &&
          variableList.map(item => {
            return (
              <ListItem
                key={item.id}
              >{`${item.title} : $${item.amount}`}</ListItem>
            );
          })}
      </List>
    </>
  );
};

export default SpendingList;

// Styled Components
const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 0.25rem;
  :nth-child(even) {
    background: #ddd;
  }
`;
