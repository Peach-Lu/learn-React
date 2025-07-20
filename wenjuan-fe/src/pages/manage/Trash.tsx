import React, { FC } from "react"
import QuestionCard from "../../components/QuestionCard"
import { useSearchParams, useParams } from "react-router-dom"
import { useTitle } from "ahooks"
import { Empty, Table, Tag } from "antd"
const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createAt: "2月2日 12:00"
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: true,
    isStar: false,
    answerCount: 6,
    createAt: "2月2日 12:00"
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: true,
    isStar: false,
    answerCount: 7,
    createAt: "2月3日 12:00"
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: false,
    isStar: false,
    answerCount: 8,
    createAt: "2月8日 12:00"
  },
  {
    _id: "q5",
    title: "问卷5",
    isPublished: false,
    isStar: true,
    answerCount: 9,
    createAt: "2月9日 12:00"
  },
  {
    _id: "q6",
    title: "问卷6",
    isPublished: true,
    isStar: true,
    answerCount: 2,
    createAt: "2月2日 12:00"
  }
].filter(item => item.isStar)
// rawQuestionList = []



const columns = [
  {
    title: "标题",
    dataIndex: "title",
    align: "center",
    key: "title"
  },
  {
    title: "是否发布",
    dataIndex: "isPublished",
    key: "isPublished",
    align: "center",
    render: (text) => {
      return text ? <Tag color="green">已发布</Tag> : <Tag>已发布</Tag> 
    },
  },
  {
    title: "答卷数量",
    dataIndex: "answerCount",
    align: "center",
    key: "answerCount"
  }
]
const Start: FC = () => {
  console.log("rawQuestionList", rawQuestionList)
  // const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams()
  useTitle("回收站")
  // console.log('keyWord', searchParams);
  console.log("params", params)
  // const [questionList, setQuestionList] = useState(rawQuestionList);
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
              <h3>回收站</h3>
            </div>
            <div className="flex-1 text-right">
              <input type="text" className="bg-white" />
              搜索
            </div>
          </div>
          <div className="mb-10">
            <Table  pagination={{ position: ['bottomRight'] }} dataSource={rawQuestionList} columns={columns} />;
            {/* {
          rawQuestionList.length > 0 ? 
          rawQuestionList.map((item) => {
            const { _id } = item
            return <QuestionCard id={_id} key={_id} {...item} deleteQuestion={deleteQuestion} />
          })
          : <Empty></Empty>
        } */}
          </div>
          <div className="mb-10 text-center">loadMore ... 上滑加载更多</div>
        </div>
      </div>
    </>
  )
}
export default Start
