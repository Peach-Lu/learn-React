import { FC } from "react"
import QuestionCard from "../../components/QuestionCard"
import ListSearch from "../../components/ListSearch"
import { useSearchParams, useParams } from "react-router-dom"
import { useTitle } from "ahooks"
import { Empty } from "antd"
import useLoadQuestionListData from "@/hook/useLoadQuestionListData"
import ListPage from "../../components/ListPage"

// rawQuestionList = []
const Start: FC = () => {
  const [searchParams] = useSearchParams()
  const params = useParams()
  useTitle("星标问卷")
  console.log("keyWord", searchParams)
  console.log("params", params)

  const { loading, data } = useLoadQuestionListData({
    isStar: true
  })
  const {
    list: rawQuestionList = [],
    total = 0,
    page = 1,
    pageSize = 10
  } = data || {}
  //   const [questionList, setQuestionList] = useState(rawQuestionList);
  const deleteQuestion = (id: string) => {
    console.log("deleteQuestion", id)
    // setQuestionList(questionList.filter((item) => item.id !== id));
  }

  return (
    <>
      {/* <div className={styles["header"]}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div> */}
      <div className=" p-[20px]">
        <div className=" pt-[10px] pb-[10px]">
          <div className="flex justify-center">
            <div className="flex-1">
              <h3>星标问卷{total}</h3>
            </div>
            <div className="flex-1 text-right">
              <ListSearch></ListSearch>
            </div>
          </div>
          <div className="mb-10">
            {!loading && rawQuestionList.length === 0 && (
              <Empty description="暂无数据"></Empty>
            )}
            {rawQuestionList.length > 0
              ? rawQuestionList.map(item => {
                  const { _id } = item
                  return (
                    <QuestionCard
                      id={_id}
                      key={_id}
                      {...item}
                      deleteQuestion={deleteQuestion}
                    />
                  )
                })
              : "加载中。。。"}
          </div>
          <div className="mb-10 text-center">
            <ListPage
              current={page}
              total={total}
              defaultPageSize={pageSize}
            ></ListPage>
          </div>
        </div>
      </div>
    </>
  )
}
export default Start
