import React from 'react';
import styled from 'styled-components';

const TodoListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid white;
  padding: 10px;
  margin: 5px 0;
  background: white;
  color: black;
`;

const Text = styled.div`
  text-decoration: ${props => props.done ? 'line-through' : null}
`;

const Link = styled.a`
  cursor: pointer;
  font-style: italic;
`;

export default props => <div>
  {
    props.items.map(item =>
      <TodoListItem key={item.id}>
        <Text done={item.done}>
          {item.text}
        </Text>
        <Link onClick={() => props.onItemClick(item)}>
          {item.done ? 'Clear' : 'Done'}
        </Link>
      </TodoListItem>
    )
  }
</div>;
