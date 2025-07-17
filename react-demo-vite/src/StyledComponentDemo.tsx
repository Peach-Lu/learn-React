import React, { FC } from 'react';
import styled, { css } from 'styled-components';
// import styledimport JSXStyle from 'styled-jsx/style';
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
      border:5px solid #ccc;
    `}
`;

const Container = styled.div`
  text-align: center;
`;
interface ButtonsType {
    primary?:boolean
}
const Buttons = styled.button<ButtonsType>`
background-color: #f00;
border-radius: 5px;
color: #fff;
padding: 10px 20px;
${props => {
    return props.primary && css`
    color:red;
    `
}}
`
const Containers = styled.div`
text-align: center
`

const styledComponentDemo: FC = () => {
  return (
    <>
      <h1>styledComponentDemo</h1>
      <Container>
        {
          
        }
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

const Deom:FC = ()=>{
    
    return <>
    <div>
        <Buttons>1111</Buttons>
        <p>this is styleComponent</p>
    </div>
    </>    
}
export default styledComponentDemo;
