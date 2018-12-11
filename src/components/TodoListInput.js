import React from 'react';
import TodoListLabel from './TodoListLabel';
import TodoListAddButton from './TodoListAddButton';
import styled from "styled-components";

const Input = styled.input`
  padding: 5px;
  margin: 10px 0;
  font-size: 16px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 0;
`;

export default props => {
  const { inputId, inputText, handleChange, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TodoListLabel />
        <Input
          id="new-todo"
          autoComplete="off"
          onChange={handleChange}
          value={inputText}
        />
        <TodoListAddButton text={`Add Todo #${inputId}`} />
      </form>
    </div>
  )
}
