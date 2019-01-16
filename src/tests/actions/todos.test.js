import * as actions from '../../actions'
import types from '../../constants/actionTypes'

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
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id: 'test'
    };
    const actualAction = actions.toggleTodo(expectedAction.id);
    expect(actualAction).toEqual(expectedAction);
  });

  // NOTE: for async actions, like when using thunk, read:
  // https://github.com/reduxjs/redux/blob/master/docs/
  // recipes/WritingTests.md#async-action-creators
});
