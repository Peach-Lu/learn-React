import React, { FC, useReducer } from "react"
type StateType = { count: number }
type ActionType = { type: string }
const initialState: StateType = { count: 200 }
function reducr(state: StateType, action: ActionType) {
  switch (action.type) {
    case "incrment":
      return { count: state.count + 1 }
    case "decrment":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const Countreducer2: FC = () => {
  const [state, dispath] = useReducer(reducr, initialState)
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispath({ type: "incrment" })}>+</button>
      <button onClick={() => dispath({ type: "decrment" })}> -</button>
    </>
  )
}
export default Countreducer2
