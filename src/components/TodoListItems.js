import React from 'react';
import styled from 'styled-components';

export const TodoListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid white;
  padding: 10px;
  margin: 5px 0;
  background: white;
  color: black;
`;

export const ItemText = styled.div`
  text-decoration: ${props => props.done ? 'line-through' : null}
`;
ItemText.displayName = 'ItemText';


export const ItemLink = styled.a`
  cursor: pointer;
  font-style: italic;
`;
ItemLink.displayName = 'ItemLink';

export default props => (
  <div id="todo-list-items">
    {
      props.items.map(item =>
        <TodoListItem key={item.id}>
          <ItemText done={item.done}>
            {item.text}
          </ItemText>
          <ItemLink onClick={() => props.onItemClick(item)}>
            {item.done ? 'Clear' : 'Done'}
          </ItemLink>
        </TodoListItem>
      )
    }
  </div>
);
