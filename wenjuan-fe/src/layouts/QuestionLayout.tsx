import React,{ FC} from "react";
import { Outlet} from "react-router-dom";
import useLoadUserData from "../hook/useLoadUserData"
import useNavPage from "../hook/useNavPage";
import { Spin } from "antd";
const QuestionLayout:FC = ({children})=>{
  // 获取用户信息
  const {waitingUserData}  = useLoadUserData()
  // 用户没有登录 跳转登录页面
  useNavPage(waitingUserData)
  return <>
  {/* <p>QuestionLayout</p> */}
  {/* {!waitingUserData && <Outlet></Outlet>} */}

  <div style={{height:'100vh'}}>
    {waitingUserData ? (
      <div style={{textAlign:'center',marginTop:'60px'}}>
        <Spin />
      </div>
    ) : (
      <Outlet></Outlet>
    )}
  </div>
  </>
}
export default QuestionLayout;