import React, { FC, useState, useReducer } from "react"
type StateType = { count: number }
type ActionType = { type: string }
const initIalState: StateType = { count: 100 } //初始值
// 根据传入的action 返回新的state 不可变数据
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrment":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
const CountReducer: FC = () => {
  // const [count, setCount] = useState(100)
  const [state, dispath] = useReducer(reducer, initIalState)
  return (
    <>
      <div>count:{state.count}</div>
      <button onClick={() => dispath({ type: "increment" })}>+</button>
      <button onClick={() => dispath({ type: "decrment" })}>-</button>
    </>
  )
}
export default CountReducer
