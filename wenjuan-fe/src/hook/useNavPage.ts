import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import useGetUserInfo from "./userGetUserInfo"
import { isLoginOrRegister, isNoNeedUserInfo, MANAGE_PATHNAME, LOGIN_PATHNAME } from "../router"
function useNavPage(waitingUserData: boolean) {
  const { username } = useGetUserInfo()
  const { pathname } = useLocation()
  const nav = useNavigate()
  useEffect(() => {
    if (waitingUserData) return
    // 已经登录了
    if (username) {
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_PATHNAME) //跳到管理界面
      }
      return
    }
    // 未登录
    if (isNoNeedUserInfo(pathname)) {
      return
    } else {
      nav(LOGIN_PATHNAME)
    }

  }, [waitingUserData, username, pathname])
}
export default useNavPage