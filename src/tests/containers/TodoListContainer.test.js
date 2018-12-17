import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import TodoListContainer, { mapStateToProps } from '../../containers/TodoListContainer';

const initialState = {
  todos: [
    {
      text: 'Test',
      id: 'mock',
      done: true
    }
  ]
};
const initialProps = mapStateToProps(initialState);
const mockStore = configureStore();

describe('TodoListContainer', () => {

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(
      <TodoListContainer.WrappedComponent {...initialProps} />,
      { context: { store } }
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('renders a shallow copy with expected initial state', () => {
    const props = wrapper.props();
    const actual = props.items;
    const expected = initialState.todos;
    expect(actual).toEqual(expected);
  });

  it('renders with expected initial state', () => {
    const wrapper = mount(<Provider store={store}><TodoListContainer /></Provider>);
    const container = wrapper.find(TodoListContainer.WrappedComponent)
    const actual = container.props().items;
    const expected = initialState.todos;
    expect(actual).toEqual(expected);
  });
});
