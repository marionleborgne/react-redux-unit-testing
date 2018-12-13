import React from 'react';
import TodoListComponent from './TodoListComponent';

const defaultItem = {
  text: 'Create pure React example',
  id: Date.now(),
  done: true
};

export default class StatefulTodoListComponent extends React.Component {

  state = { items: [defaultItem] };

  render() {

    return <TodoListComponent
        onItemClick={this._onItemClick}
        createItem={this._createItem}
        items={this.state.items}
      />
  }

  _onItemClick = clickedItem => this.setState({
    items: this.state.items.map(
      item => item.id === clickedItem.id ? { ...item, done: !item.done } : item
    )
  });

  _createItem = text => {
    const newItem = {
      text,
      id: Date.now(),
      done: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem)
    }));
  };
}
