import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { addTodo, toggleTodo } from '../actions';

export class TodoListComponent extends React.Component {

  _onItemClick = item => this.props.toggleTodo(item);

  _createItem = text => this.props.addTodo(text);

  render() {
    return <TodoList
      onItemClick={this._onItemClick}
      createItem={this._createItem}
      items={this.props.items}
    />
  }
}

export const mapStateToProps = state => ({
  items: state.todos
});

export const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: item => dispatch(toggleTodo(item.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
