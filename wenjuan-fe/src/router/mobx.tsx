import React, { FC, useEffect } from "react";
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
// model the application store
class Timer {
  secondPassed = 0
  constructor() {
    makeAutoObservable(this)
  }
  increase() {
    this.secondPassed = this.secondPassed+1
  }

  reset() {
    this.secondPassed = 0
  }
}

const myTimer = new Timer()
console.log('myTimer',myTimer)
type PropsType = { timer:Timer }
const TimerView = observer((props:PropsType)=>{
  const { timer } = props
  return <button onClick={()=>timer.reset()}> Seconds passed: {timer.secondPassed} </button>
})
const Mobx: FC = () => {
  useEffect(()=>{
    const id  = setInterval(() => {
      myTimer.increase()
      return()=>{
        clearInterval(id)
      }
    }, 1000);
  },[])
  console.log('myTimer',myTimer)
  return <>
    <div className="pl-[10vw] pt-[10vh]">
      <h1>mbx</h1>
      return <TimerView timer={myTimer}></TimerView>
    </div>
  </>
}
export default Mobx