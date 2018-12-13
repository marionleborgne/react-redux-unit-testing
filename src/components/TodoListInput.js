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

export default class TodoListInput extends React.Component {

  state = { input: '' };

  _handleInputSubmit = () => {
    this.props.handleInputSubmit(this.state.input);
    this.setState({ input: '' });
  };

  _handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <Content>
        <TodoListLabel />
        <InputAndButton>
          <Input
            id="new-todo"
            autoComplete="off"
            onChange={this._handleChange}
            value={this.state.input}
          />
          <Button
            text={`Add Todo #${this.props.inputId}`}
            onClick={this._handleInputSubmit}
          />
        </InputAndButton>
      </Content>
    );
  }
}
