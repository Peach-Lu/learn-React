import React, { FC } from "react";
import { useSelector, useDispatch } from 'react-redux'
import  { addTodo, removeTodo, toggleCompleted }from '../store/todoList'
import type { StateType } from "../store";
import type { TodoItem } from '../store/todoList'
const TodoList: FC = () => {
  const todolist = useSelector<StateType>(store => store.todolist) as TodoItem[]
  const dispatch = useDispatch( )
  function del(id:string){
    dispatch(removeTodo({id}))
  }
  function toggle(id:string){
    dispatch(toggleCompleted({id}))
  }
  function add(){
    const newTodo = {
      id:todolist.length - 1,
      title:`todo-${todolist.length - 1}`,
      completed:false
    }
    dispatch(addTodo(newTodo))
  }
  return <>
    <div className="pl-[10vw] pt-[10vh]">
      <h1>hello world</h1>
      <div><button onClick={add}>添加todo</button></div>
      <ul>
        {todolist.map(item => {
          const {id,title,completed} = item
          return <li
          key={id}
          style={{textDecoration:completed ? 'line-through' : ''}}
          >
            <span className="mr-[10px]" onClick={()=>toggle(id)}>
            {item.title}
            </span>
            <button onClick={()=>del(id)}>删除</button>
          </li>
        })}
      </ul>
    </div>
  </>
}
export default TodoList