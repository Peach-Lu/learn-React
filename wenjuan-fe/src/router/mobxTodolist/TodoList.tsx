import React, { FC } from "react";
import { observer } from "mobx-react";
import { ObservableTodoListStore } from './store';
import TodoView from "./TodoView";
type PropsType = {
  store: ObservableTodoListStore;
};

const TodoList: FC<PropsType> = observer((props: PropsType) => {
  const { store } = props;
  console.log('store', store)
  function newTodo() {
    const taskName = prompt('请输入一个todo名称')
    if (taskName) {
      store.addTodo(taskName)
    }
  }
  function del(id:string){
    store.removeTodo(id)
  }
  return (
    <>
      <button onClick={newTodo}>add Todo</button>
      <div>{JSON.stringify(store.todos)}</div>
      <ul>
        {store.todos.map(todo=>{
          const {id} = todo
          return <TodoView todo={todo} key={id} del={del}></TodoView>
        })}
      </ul>
    </>
  );
});

export default TodoList;
