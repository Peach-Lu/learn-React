import React, { FC } from "react";
import { QuestionInputDefaultProps, QuestionInputPropsType } from './interface'
import { Input, Typography } from 'antd'
const QuestionInput: FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const { title, placeholder } = { ...QuestionInputDefaultProps, ...props }
  const { Paragraph } = Typography
  return <>
    <div>
      <Paragraph strong>
        {title}
      </Paragraph>
      <Input
        placeholder={placeholder}></Input>
    </div>  

  </>
}
export default QuestionInput