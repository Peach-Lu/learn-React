import React,{FC} from "react";
import { observer }  from 'mobx-react'
import {ObservableTodoStore} from './store'
import { toggleCompleted } from "../../store/todoList";
type PropsType = {
  todo:ObservableTodoStore,
  del:(id:string)=>any
}
const TodoView:FC<PropsType> = observer((props:PropsType)=>{
  const { todo,del } = props
  function rename(){ 
    const newName = prompt('重新输入名称',todo.task) as string
    if(newName){
    todo.rename(newName)
    }
  }
  function toggleCompleted(){
    todo.toggleCompleted()
  }

  return <li onDoubleClick={rename}>
    <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
  <span style={{color:todo.completed ? 'red' : ''}}>  {todo.task}</span>
  <button onClick={()=>del(todo.id)}>
    删除
  </button>
  </li>
})
export default TodoView