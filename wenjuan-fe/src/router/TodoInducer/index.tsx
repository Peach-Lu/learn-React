import React,{FC,createContext,useReducer} from "react";
import List from "./List";
import InputForm from "./InputForm";

import reducer from "./reducer";
import initIalState, { ActionType } from "./store";

export const TodoContext = createContext({
  state:initIalState,
  dispatch:(action:ActionType)=>{ 
    /**空 */
  }
})
const TodoList:FC = ()=>{
  const [state,dispatch] = useReducer(reducer,initIalState)
  return <TodoContext.Provider value={{state,dispatch}}>
  <p>Todo list by userinfo</p>
  <div>
    <List></List>
  </div>
  <div>
  <InputForm></InputForm>

  </div>
  </TodoContext.Provider>
}
export default TodoList