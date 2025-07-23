import React,{FC,useState} from "react";
import type {ChangeEvent} from "react";
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Demo:FC = ()=>{
  const [text, setText] = useState<string>('hello text')
  const formShow = false
  function handleChage(e:ChangeEvent<HTMLInputElement>){
    console.log(e)
    setText(e.target.value)
    console.log('text',text)
  }
  function getHtml(){
    return { __html:text.replace('\n','<br/>') }
  }
  return <>
  <div className="mt-[10px]">
    {/* <textarea name="" value={text} onChange={handleChage} id=""></textarea>
    {text}
    <p dangerouslySetInnerHTML={getHtml()}></p> */}

    <label htmlFor="radio1">男</label>
    <input type="radio" name="gender" value='male' />
    <label htmlFor="radio2">女</label>
    <input type="radio" name="gender" value='female'/>
 {formShow &&  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>}
  </div>
  </>
}
export default Demo