import React,{FC,useCallback ,useState} from "react";
const Demo:FC = ()=>{
    console.log(1111111)
    const [text,setText] = useState('hello')
    const fn1 = ()=>console.log('fn1',text)
    const fn2 = useCallback(()=>{
        console.log('fn2',text)
    },[text])
    const editText = ()=>{
        setText('11111111')
    }
    return <>
    <div>
        <button onClick={fn1}>fn1</button>
        <button onClick={fn2}>fn2</button>
        <button onClick={editText}>add</button>
    </div>
    <div>
        <input type="text" onChange={e=>setText(e.target.value)} value={text} />
    </div>
    </>
}
export default Demo