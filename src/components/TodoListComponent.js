import React from 'react';
import TodoListItems from './TodoListItems';
import TodoListInput from './TodoListInput';
import styled from 'styled-components';

const TodoList = styled.div`
  border-radius: 10px;
  border: 2px solid white;
  padding: 0 20px 20px 20px;
`;

const Title = styled.h3`
  margin: 20px 0 10px 0;
`;

export default props => {

  const { items, onItemClick, createItem } = props;

  return (
    <TodoList>
      <Title>Todo List (Pure React)</Title>
      <TodoListItems
        items={items}
        onItemClick={onItemClick}
      />
      <TodoListInput
        inputId={items.length + 1}
        handleInputSubmit={createItem}
      />
    </TodoList>
  );
}
