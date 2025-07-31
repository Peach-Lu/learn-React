import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "@/request/question";
import type { ResDataType } from "@/request/http";
import useLoadingQuestionData from "@/hook/useLoadingQuestionData";
const Edit: FC = () => {
//   const { id } = useParams();
//   const [ResData, setResData] = useState<ResDataType>({});
//   const [loading, setLoading] = useState(false);
//   console.log("id", id);
//   useEffect(() => {
//     async function fn() {
//       const ResData = await getQuestionService(id);
//       console.log("ResData", ResData);
//       setResData(ResData);
//       setLoading(false);
//     }
//     fn();
//   }, []);


const { loading, data } = useLoadingQuestionData();
  return (
    <>
      <p>Edit</p>
      {loading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>}
    </>
  );
};
export default Edit;
