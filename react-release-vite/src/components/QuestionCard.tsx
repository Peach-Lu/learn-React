import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
// import './QuestionCard.css';
import styles from './QuestionCard.module.scss';
// import './QuestionCard.modules.scss';
// ts类型
// interface QuestionCardProps {
//     id: string;
//     title: string;
//     isPublished: boolean;
// }
type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
  deleteQuestion?: (id: string) => void;
  publishQuestion?: (id: string) => void;
};
const QuestionCard: FC<PropsType> = (props) => {
  //   console.log('props', props);
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props;
  const edit = (id: string) => {
    // console.log('编辑',id)
  };
  function del(id: string) {
    deleteQuestion && deleteQuestion(id);
    // const index = questionList.findIndex(item=>item.id === id)
  }
  useEffect(() => {
    // console.log('question mounted' + id)
    // return ()=>{
    //     console.log('question销毁' + id)
    // }
  }, []);
  function publish(id: string) {
    publishQuestion && publishQuestion(id);
  }

  const listItemClass = styles['list_item'];
  const publishedClass = styles['list-item-published'];
  const itemClassName = classNames({
    [listItemClass]: true,
    [publishedClass]: isPublished,
  });
  console.log('itemClassName', itemClassName);

  return (
    <div className={itemClassName} key={id}>
      <strong> {title}</strong>
      {/* 条件判断 */}
      {isPublished ? (
        <span className={styles['list-item-published']}> 已发布 </span>
      ) : (
        <span> 未发布 </span>
      )}
      <button onClick={() => edit(id)}>编辑问卷</button>
      <button onClick={() => del(id)}>删除</button>
      <button onClick={() => publish(id)}>发布</button>
    </div>
  );
};
export default QuestionCard;
