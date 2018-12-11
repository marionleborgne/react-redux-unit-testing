import React, { Component } from 'react';
import logo from '../logo.svg';
import StatefulTodoList from "./StatefulTodoList";
import styled, { keyframes } from 'styled-components';

const AppContent = styled.div`
  text-align: center;
`;

const appLogoKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${appLogoKeyframes} infinite 20s linear;
  height: 40vmin;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default class App extends Component {
  render() {
    return (
      <AppContent>
        <Header>
          <AppLogo src={logo} alt="logo" />
          <StatefulTodoList />
        </Header>
      </AppContent>
    );
  }
}
