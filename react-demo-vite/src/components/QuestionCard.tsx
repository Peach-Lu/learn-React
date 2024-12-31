import React, { FC } from 'react';
import './QuestionCard.css'
// ts类型
interface QuestionCardProps {
    id: string;
    title: string;
    isPublished: boolean;
}
type PropsType = {
    id:string
    title:string
    isPublished:boolean
}
const QuestionCard: FC<QuestionCardProps> = (props) => {
  console.log('props', props);
  const { id, title, isPublished } = props;
  const edit = (id:string)=>{
    console.log('编辑',id)
   
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
    </div>
  );
};
export default QuestionCard;
