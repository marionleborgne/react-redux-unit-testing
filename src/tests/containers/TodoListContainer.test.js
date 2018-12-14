import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import TodoListContainer from '../../containers/TodoListContainer';

describe('TodoListContainer', () => {
  let store;
  let container;
  const mockStore = configureStore();
  const initialState = [
    {
      text: 'Test',
      id: 'mock',
      done: true
    }
  ];

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<TodoListContainer context={store} />);
  });

  it('renders', () => {
    expect(container.length).toBe(1);
  });

  it('has expected initial number of TODO items', () => {
    const expected = container.prop('items');
    const actual = initialState.items;
    expect(expected).toEqual(actual);
  });
});
