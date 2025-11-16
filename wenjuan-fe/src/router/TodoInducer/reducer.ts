import { TodoType } from "./store";

export type ActionType = {
  type:string
  payload?:any //新增的todo 要删除的todoid
}
export default function reducer(state:TodoType[],action:ActionType){
  switch(action.type){
    case 'add':
      console.log('action.payload',action.payload)
      return state.concat(action.payload)
      case 'del':
        return state.filter(item=>item.id !== action.payload)
        default:
          throw new Error()
  }
}