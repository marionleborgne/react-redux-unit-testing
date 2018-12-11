import React from 'react';
import TodoListItems from './TodoListItems';
import TodoListInput from './TodoListInput';
import styled from 'styled-components';

const Div = styled.div`
  text-align: left;
  border-radius: 10px;
  border: 2px solid white;
  padding: 0 20px 20px 20px;
`;

const Title = () => <h3>Todo List</h3>;

export default class StatefulTodoList extends React.Component {

  state = { items: [], text: '' };

  render() {

    return (
      <Div>
        <Title />
        <TodoListItems
          items={this.state.items}
        />
        <TodoListInput
          inputText={this.state.text}
          inputId={this.state.items.length + 1}
          handleChange={this._handleChange}
          handleSubmit={this._handleSubmit}
        />
      </Div>
    );
  }

  _handleChange = e => {
    this.setState({ text: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  };
}