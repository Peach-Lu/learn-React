import React, { FC } from "react"
import { useState, createContext, useContext } from "react"
import Toolbar from "./Toobar"
const thmes = {
  light: {
    fore: "#000",
    background: "#eee"
  },
  dark: {
    fore: "#fff",
    background: "#222"
  }
}
let flag = false
export const LevelContext = createContext(thmes.light)

const Demo: FC = () => {
  const [thme, setTheme] = useState(thmes.light)
  function toDark() {
    if (flag) {
      setTheme(thmes.dark)
    } else {
      setTheme(thmes.light)
    }
    flag = !flag
    console.log("thme", thme)
  }

  return (
    <LevelContext.Provider value={thme}>
      <span>
        <p>Context Demo</p>
        <button onClick={toDark}>toDark</button>
      </span>
      <Toolbar></Toolbar>
    </LevelContext.Provider>
  )
}
export default Demo
