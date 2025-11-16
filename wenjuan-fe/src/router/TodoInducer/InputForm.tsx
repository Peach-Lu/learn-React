import React, { FC, useReducer, useState, useContext } from "react";
import { nanoid } from "nanoid";
import reducer from "./reducer";
import initIalState from "./store";
import { TodoContext } from "./index";
const InputForm: FC = () => {
  const { state, dispatch } = useContext(TodoContext)
  // const [state, dispatch] = useReducer(reducer, initIalState)
  const [text, SetText] = useState('')
  function handleChange(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target)
    SetText(e.target.value)

  }

  function submit() {
    if (!text.trim()) return
      dispatch({
        type: 'add', payload: {
          id: nanoid(5),
          title: text
        }
      })
      SetText('')
  }
  return <>
    <input type="text" onChange={handleChange} value={text} /> <button onClick={submit}>add # {state.length + 1}</button>
    <div>
      {text}
    </div>
  </>
}

export default InputForm




















