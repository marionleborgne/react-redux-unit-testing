import React from 'react';
import ReactDOM from 'react-dom';
import StatefulTodoListComponent from '../../components/StatefulTodoListComponent';

describe('StatefulTodoListComponent', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StatefulTodoListComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
