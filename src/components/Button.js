import React from "react";
import styled from 'styled-components';
import { BACKGROUND_COLOR} from "./App";

const Button = styled.a`
  flex-grow: 0;
  cursor: pointer;
  font-size: 24px;
  background-color: ${props => props.selected ? 'white' : BACKGROUND_COLOR};
  color: ${props => props.selected ? BACKGROUND_COLOR : 'white'};
  border: 1px solid white;
  padding: 10px;
  &:hover {
    background-color: ${props => props.selected ? BACKGROUND_COLOR : 'white'};
    color: ${props => props.selected ? 'white' : BACKGROUND_COLOR};
  }
`;

export default props => (
  <Button
    selected={props.selected}
    onClick={props.onClick}
  >
    {props.text}
  </Button>
);
