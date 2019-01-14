import React from 'react';
import {
  mount,
  // shallow
} from 'enzyme';

import TodoListComponent from '../../components/TodoListComponent';

const _noop = () => {};

let wrapper;
let items;

describe('TodoListComponent', () => {

  beforeEach(() => {
    items = [
      { id: 1, text: 'one', done: false },
      { id: 2, text: 'two', done: false },
      { id: 3, text: 'three', done: false }
    ];

    // Try to replace shallow with mount.
    wrapper = mount(
      <TodoListComponent
        onItemClick={_noop}
        createItem={_noop}
        items={items}
      />
    );

    // Let's check what changes in our wrapper
    // instance when mount -> shallow.
    console.log(wrapper.debug());

  });

  it('renders list items', () => {
    // Expect the wrapper object to be defined
    expect(wrapper.find('#todo-list-items')).toBeDefined();
    // Expect the wrapper to have the right number of list items.
    expect(wrapper.find('ItemText')).toHaveLength(items.length);
  });

});
