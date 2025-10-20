import React, { FC, useEffect } from "react"
import { Typography, Space, message } from "antd"
import { UserAddOutlined } from "@ant-design/icons"
const { Title } = Typography
import type { FormProps } from "antd"
import { Button, Checkbox, Form, Input } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { REGISTER_PATHNAME } from "../router/index"
import { loginService } from "../request/user"
import { useRequest } from "ahooks"
import { setToken } from "@/utils/user-token"
type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const USERNAME_KEY = "USERNAME_KEY"
const PASSWORD_KEY = "PASSWORD_KEY"

function rememberUser(name: string, password: string) {
  localStorage.setItem(USERNAME_KEY, name)
  localStorage.setItem(PASSWORD_KEY, password)
}
function deleteUserFormState() {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

function getUserFormState() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}
const Login: FC = () => {
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  const [form] = Form.useForm()
  useEffect(() => {
    const { username, password } = getUserFormState()
    form.setFieldsValue({ username, password })
  })
  const { run } = useRequest(
    async values => {
      const { username, password } = values
      console.log("username,password", username, password)
      const data = await loginService(username, password)
      return data
    },
    {
      manual: true,
      onSuccess(result) {
        const { token } = result || {}
        console.log("登录成功", token)
        message.success("登录成功")
        // window.localStorage.setItem("TOKEN_KEY", token || "")
        setToken(token)
        navigate("/manage/list")
      }
    }
  )
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    console.log("Success:", values)
    const { username, password } = values
    if (values.remember) {
      console.log("记住")
      rememberUser(username, password)
    } else {
      deleteUserFormState()
    }
    run(values)
  }
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = errorInfo => {
    console.log("Failed:", errorInfo)
  }

  return (
    <>
      <div className="flex justify-center items-center h-full flex-col">
        <div>
          <Space>
            <Title level={2}>
              {/* 注册页面 */}
              <UserAddOutlined />
            </Title>
            <Title level={2}>登录账号</Title>
          </Space>
        </div>
        <div>
          <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                { required: true, message: "请输入用户名" },
                {
                  type: "string",
                  min: 5,
                  max: 20,
                  message: "用户名长度为5-20"
                },
                {
                  pattern: /^[a-zA-Z0-9_]{5,20}$/,
                  message: "用户名只支持字母、数字、下划线"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{ offset: 6, span: 16 }}
              valuePropName="checked"
              name="remember"
            >
              <Space>
                <Checkbox>记住我</Checkbox>
              </Space>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Link to={REGISTER_PATHNAME}>注册新用户</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>返回</button>
    </>
  )
}
export default Login
