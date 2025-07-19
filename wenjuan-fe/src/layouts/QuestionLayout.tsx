import React,{ FC} from "react";
import { Outlet} from "react-router-dom";


const QuestionLayout:FC = ({children})=>{

  return <>
  <p>QuestionLayout</p>
  <Outlet></Outlet>
  </>
}
export default QuestionLayout;