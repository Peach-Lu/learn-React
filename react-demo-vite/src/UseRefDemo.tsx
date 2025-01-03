import React,{FC,useRef,useEffect} from 'react'

const UseRefDemo:FC = ()=>{
    useEffect(()=>{
        console.log('useEffect')
        console.log(inputRef)
    },[])
    const inputRef = useRef<HTMLInputElement>(null)
    console.log(inputRef)

    function focus(){
        console.log(inputRef.current)
        inputRef.current?.select()
    }
    const nameRef = useRef('vite')
    function changeName(){
        nameRef.current = 'react'
        console.log(nameRef)
    }
    return <>
    <button onClick={changeName}>change</button>
    <p> name : {nameRef.current}</p>
    <input ref={inputRef} type="text" defaultValue={'hello world'} />
    <button onClick={focus}>选中 input</button>
    </>
}

export default UseRefDemo