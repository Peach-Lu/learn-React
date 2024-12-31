import React, { FC } from 'react';
import './QuestionCard.css'
// ts类型
// interface QuestionCardProps {
//     id: string;
//     title: string;
//     isPublished: boolean;
// }
type PropsType = {
    id:string
    title:string
    isPublished:boolean
    deleteQuestion?:(id:string) => void
    publishQuestion?:(id:string) => void
    
}
const QuestionCard: FC<PropsType> = (props) => {
  console.log('props', props);
  const { id, title, isPublished,deleteQuestion,publishQuestion } = props;
  const edit = (id:string)=>{
    console.log('编辑',id)
   
  }
  function del(id:string){
    deleteQuestion && deleteQuestion(id)
    // const index = questionList.findIndex(item=>item.id === id)
  }
  function publish(id:string){
    publishQuestion && publishQuestion(id)
  }

  return (
    <div className="list_item" key={id}>
      <strong> {title}</strong>
      {/* 条件判断 */}
      {isPublished ? (
        <span style={{ color: 'green' }}> 已发布 </span>
      ) : (
        <span> 未发布 </span>
      )}
      <button onClick={() => edit(id)}>编辑问卷</button>
      <button onClick={()=>del(id)}>删除</button>
      <button onClick={()=>publish(id)}>发布</button>
    </div>
  );
};
export default QuestionCard;
