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

const defaultItem = {
  text: 'Example task',
  id: Date.now(),
  done: true
};

export default class StatefulTodoList extends React.Component {

  state = { items: [defaultItem], text: '' };

  _onTodoItemClick = item => {
    const itemIndex = this.state.items.indexOf(item);
    const newItems = this.state.items;
    newItems[itemIndex].done = !newItems[itemIndex].done;
    this.setState({ items: newItems })
  };

  render() {

    return (
      <TodoList>
        <Title>Todo List Example</Title>
        <TodoListItems
          items={this.state.items}
          onItemClick={this._onTodoItemClick}
        />
        <TodoListInput
          inputText={this.state.text}
          inputId={this.state.items.length + 1}
          handleChange={this._handleChange}
          handleSubmit={this._handleSubmit}
        />
      </TodoList>
    );
  }

  _handleChange = e => {
    this.setState({ text: e.target.value });
  };

  _handleSubmit = () => {
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      done: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  };
}
