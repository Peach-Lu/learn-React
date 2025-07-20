import React,{ FC} from "react";
import {useNavigate} from 'react-router-dom'
const Login:FC = ()=>{
  const navigate = useNavigate()
const back = ()=>{
  navigate(-1)
}
  return <>
  <p>Login</p>
  <button onClick={()=>navigate(-1)}>返回</button>
  </>
}
export default Login