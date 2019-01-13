import React from 'react';
import { shallow } from 'enzyme';

import TodoListItems, { TodoListItem, ItemText } from './TodoListItems';

const _noop = () => {};

let items;
let wrapper;

describe('TodoListItems', () => {

  beforeEach(() => {
    items = [
      { id: 1, text: 'one', done: false },
      { id: 2, text: 'two', done: false },
      { id: 3, text: 'three', done: false }
    ];
    wrapper = shallow(
      <TodoListItems
        onItemClick={_noop}
        items={items}
      />
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders todo list items', () => {
    // Expect the wrapper to be defined.
    // Expect the wrapper to have the right number of list items.

    // NOTE on enzyme selectors and find() method
    // (source: https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html)
    // The method find() allows you to find elements by passing an EnzymeSelector
    // EnzymeSelectors can be:

    // 1. CSS selectors.
    expect(wrapper.find('#todo-list-items')).toBeDefined();

    // 2. Component Constructors.
    expect(wrapper.find(TodoListItem)).toHaveLength(items.length);

    // 3. Display Name.
    // NOTE: for instances of styled-component, you need to
    // explicitly set it. E.g: MyStyledComponent.displayName='MyStyled'.
    expect(wrapper.find('ItemText')).toHaveLength(items.length);
  });

  it('renders a list item', () => {
    // Check if an element in the Component exists.
    expect(wrapper.contains(
      <ItemText done={items[0].done}>
        {items[0].text}
      </ItemText>
    )).toBeTruthy();
  });

  it('renders correct text in item', () => {
    //Expect the child of the first item to be an array
    expect(wrapper.find('ItemText').get(0).props.children).toEqual(items[0].text);
  });
});
