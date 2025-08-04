import React, { FC, useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { useSearchParams, useParams } from "react-router-dom";
import ListSearch from "../../components/ListSearch";
import { useTitle, useRequest, useDebounceFn } from "ahooks";
import { getQuestionServiceList } from "@/request/question";
import useLoadQuestionListData from "@/hook/useLoadQuestionListData";
import { Empty } from "antd";
import ListPage from "../../components/ListPage";

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
  //   const {  loading, data, error } = useLoadQuestionListData();
  //   const {list:questionList=[],total} = data || {};

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const haveMore = total > list.length; // 是否还有更多数据
  const [searchParams] = useSearchParams(); // 有keyword
  useTitle("我的问卷");
  // console.log('keyWord', searchParams);
  //   console.log("params", params);
  const deleteQuestion = (id: string) => {
    console.log("deleteQuestion", id);
  };
  //   触发加载

  const { run: tryLoadMore } = useDebounceFn(
    () => {
      console.log("tryLoadMore");
    },
    {
      wait: 500,
    }
  );
  //当页面加载或者url参数keyword发生变化的时候 重新加载
  useEffect(() => {
    tryLoadMore();
  }, [searchParams]);

  //   页面滚动时 触发
  useEffect(() => {
    console.log("开始设置滚动监听", window);
    window.addEventListener("scroll", tryLoadMore, true);
    return () => {
      window.removeEventListener("scroll", tryLoadMore, true);
    };
  }, [searchParams]); // 添加空依赖数组，确保只在组件挂载时执行一次
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
              <h3>我的问卷</h3>
            </div>
            <div className="flex-1 text-right">
              <ListSearch></ListSearch>
            </div>
          </div>
          <div className="mb-10 h-[2000px]">
            {list.length > 0 ? (
              list.map((item) => {
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
          <div className="mb-10 text-center">
            loadMore... 上划加载更多
            {/* <ListPage  total={total}></ListPage> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default List;
