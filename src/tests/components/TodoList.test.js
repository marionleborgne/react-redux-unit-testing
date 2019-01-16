import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';

import TodoList from '../../components/TodoList';

const _noop = () => {};

let wrapper;
let items;

describe('TodoList', () => {

  beforeEach(() => {
    items = [
      { id: 1, text: 'one', done: false },
      { id: 2, text: 'two', done: false },
      { id: 3, text: 'three', done: false }
    ];

    // 1. Try to replace shallow with mount.
    wrapper = shallow(
      <TodoList
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
    // 3. When using shallow this will fail. Try to uncomment the next
    // line and running the with "mount" VS "shallow" to see the difference.
    // expect(wrapper.find('ItemText').length).toEqual(items.length);
  });

});
