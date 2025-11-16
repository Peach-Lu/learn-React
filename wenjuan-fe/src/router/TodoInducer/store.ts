import {nanoid} from 'nanoid'
export type TodoType = {
  id:string
  title:string
}

export type ActionType = {
  type:string
  payload?:any //新增的todo 要删除的todoid
}

const  initIalState:TodoType[] = [
  {id:nanoid(5),title:'吃饭'},
  {id:nanoid(5),title:'睡觉'},
]

export default initIalState