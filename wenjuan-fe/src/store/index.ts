import { configureStore } from '@reduxjs/toolkit'
import CountReducer from './count'
export type StateType = {
  count: number
}
export default configureStore({
  reducer: {
    count: CountReducer
    // 扩展其他模块
  }
}) 