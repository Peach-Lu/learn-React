import { createSlice } from '@reduxjs/toolkit'
const INIT_STATE: number = 100
export const countSlice = createSlice({
  name: 'count',
  initialState: INIT_STATE,
  reducers: {
    increase(state) {
      return state + 1
    },
    decrease(state) {
      return state - 1 //返回一个新的 staet 不可变数据
    }
  }
})

export const { increase, decrease } = countSlice.actions
export default countSlice.reducer