import { useEffect, useState } from 'react'
import useGetUserInfo from './userGetUserInfo'
import { useDispatch } from 'react-redux'
import { loginReducer } from '../store/userReducer'
import { useRequest } from 'ahooks'
import { getUserInfoService } from "../request/user"


function useLoadUserData() {
  const [waitingUserData, setWaitingUserData] = useState(true)
  const dispatch = useDispatch()
  // ajax加载用户信息
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      dispatch(loginReducer({ username, nickname }))
    },
    onFinally(err) {
      setWaitingUserData(false)
    }
  })

  // 判断当前redux store是否已经存在用户信息
  const { username } = useGetUserInfo() // redux store
  useEffect(() => {
    if (username) {
      setWaitingUserData(false)
      return
    }
    run()
  }, [username])
  return { waitingUserData }
}
export default useLoadUserData