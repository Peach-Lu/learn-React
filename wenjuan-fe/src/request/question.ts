import axios from "./http"
import type { ResDataType } from "./http"
type SearchOption = {
  keyword: string
  isPublished: boolean
  isStar: boolean
  isDelete: boolean
  page: number
  pageSize: number
  // pageNum
  // pageSize
  // isStar
}
export const getQuestionList = (id?: SearchOption | string) => {
  return axios.get<ResDataType>(`/question/${id}`)
}
// 返回的是promise类型 泛型 resdatatype
// 获取问卷详情
export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as ResDataType
  return data
}
// 调用时可以只传部分字段，不需要全部都传。常用于接口参数、表单等场景
// Partial 是 TypeScript 的内置工具类型，它将一个类型的所有属性变为可选的。
// 例如，Partial<{ name: string; age: number }> 等价于 { name?: string; age?: number; }。
// 这样可以让你在使用时只需要提供部分属性，而不是全部属性。
// 获取问卷列表
export async function getQuestionServiceList(
  opt: Partial<SearchOption>
): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await axios.get(url, { params: opt })) as ResDataType
  return data
}
// 创建问卷
export async function createQuestionService(): Promise<ResDataType> {
  const url = `/api/question`
  const res = (await axios.post(url)) as ResDataType
  return res
}
// 更新问卷
export async function updateQuestionService(
  id: string,
  opt: { [key: string]: any }
): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await axios.patch(url, opt)) as ResDataType
  return data
}
// 复制问卷
export async function copyQuestionService(
  id: string,
  opt: { [key: string]: any }
): Promise<ResDataType> {
  const url = `api/question/duplicate/:${id}`
  const data = (await axios.post(url, opt)) as ResDataType
  return data
}
