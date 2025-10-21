import React, { FC } from "react"
import { Button, message } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { LOGIN_PATHNAME } from "../router"
import { getUserInfoService } from "../request/user"
import { useRequest } from "ahooks"
import { UserOutlined } from "@ant-design/icons"
import { removeToken } from "../utils/user-token"
const UserInfo: FC = () => {
  const navigate = useNavigate()
  // 判断是否已经登录
  const { data } = useRequest(getUserInfoService)
  console.log("data---", data)
  const { username, nikename } = data || {}
  function logout() {
    removeToken()
    message.success("退出登录成功")
    navigate("login")
  }
  const UserInfo = (
    <>
      <span style={{ color: "#e8e8e8" }}>
        <UserOutlined />
        {nikename || username}
        <Button type="link" onClick={logout}>
          退出
        </Button>
      </span>
    </>
  )
  const Login = (
    <>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </>
  )
  return (
    <>
      <div>
        {/* <Link to={LOGIN_PATHNAME}>登录</Link> */}
        {username ? UserInfo : Login}
      </div>
    </>
  )
}
export default UserInfo
