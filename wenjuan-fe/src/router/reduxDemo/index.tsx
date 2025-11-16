import React,{FC} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increase,decrease } from "../../store/count";
import type { StateType} from '../../store/index'
const reduxDemo:FC = ()=>{
  const count = useSelector<StateType>(state => state.count)
  const dispatch =  useDispatch()
  return <>
<div className="mt-[10px] pl-[20px]">
    reduxDemo
    <br />
  <span>{ JSON.stringify(count) }</span>
  <br />
  <div className="flex gap-[10px]">
    <button onClick={()=>dispatch(increase())}>+</button>
  <button onClick={()=>dispatch(decrease())}>-</button>
  </div>

</div>
  </>
}
export default reduxDemo