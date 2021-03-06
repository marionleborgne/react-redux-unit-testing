import React from 'react';
import TodoListItems from './TodoListItems';
import TodoListInput from './TodoListInput';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
  border-radius: 10px;
  border: 2px solid white;
  padding: 0 20px 20px 20px;
`;

const Title = styled.h3`
  margin: 20px 0 10px 0;
`;

const TodoList = props => {

  const { items, onItemClick, createItem } = props;

  return (
    <TodoListWrapper>
      <Title>Todo List Example</Title>
      <TodoListItems
        items={items}
        onItemClick={onItemClick}
      />
      <TodoListInput
        inputId={items.length + 1}
        handleInputSubmit={createItem}
      />
    </TodoListWrapper>
  );
};

export default TodoList;
