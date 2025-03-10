import React, { FC, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import styles from "./List.module.scss";
const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: "2月2日 12:00",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: true,
    isStar: false,
    answerCount: 6,
    createAt: "2月2日 12:00",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: true,
    isStar: false,
    answerCount: 7,
    createAt: "2月3日 12:00",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: false,
    isStar: false,
    answerCount: 8,
    createAt: "2月8日 12:00",
  },
  {
    _id: "q5",
    title: "问卷5",
    isPublished: false,
    isStar: false,
    answerCount: 9,
    createAt: "2月9日 12:00",
  },
  {
    _id: "q6",
    title: "问卷6",
    isPublished: true,
    isStar: false,
    answerCount: 2,
    createAt: "2月2日 12:00",
  },
];
const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <>
      {/* <div className={styles["header"]}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div> */}
      <div className="flex">
        <div className="flex-1 mb-10">
          <h3>我的问卷</h3>
        </div>
        <div className="flex-1 text-right">搜索</div>
      </div>
      <div className="mb-10">
        {
          questionList.map((item) => {
            const { id } = item
            return <QuestionCard key={id} {...item} />
          })
        }
      </div>
      <div className="mb-10 text-center">footer</div>
    </>
  );
};
export default List;
