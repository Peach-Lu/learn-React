import React,{ FC} from "react";
import { Outlet} from "react-router-dom";
import useLoadUserData from "../hook/useLoadUserData"
import useNavPage from "../hook/useNavPage";


const QuestionLayout:FC = ({children})=>{
  const {waitingUserData}  = useLoadUserData()
  useNavPage(waitingUserData)
  return <>
  <p>QuestionLayout</p>
  {!waitingUserData && <Outlet></Outlet>}
  </>
}
export default QuestionLayout;