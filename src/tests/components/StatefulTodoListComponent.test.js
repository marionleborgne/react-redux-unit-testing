import React from 'react';
import { shallow, mount } from 'enzyme';
import StatefulTodoListComponent, { defaultItem } from '../../components/StatefulTodoListComponent';

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

  it('renders one TodoListComponent', () => {
    const wrapper = shallow(<StatefulTodoListComponent />);
    expect(wrapper.find('TodoListComponent')).toHaveLength(1);
  });

  it('creates a new item', () => {
    const wrapper = shallow(<StatefulTodoListComponent />);
    expect(wrapper.state().items.length).toEqual(1);

    // Create a new item
    const newItem = { text: 'Test', done: false };
    wrapper.instance()._createItem(newItem.text);

    // Check that there is a new item in addition
    // to the default item.
    const actual = wrapper.state().items;
    expect(actual.length).toEqual(2);
    expect(actual[0]).toEqual(defaultItem);
    expect(actual[1].text).toEqual(newItem.text);
    expect(actual[1].done).toEqual(newItem.done);
    // We can't know what the default ID will be in advance,
    // but we know it should be defined.
    expect(actual[1].id).toBeDefined();
  });

  it('toggles an item', () => {
    const wrapper = shallow(<StatefulTodoListComponent />);
    const initialItems = wrapper.state().items;
    expect(initialItems.length).toEqual(1);
    expect(initialItems[0]).toEqual(defaultItem);
    expect(initialItems[0].done).toEqual(defaultItem.done);

    // Toggle the status of the first item
    wrapper.instance()._onItemClick(initialItems[0]);

    // Check that there is a new item in addition
    // to the default item.
    const actual = wrapper.state().items;
    expect(actual.length).toEqual(1);
    expect(actual[0].done).toEqual(!defaultItem.done);
    expect(actual[0].text).toEqual(defaultItem.text);
    expect(actual[0].id).toEqual(defaultItem.id);
  });
});
