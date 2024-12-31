import React,{FC,useState} from "react";
import {produce} from 'immer'
const ImmerDemo:FC = ()=>{
   const [userInfo,setUserInfo] = useState({name:'vite',age:18})
       const [list,setList] = useState([1,2,3,4,5])
       // 不可变数据 不去修改state的值 需要传入一个新的值
       function changeAge(){
        //    setUserInfo({...userInfo,age:21})
        setUserInfo(produce(draft=>{
            draft.age = 21
        }))
       }
       function changeList(){
        //   setList([...list,6])
        setList(produce(draft=>{
            draft.push(draft.length + 1)
        }))
       }
       return <>
       <div></div>
       <h2 > state 不可变数据</h2>
       <div>{JSON.stringify(userInfo)}</div>
       <button onClick={changeAge}>change age</button>
       <div> {JSON.stringify(list)}</div>
       <button onClick={changeList}>changeList</button>
       </>
}

export default ImmerDemo