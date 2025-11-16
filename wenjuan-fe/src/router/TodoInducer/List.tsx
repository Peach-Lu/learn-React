import React,{FC,useReducer,useContext} from "react";
import { TodoContext } from "./index";
// import reducer from "./reducer";
// import initIalState from "./store";

const List:FC = ()=>{
const context =  useContext(TodoContext)
const {state,dispatch} =  useContext(TodoContext)
console.log('context',context)

// const [state,dispatch] = useReducer(reducer,initIalState)
function del(id:string){
  dispatch({type:'del',payload:id})
}
  return <>
  list
  <ul>
    {
      state.map(item=>{
        return <li key={item.id}> <span>{item.id}</span> {item.title}
        <button onClick={()=>del(item.id)}>删除</button>
        </li>
      })
    }
  </ul>
  </>
}
export default List