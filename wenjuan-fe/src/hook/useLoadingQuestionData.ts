import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "@/request/question";
import { useRequest } from "ahooks";

export default function useLoadingQuestionData() {
  const { id = "" } = useParams();
  //   const [loading, setLoading] = useState(true);
  //   const [questionData, setQuestionData] = useState({});
  //   useEffect(() => {
  //      async function fn() {
  //           const data = await getQuestionService(id);
  //           console.log("ResData", data);
  //           setQuestionData(data);
  //           setLoading(false);
  //         }
  //         fn();
  //   }, []);
  async function load() {
    const data = await getQuestionService(id);
    return data;
  }
  const { loading, data, error } = useRequest(load);
  return { loading, data, error };
}
