import axios from "./http";
import type { ResDataType } from "./http";

export const getQuestionList = (id?: number | string) => {
  return axios.get<ResDataType>(`/question/${id}`);
};
                                                    // 返回的是promise类型 泛型 resdatatype
export async function getQuestionService(id:string):Promise<ResDataType> {
    const url = `/api/question/${id}`
    const data = (await axios.get(url)) as ResDataType
    return data
}
 export async function createQuestionService():Promise<ResDataType>{
    const url = `/api/question`
    const res = (await axios.post(url)) as ResDataType
    return res
 }