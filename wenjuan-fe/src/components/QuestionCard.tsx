import { FC, useState } from "react"
import classNames from "classnames"
// import './QuestionCard.css';
import styles from "./QuestionCard.module.scss"
import { useNavigate, Link } from "react-router"
import { updateQuestionService, copyQuestionService } from "@/request/question"
import { useRequest } from "ahooks"
import {
  Button,
  Space,
  Divider,
  Tag,
  Popconfirm,
  message,
  PopconfirmProps
} from "antd"
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined
} from "@ant-design/icons"
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
  const {
    id,
    title,
    isPublished,
    isStar,
    createAt
    // deleteQuestion
    // publishQuestion
  } = props
  // 修改标星
  const [isStarState, setIsStarState] = useState(isStar)
  const navigate = useNavigate()

  // const confirm: PopconfirmProps["onConfirm"] = e => {
  //   console.log(e)
  //   message.success("Click on Yes")
  // }

  // function duplicate(id: string) {
  //   message.success("执行复制")
  // }

  // 复制问卷
  const { loading, run: duplicate } = useRequest(
    async id => {
      console.log("id------", id)
      const data = await copyQuestionService(id, {})
      return data
    },
    {
      manual: true,
      onSuccess(result: any) {
        console.log("result", result)
        message.success("复制问卷成功")
        navigate("/question/edit/" + result.id)
      }
    }
  )
  // 删除问卷
  const [isDeletedState, setIsDeletedState] = useState(false)
  console.log("isDeletedState", isDeletedState)
  const { loading: loadingdel, run: deleteQuestion } = useRequest(
    async (id, num) => {
      console.log("id", id)
      console.log("num", num)
      const data = await updateQuestionService(id, { isDelete: true })
      return data
    },
    {
      manual: true,
      onSuccess(result: any) {
        message.success("删除问卷成功")
        setIsDeletedState(true)
      }
    }
  )
  const cancel: PopconfirmProps["onCancel"] = e => {
    console.log(e)
    message.error("Click on No")
  }

  const { run: changeStar, loading: changeStrarLoading } = useRequest(
    async id => {
      console.log("id------", id)
      await updateQuestionService(id, { isStar: !isStarState })
    },
    {
      manual: true,
      onSuccess(result) {
        console.log("result", result)
        setIsStarState(!isStarState)
        message.success("标星成功")
      }
    }
  )

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
  // console.log("itemClassName", itemClassName)

  // 已经删除的问卷不要渲染卡片了
  if (isDeletedState) return null
  return (
    <div className={itemClassName} key={id}>
      <div className="mt-[5px] flex justify-between pt-[10px]">
        <div className="text-blue-600/[.50] border-solid  border-b-[#ccc]">
          <Link
            to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}
          >
            <Space>
              {isStarState && (
                <StarOutlined style={{ color: "red" }}></StarOutlined>
              )}
              {title}
            </Space>
          </Link>
        </div>
        <div className="flex">
          {/* <div className="mr-[10px]">未发布</div> */}
          {isPublished ? (
            <Tag color="processing">已发布</Tag>
          ) : (
            <Tag color="">未发布</Tag>
          )}
          <div className="ml-[10px]">
            {id} {createAt}
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div className="flex justify-between mt-[10px]">
        <div className="gap-1 flex">
          <Button
            icon={<EditOutlined />}
            onClick={() => navigate(`/question/edit/${id}`)}
          >
            编辑问卷
          </Button>
          <Button
            icon={<LineChartOutlined />}
            disabled={!isPublished}
            onClick={() => navigate(`/question/stat/${id}`)}
          >
            数据统计
          </Button>
        </div>
        <div className="flex gap-[5px]">
          <Space>
            <Button
              icon={<StarOutlined></StarOutlined>}
              size="small"
              onClick={() => changeStar(id)}
              disabled={changeStrarLoading}
            >
              标星
            </Button>
            <Popconfirm
              title="确认复制该问卷"
              onConfirm={() => duplicate && duplicate(id)}
              onCancel={cancel}
              okText="确认"
              cancelText="取消"
            >
              <Button
                disabled={loading}
                icon={<CopyOutlined></CopyOutlined>}
                size="small"
              >
                复制
              </Button>
            </Popconfirm>

            <Popconfirm
              title="确认删除该问卷吗？"
              description="删除后无法恢复"
              onConfirm={() => deleteQuestion && deleteQuestion(id, 1221)}
              onCancel={cancel}
              okText="是"
              cancelText="否"
            >
              <Button
                disabled={loadingdel}
                icon={<DeleteOutlined></DeleteOutlined>}
                size="small"
              >
                删除
              </Button>
            </Popconfirm>
          </Space>
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
