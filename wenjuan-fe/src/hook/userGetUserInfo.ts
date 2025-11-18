import { useSelector, useDispatch } from 'react-redux'
import { StateType } from '../store'
import { UserStateType } from '../store/userReducer'

function useGetUserInfo() {
  const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType
  console.log(username, nickname)
  return { username, nickname }
}

export default useGetUserInfo