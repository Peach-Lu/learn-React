import { getQuestionServiceList } from "@/request/question";
import { useSearchParams, useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { LIST_SEARCH_PARAM_KEY } from "../constant";
import { getQuestionServiceList } from "@/request/question";

function useLoadQuestionListData() {
  const { id = "" } = useParams();
  const [searchParams] = useSearchParams();
  const { loading, data, error } = useRequest(async () => {
    const keyWord = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    const data = await getQuestionServiceList({ keyWord });
    return data; // list total
  },{
    refreshDeps: [searchParams],
  });
  return { loading, data, error };
}
export default useLoadQuestionListData;
