import * as actions from '../../actions'
import types from '../../constants/actionTypes'
import createMockStore from 'redux-mock-store';

const middlewares = [];
const mockStore = createMockStore(middlewares);

describe('actions', () => {

  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: types.ADD_TODO,
      text: 'Test',
      done: false
    };
    const actualAction = actions.addTodo(expectedAction.text);
    expect(actualAction).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo', () => {

    // Example of full store mocking.
    // NOTE: mocking the whole store is necessary
    // for async actions, like when using thunk. Read more:
    // https://github.com/reduxjs/redux/blob/master/docs/
    // recipes/WritingTests.md#async-action-creators
    const defaultState = {todos: []};
    const store = mockStore(defaultState);

    const expectedAction = {
      type: types.TOGGLE_TODO,
      id: 'test'
    };
    store.dispatch(actions.toggleTodo(expectedAction.id));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
