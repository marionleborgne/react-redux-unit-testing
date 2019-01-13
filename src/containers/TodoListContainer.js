import React from 'react';
import { connect } from 'react-redux';
import TodoListComponent from '../components/TodoListComponent';
import { addTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {

  _onItemClick = item => this.props.toggleTodo(item);

  _createItem = text => this.props.addTodo(text);

  render() {
    return <TodoListComponent
      onItemClick={this._onItemClick}
      createItem={this._createItem}
      items={this.props.items}
    />
  }
}

export const mapStateToProps = state => ({
  items: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: item => dispatch(toggleTodo(item.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

