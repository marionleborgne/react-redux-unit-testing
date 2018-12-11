import React from "react";
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin: 5px 0;
`;

const Button = styled.button`
  font-size: 16px;
  background-color: #61dafb;
  padding: 10px;
  font-weight: 600;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 0;
`;

export default props => (
  <ButtonContainer>
    <Button>
      {props.text}
    </Button>
  </ButtonContainer>
);
