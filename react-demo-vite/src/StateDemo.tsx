import React,{FC,useState} from "react";
const Demo:FC = () =>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Vite');
    function add (){

        // setCount(count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
    
        console.log('current count',count)
        setName('react')
    }
    return <>
    <button onClick={add}>add {count}</button>
    </>
}
export default Demo