import React from 'react';
import {
  mount,
  shallow
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

    // 1. Try to replace shallow with mount.
    wrapper = mount(
      <TodoListComponent
        onItemClick={_noop}
        createItem={_noop}
        items={items}
      />
    );

    // 2. Uncomment to check what changes in our wrapper.
    // console.log(wrapper.debug());

  });

  it('renders one TodoListItems component', () => {
    expect(wrapper.find('TodoListItems')).toHaveLength(1);
  });

  it('renders list items', () => {
    // Expect the wrapper to have the right number of list items.
    expect(wrapper.find('ItemText')).toHaveLength(items.length);
  });

});
