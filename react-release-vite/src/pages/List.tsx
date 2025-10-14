import React, { FC, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { produce } from 'immer';
import styles from './List.module.scss';
console.log('styles', styles);
const rawList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: '3月11号',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStart: false,
    answerCount: 5,
    createAt: '3月12号',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStart: false,
    answerCount: 5,
    createAt: '3月13号',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: '3月14号',
  },
  {
    id: 'q5',
    title: '问卷5',
    isPublished: false,
    isStart: false,
    answerCount: 5,
    createAt: '3月15号',
  },
  {
    id: 'q6',
    title: '问卷6',
    isPublished: true,
    isStart: false,
    answerCount: 5,
    createAt: '3月16号',
  },
];
const List: FC = () => {
  const [list, setList] = useState(rawList);
  return (
    <>
      <p>QuestionCard</p>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      {list.map((item) => {
        <QuestionCard
          id={item.id}
          title={item.title}
          isPublished={item.isPublished}
        ></QuestionCard>;
      })}
    </>
  );
};

export default List;
