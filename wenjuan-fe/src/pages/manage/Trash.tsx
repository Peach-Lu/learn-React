import React, { FC, useState } from "react"
import QuestionCard from "../../components/QuestionCard"
import ListSearch from "../../components/ListSearch"
import { useSearchParams, useParams } from "react-router-dom"
import { useTitle } from "ahooks"
import { Empty, Table, Tag, Button, Space, Modal } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import type { TableColumnsType, TableProps } from "antd"
import useLoadQuestionListData from "@/hook/useLoadQuestionListData";
import ListPage from "../../components/ListPage"


const columns: TableColumnsType = [
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
    render: text => {
      return text ? <Tag color="green">已发布</Tag> : <Tag>已发布</Tag>
    }
  },
  {
    title: "答卷数量",
    dataIndex: "answerCount",
    align: "center",
    key: "answerCount"
  }
]

const Start: FC = () => {
  // rawQuestionList = []
  const { loading, data, error } = useLoadQuestionListData({
    isDelete: true,
  });
  const { list: rawQuestionList = [], total = 0 } = data || {};
  console.log("rawQuestionList", rawQuestionList)

  const params = useParams()
  const [selectIds, setSelectIds] = useState<string[]>([])
  const [modal, contextHolder] = Modal.useModal()
  useTitle("回收站")
  console.log("params", params)
  const del = () => {
    console.log("selectIds", selectIds)
    // console.log("deleteQuestion", id)
    modal.confirm({
      title: "确定删除吗?",
      icon: <ExclamationCircleOutlined />,
      content: "删除后无法恢复",
      onOk: () => alert(`删除 ${JSON.stringify(selectIds)}`)
    })
    // setQuestionList(questionList.filter((item) => item.id !== id));
  }

  const rowSelection: TableProps<DataType>["rowSelection"] = {
    onChange: async (selectedRowKeys: React.Key[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`)
      setSelectIds(selectedRowKeys as string[])
      setTimeout(() => {
        console.log("selectIds: ", selectIds) //为什么 =这个打印的是上一次的值，不是最新的
      }, 0)
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  }
  function deleteId() {
    // setSelectIds(selectIds.filter(item => item !== id))
  }
  const TableElem = (
    <>
      <div className="mb-[10px]">
        <Space>
          <Button
            disabled={selectIds.length === 0}
            onClick={() => {
              console.log("selectIds", selectIds)
              setSelectIds([])
            }}
          >
            恢复
          </Button>
          <Button
            danger
            disabled={selectIds.length === 0}
            onClick={() => del()}
          >
            删除
          </Button>
          {contextHolder}
        </Space>
      </div>
      <Table
        rowSelection={{ type: "checkbox", ...rowSelection }}
        rowKey="_id"
        pagination={{ position: ["bottomRight"] }}
        dataSource={rawQuestionList}
        columns={columns}
      />
    </>
  )
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
                     <ListSearch></ListSearch>
            </div>
          </div>
          <div className="mb-10">
            {rawQuestionList.length === 0 && <Empty></Empty>}
            {rawQuestionList.length > 0 && TableElem}

            {/* {
          rawQuestionList.length > 0 ? 
          rawQuestionList.map((item) => {
            const { _id } = item
            return <QuestionCard id={_id} key={_id} {...item} deleteQuestion={deleteQuestion} />
          })
          : <Empty></Empty>
        } */}
          </div>
          <ListPage total={total}></ListPage>
          {/* <div className="mb-10 text-center">loadMore ... 上滑加载更多</div> */}
        </div>
      </div>
    </>
  )
}
export default Start
