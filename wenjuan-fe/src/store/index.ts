import { configureStore } from '@reduxjs/toolkit'
import CountReducer from './count'
import todoListReducer from './todoList'
import type { TodoItem } from './todoList'
export type StateType = {
  count: number,
  todolist: TodoItem[]
}
export default configureStore({
  reducer: {
    count: CountReducer,
    todolist: todoListReducer
    // 扩展其他模块
  }
}) 