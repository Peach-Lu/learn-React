import React, { FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { useSearchParams, useParams } from "react-router-dom";
import ListSearch from "../../components/ListSearch";
import { useTitle, useRequest } from "ahooks";
import { getQuestionServiceList } from "@/request/question";
import useLoadQuestionListData from "@/hook/useLoadQuestionListData";
import { Empty } from "antd";
const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: true,
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
    isStar: true,
    answerCount: 9,
    createAt: "2月9日 12:00",
  },
  {
    _id: "q6",
    title: "问卷6",
    isPublished: true,
    isStar: true,
    answerCount: 2,
    createAt: "2月2日 12:00",
  },
];
// rawQuestionList = []
const List: FC = () => {
  //   const [questionList, setQuestionList] = useState(rawQuestionList);
  //   const [questionList, setQuestionList] = useState([]);
  //   const [total, setTotal] = useState([]);
  // const [list,setList] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
//   const params = useParams();
//   const { loading, data = {} } = useRequest(getQuestionServiceList, {
//     onSuccess: (data) => {
//       //   console.log("onSuccess", data);
//       //   setQuestionList(data.list);
//       //   setTotal(data.total);
//     },
//   });
//   const { list: questionList = [], total = 0 } = data;
  const {  loading, data, error } = useLoadQuestionListData();
  const {list:questionList=[],total} = data || {};
  useTitle("问卷列表");
  // console.log('keyWord', searchParams);
  //   console.log("params", params);
  const deleteQuestion = (id: string) => {
    console.log("deleteQuestion", id);
  };
  return (
    <>
      {/* <div className={styles["header"]}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div> */}
      <div className="p-[20px]">
        <div className=" pt-[10px] pb-[10px]">
          <div className="flex justify-center">
            <div className="flex-1">
              <h3>我的问卷{total}</h3>
            </div>
            <div className="flex-1 text-right">
              <ListSearch></ListSearch>
            </div>
          </div>
          <div className="mb-10">
            {questionList.length > 0 ? (
              questionList.map((item) => {
                const { _id } = item;
                return (
                  <QuestionCard
                    id={_id}
                    key={_id}
                    {...item}
                    deleteQuestion={deleteQuestion}
                  />
                );
              })
            ) : (
              <Empty></Empty>
            )}
          </div>
          <div className="mb-10 text-center">loadMore ... 上滑加载更多</div>
        </div>
      </div>
    </>
  );
};
export default List;
