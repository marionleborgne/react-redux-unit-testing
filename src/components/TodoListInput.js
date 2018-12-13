import React from 'react';
import styled from "styled-components";
import TodoListLabel from './TodoListLabel';
import Button from './Button';

const Content = styled.div`
   margin-top: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 10px; 
  padding: 0 5px;
  font-size: 24px;
  border-radius: 5px;
  border: 0;
`;

const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export default props => {
  const { inputId, inputText, handleChange, handleSubmit } = props;
  return (
    <Content>
      <TodoListLabel />
      <InputAndButton>
        <Input
          id="new-todo"
          autoComplete="off"
          onChange={handleChange}
          value={inputText}
        />
        <Button
          text={`Add Todo #${inputId}`}
          onClick={handleSubmit}
        />
      </InputAndButton>
    </Content>
  )
}
