import React, { FC, useEffect } from "react"
import classNames from "classnames"
// import './QuestionCard.css';
import styles from "./QuestionCard.module.scss"
// import './QuestionCard.modules.scss';
// ts类型
// interface QuestionCardProps {
//     id: string;
//     title: string;
//     isPublished: boolean;
// }
type PropsType = {
  id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}
const QuestionCard: FC<PropsType> = props => {
  //   console.log('props', props);
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props
  // const edit = (id: string) => {
  //   // console.log('编辑',id)
  // }
  // function del(id: string) {
  //   deleteQuestion && deleteQuestion(id)
  //   // const index = questionList.findIndex(item=>item.id === id)
  // }
  // useEffect(() => {
  //   // console.log('question mounted' + id)
  //   // return ()=>{
  //   //     console.log('question销毁' + id)
  //   // }
  // }, [])
  // function publish(id: string) {
  //   publishQuestion && publishQuestion(id)
  // }

  const listItemClass = styles["list_item"]
  const publishedClass = styles["list-item-published"]
  const itemClassName = classNames({
    [listItemClass]: true,
    [publishedClass]: isPublished,
    "bg-white": true,
    "p-[10px]": true,
    "rounded-lg": true
  })
  console.log("itemClassName", itemClassName)

  return (
    <div className={itemClassName} key={id}>
      <div className="mt-[5px] flex justify-between pb-[10px]" style={{borderBottom:'1px solid #ccc'}}>
        <div className="text-blue-600/[.50] border-solid  border-b-[#ccc]">
          新建问卷
        </div>
        <div className="flex">
          {/* <div className="mr-[10px]">未发布</div> */}
          {isPublished ? (
        <span className={styles["list-item-published"]}> 已发布 </span>
      ) : (
        <span className=""> 未发布 </span>
      )}
          <div className="ml-[10px]">答卷0 01月12日 17:04</div>
        </div>
      </div>
      <div className="flex justify-between mt-[10px]">
        <div className="gap-1 flex">
          <div className="">编辑问卷</div>
          <div className="">数据统计</div>
        </div>
        <div className="flex gap-[5px]">
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
      {/* <strong> {title}</strong>
      {isPublished ? (
        <span className={styles["list-item-published"]}> 已发布 </span>
      ) : (
        <span> 未发布 </span>
      )}
      <button onClick={() => edit(id)}>编辑问卷</button>
      <button onClick={() => del(id)}>删除</button>
      <button onClick={() => publish(id)}>发布</button> */}
    </div>
  )
}
export default QuestionCard
