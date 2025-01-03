import {FC,useMemo, useState} from 'react'

const UseMemoDemo:FC = ()=>{
    const [num1,setNum1] = useState(10)
    const [num2,setNum2] = useState(20)
    const [text,setText] = useState('hello')
    const sum = useMemo(()=>{
        console.log('useMemo')
        return num1+num2
    },[num1,num2])
    const count = useMemo(()=>{
        console.log('useMemo')
        return 1
    },[])
    return <>
    <div>useMemo</div>
    <div>{count}</div>
    <p onClick={()=>setNum1(num1+1)}>{num1}</p>
    <p onClick={()=>setNum2(num2+1)}>{num2}</p>
    <div>sum{sum}</div>
    </>
}
export default UseMemoDemo