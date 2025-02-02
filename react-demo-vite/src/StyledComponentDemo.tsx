import React, { FC } from 'react';
import styled, { css } from 'styled-components';
// button组件
type ButtonPropsType = {
  primary: boolean;
};
const Button = styled.button<ButtonPropsType>`
  background-color: #f00;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

const styledComponentDemo: FC = () => {
  return (
    <>
      <h1>styledComponentDemo</h1>
      <Container>
        <Button primary={true} style={{ fontSize: '40px' }}>
          按钮
        </Button>
        <Button primary={false} style={{ fontSize: '40px' }}>
          primary
        </Button>
      </Container>
    </>
  );
};
export default styledComponentDemo;
