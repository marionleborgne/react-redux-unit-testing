import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../logo.svg';
import StatefulTodoListComponent from "./StatefulTodoListComponent";
import TodoListContainer from '../containers/TodoListContainer';
import Button from './Button';

export const BACKGROUND_COLOR = '#282c34';

const MainWindow = styled.div`
  text-align: center;
  background-color: ${BACKGROUND_COLOR};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
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
  height: 20vmin;
`;

const Content = styled.header`
  max-width: 50%;
  min-width: 450px;
`;

const ButtonsWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 10px;
`;

const Title = () => <h3>Unit Test Best Practices for React Applications</h3>;

export default class App extends Component {

  state = { toggleExample: true };

  _toggleExample = () => this.setState({ toggleExample: !this.state.toggleExample });

  render() {
    return (
      <MainWindow>
        <Content>
          <Title />
          <AppLogo src={logo} alt="logo" />
          <ButtonsWrapper>
            <Button
              text={'Pure React'}
              selected={!this.state.toggleExample}
              onClick={this._toggleExample}
            />
            <Button
              text={'Redux'}
              selected={this.state.toggleExample}
              onClick={this._toggleExample}
            />
          </ButtonsWrapper>
          {this.state.toggleExample ? <TodoListContainer /> : <StatefulTodoListComponent />}
        </Content>
      </MainWindow>
    );
  }
}
