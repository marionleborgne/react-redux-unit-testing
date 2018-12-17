import React from 'react';
import { shallow, mount } from 'enzyme';
import StatefulTodoListComponent, { defaultItem } from '../../components/StatefulTodoListComponent';
import TodoListComponent from '../../components/TodoListComponent';

describe('StatefulTodoListComponent', () => {

  it('renders', () => {
    const wrapper = shallow(<StatefulTodoListComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has the expected initial state', () => {
    const wrapper = mount(<StatefulTodoListComponent />);
    const actual = wrapper.state().items;
    const expected = [defaultItem];
    expect(actual).toEqual(expected);
  });

  it('renders one <TodoListComponent />', () => {
    const wrapper = shallow(<StatefulTodoListComponent />);
    const actual = wrapper.find(TodoListComponent);
    expect(actual).toHaveLength(1);
  });

  it('creates a new TODO item', () => {
  });

  it('toggles a TODO item status', () => {
  });

  xit('skips an example test', () => {
    // Replace "test" by "xtest" or "it" by "xit" to skip tests.
  });
});
