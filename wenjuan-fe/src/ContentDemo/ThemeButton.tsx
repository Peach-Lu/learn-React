import React, { FC, useContext } from "react"
import { LevelContext } from "./index"
const Toolbar: FC = () => {
  const thme = useContext(LevelContext)
  const stlye = { color: thme.fore, background: thme.background }
  return (
    <>
      {JSON.stringify(stlye)}
      <button style={stlye}>ThemeButton</button>
    </>
  )
}
export default Toolbar
