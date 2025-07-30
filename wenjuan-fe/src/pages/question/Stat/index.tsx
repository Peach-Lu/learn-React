import React,{ FC} from "react";
import useLoadingQuestionData from "@/hook/useLoadingQuestionData";

const  Stat:FC = ()=>{
    const { loading, questionData } = useLoadingQuestionData();
    
  return <>
  <p>Stat</p>
      {loading ? <p>Loading...</p> : <p>{JSON.stringify(questionData)}</p>}

  </>
}
export default Stat