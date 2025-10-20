import React, { FC } from "react"
import { Typography, Space } from "antd"
import { UserAddOutlined } from "@ant-design/icons"
const { Title } = Typography
import type { FormProps } from "antd"
import { Button, Checkbox, Form, Input, message } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { LOGIN_PATHNAME } from "../router/index"
import { registerUserService } from "../request/user"
import { useRequest } from "ahooks"
type FieldType = {
  username?: string
  password?: string
  remember?: string
}
const Register: FC = () => {
  const navigate = useNavigate()
  const { run } = useRequest(
    async values => {
      const { username, password, nickname } = values
      const data = await registerUserService(username, password, nickname)
      return data
    },
    {
      manual: true,
      onSuccess() {
        message.success("注册成功")
        navigate("/login")
      }
    }
  )
  const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
    run(values)
  }
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = errorInfo => {
    console.log("Failed:", errorInfo)
  }
  const [form] = Form.useForm()
  return (
    <>
      <div className="flex justify-center items-center h-full flex-col">
        <div>
          <Space>
            <Title level={2}>
              {/* 注册页面 */}
              <UserAddOutlined />
            </Title>
            <Title level={2}>注册新用户</Title>
          </Space>
        </div>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <Form.Item<FieldType>
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

            <Form.Item<FieldType>
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              dependencies={["password"]} // 依赖 password 字段 password变化时触发
              label="确认密码"
              name="confirm"
              rules={[
                { required: true, message: "请输入确认密码" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    console.log("触发校验")
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error("密码不一致"))
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="昵称"
              name="nikename"
              rules={[{ required: true, message: "请输入昵称" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={null}>
              <Space>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
                <Link to={LOGIN_PATHNAME}>已有账户 去登录</Link>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}
export default Register
