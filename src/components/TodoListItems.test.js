import React from 'react';
import { shallow } from 'enzyme';

import TodoListItems, { TodoListItem, ItemText } from './TodoListItems';

const _noop = () => {};

const _createItems = () => [
  { id: 1, text: 'one', done: false },
  { id: 2, text: 'two', done: false },
  { id: 3, text: 'three', done: false }
];

const _createWrapper = items => shallow(
  <TodoListItems
    onItemClick={_noop}
    items={items}
  />
);

describe('TodoListItems shallow tests', () => {

  it('renders', () => {
    const items = _createItems();
    const wrapper = _createWrapper(items);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders todo list items', () => {

    // Expect the wrapper to be defined and to have
    // the right number of list items.

    const items = _createItems();
    const wrapper = _createWrapper(items);

    // https://airbnb.io/enzyme/docs/api/ReactWrapper/find.html
    // The method find() allows you to find elements by passing an EnzymeSelector
    // EnzymeSelectors can be:

    // 1. CSS selectors.
    expect(wrapper.find('#todo-list-items')).toBeDefined();


    // 2. Component Constructors.
    expect(wrapper.find(TodoListItem)).toHaveLength(items.length);

    // 3. Display Name.
    // Note: for instances of styled-component, you need to
    // explicitly set it. E.g: MyStyledComponent.displayName='MyStyled'.
    expect(wrapper.find('ItemText')).toHaveLength(items.length);
  });

  it('renders a list item', () => {
    const items = _createItems();
    const wrapper = _createWrapper(items);

    // Check if an element in the Component exists.
    expect(wrapper.contains(
      <ItemText done={items[0].done}>
        {items[0].text}
      </ItemText>
    )).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const items = _createItems();
    const wrapper = _createWrapper(items);

    //Expect the child of the first item to be an array
    expect(wrapper.find('ItemText').get(0).props.children).toEqual(items[0].text);
  });
});
