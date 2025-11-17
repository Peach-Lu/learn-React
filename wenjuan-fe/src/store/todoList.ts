import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export type TodoItem = {
  id: string
  title: string
  completed: boolean // 是否完成
}
const INIT_STATE: TodoItem[] = [
  { id: nanoid(5), title: '吃饭', completed: false },
  { id: nanoid(5), title: '睡觉', completed: false },
  { id: nanoid(5), title: '打豆豆', completed: false },
]

export const todoListSlice = createSlice({
  name: 'todolist',
  initialState: INIT_STATE,
  reducers: {
    addTodo(state: TodoItem[], action: PayloadAction<TodoItem>) {
      // 把newtodo 添加到第一个
      return [
        action.payload,
        ...state
      ]
    },
    removeTodo(state: TodoItem[], action: PayloadAction<{ id: string }>) {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    toggleCompleted(state: TodoItem[], action: PayloadAction<{ id: string }>) {
      const { id: toggleId } = action.payload
      return state.map(item => {
        const { id, completed } = item
        if (id !== toggleId) return item
        return {
          ...item,
          completed: !completed
        }
      })
    }
  }
})



export const { addTodo, removeTodo, toggleCompleted } = todoListSlice.actions;
export default todoListSlice.reducer;
