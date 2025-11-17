import React,{FC} from "react";
import TodoList from "./TodoList";
import store from "./store";
const mobxTodoList:FC = ()=>{
  return <>
  <p>
    hello mobxTodoList
  </p>
  <br />
  <TodoList store={store}></TodoList>
  </>
}

export default mobxTodoList