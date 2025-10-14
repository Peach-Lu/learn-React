import { getQuestionServiceList } from "@/request/question"
import { useSearchParams, useParams } from "react-router-dom"
import { useRequest } from "ahooks"
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE
} from "../constant"
type OptionType = {
  keyword: string
  isPublished: boolean
  isStar: boolean
  isDelete: boolean
  // pageNum
  // pageSize
  // isStar
}
function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { id = "" } = useParams()
  const [searchParams] = useSearchParams()
  const { loading, data, error } = useRequest(
    async () => {
      const keyWord = searchParams.get(LIST_SEARCH_PARAM_KEY) || ""
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || "1") || 1
      const pageSize =
        parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || "10") ||
        LIST_PAGE_SIZE
      const data = await getQuestionServiceList({
        keyWord,
        page,
        pageSize,
        ...opt
      })

      console.log("data", data)
      return data // list total
    },
    {
      refreshDeps: [searchParams]
    }
  )
  return { loading, data, error }
}
export default useLoadQuestionListData
