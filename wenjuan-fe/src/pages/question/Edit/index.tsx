import React,{FC} from "react";
import { useParams} from 'react-router-dom'
const Edit:FC = ()=>{
  const {id} = useParams()
  console.log('id',id)
  return <>
  <p>Edit</p>
  </>
}
export default Edit;