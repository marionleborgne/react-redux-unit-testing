import React from 'react';
import { shallow } from 'enzyme';
import TodoListContainer, {
  TodoListComponent,
  mapStateToProps,
  mapDispatchToProps
} from '../../containers/TodoListContainer';
import actionTypes from "../../constants/actionTypes";

const TODO_ID = 'test';
const TODO_TEXT = 'Test';
const TODO_IS_DONE = false;

describe('TodoListContainer.WrappedComponent', () => {
  let wrapper;
  let dispatchSpy;

  beforeEach(() => {

    // We use a spy to check if the dispatch function is
    // called with the right Redux actions in the tests.
    dispatchSpy = jest.fn();

    // We construct the Redux props to pass to the wrapped component
    // because we don't test the container directly (testing that
    // the Redux HOC connects correctly our component to the Redux
    // store is tested in the Redux package. So we don't want to test this
    // again). What we want to test is:
    // - That the wrapped component renders correctly
    // - Test component methods.
    // - Test component props, and specifically the ones that were
    //   initialized with "mapStateToProps" and "mapDispatchToProps".
    const mockReduxState = {
      todos: [
        { id: TODO_ID, text: TODO_TEXT, done: TODO_IS_DONE }
      ]
    };
    const reduxProps = {
      ...mapStateToProps(mockReduxState),
      ...mapDispatchToProps(dispatchSpy)
    };

    wrapper = shallow(
      <TodoListComponent {...reduxProps} />
    );
    // NOTE: To access the connected component
    // in Redux containers, use ".WrappedComponent".
    // E.g: MyComponent = MyContainer.WrappedComponent
    // By accessing the component this way, you don't have
    // to export it. For example:
    // wrapper = shallow(
    //   <TodoListContainer.WrappedComponent {...reduxProps} />
    // );
    // is equivalent to:
    // wrapper = shallow(<TodoListComponent {...reduxProps} />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders TodoList', () => {
    expect(wrapper.find('TodoList').length).toEqual(1);
  });

  it('has the correct initial todo items', () => {
    const expectedItems = [
      { id: TODO_ID, text: TODO_TEXT, done: TODO_IS_DONE }
    ];
    expect(wrapper.props().items).toEqual(expectedItems);
  });

  it('_createItem() dispatches the correct action', () => {
    const newTodoText = 'Test';
    wrapper.instance()._createItem(newTodoText);

    const expectedAction = {
      type: actionTypes.ADD_TODO,
      text: newTodoText,
      done: false
    };
    expect(dispatchSpy).toBeCalledWith(expectedAction);
  });

  xit('props.addTodo() dispatches the correct action', () => {
    const newTodoText = 'Test';
    const props = wrapper.props();
    props.addTodo(newTodoText);

    const expectedAction = {
      type: actionTypes.ADD_TODO,
      text: newTodoText,
      done: false
    };
    expect(dispatchSpy).toBeCalledWith(expectedAction);
  });

  it('_onItemClick() dispatches the correct action', () => {
    const todo = { id: TODO_ID, text: TODO_TEXT, done: TODO_IS_DONE };
    wrapper.instance()._onItemClick(todo);

    const expectedAction = {
      type: actionTypes.TOGGLE_TODO,
      id: todo.id
    };
    expect(dispatchSpy).toBeCalledWith(expectedAction);
  });

  xit('props.toggleTodo() dispatches the correct action ', () => {
    const todo = { id: TODO_ID, text: TODO_TEXT, done: TODO_IS_DONE };
    const props = wrapper.props()
    props.toggleTodo(todo);

    const expectedAction = {
      type: actionTypes.ADD_TODO,
      id: todo.id
    };
    expect(dispatchSpy).toBeCalledWith(expectedAction);
  });
});
