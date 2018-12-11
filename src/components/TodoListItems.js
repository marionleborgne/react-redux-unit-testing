import React from 'react';

export default props => (
  <ul>
    {props.items.map(item => <li key={item.id}>{item.text}</li>)}
  </ul>
)
