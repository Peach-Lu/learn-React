import { useState,useEffect, useCallback } from "react";
// 获取鼠标位置
function useMouse(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const mouseMoveHandler = useCallback((e:MouseEvent)=>{
        console.log(e)
        setX(e.clientX)
        setY(e.clientY)
    },[])
    // 组件挂载的时候执行
    useEffect(()=>{
        // 监听鼠标事件
        window.addEventListener('mousemove',mouseMoveHandler)
        // 组件卸载的时候执行
        return ()=>{
            // 移除监听事件 防止内存泄漏
            window.removeEventListener('mousemove',mouseMoveHandler)
        }
    },[])
    return {x,y}
    // const [point,setPoint] = useState({x:0,y:0})
    // useEffect(()=>{
    //     const updateMouse = (e:MouseEvent)=>{
    //         setPoint({x:e.clientX,y:e.clientY})
    //     }
    //     document.addEventListener('mousemove',updateMouse)
    //     return ()=>{
    //         document.removeEventListener('mousemove',updateMouse)
    //     }
    // },[])
    // return point
}
export default useMouse