import React, { FC } from "react"
import { Link } from "react-router-dom"
import {LOGIN_PATHNAME} from "../router"

const UserInfo: FC = () => {
  // 判断是否已经登录
  return (
    <>
      <div>
        <Link to={LOGIN_PATHNAME}>登录</Link>
      </div>
    </>
  )
}
export default UserInfo
