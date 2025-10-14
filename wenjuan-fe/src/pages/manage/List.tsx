import React, {
  FC,
  useEffect,
  useState,
  useRef,
  Suspense,
  useMemo
} from "react"
import QuestionCard from "../../components/QuestionCard"
import { useSearchParams, useParams } from "react-router-dom"
import ListSearch from "../../components/ListSearch"
import { useTitle, useRequest, useDebounceFn } from "ahooks"
import { getQuestionServiceList } from "@/request/question"
import useLoadQuestionListData from "@/hook/useLoadQuestionListData"
import { Empty, Spin } from "antd"
import {
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE,
  LIST_SEARCH_PARAM_KEY
} from "../../constant/index"

import ListPage from "../../components/ListPage"

// rawQuestionList = []
const List: FC = () => {
  useTitle("我的问卷")
  const [started, setStarted] = useState(false)
  const [list, setList] = useState([])
  // const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  // const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)
  const haveMoreData = total > list.length // 是否还有更多数据
  const [searchParams] = useSearchParams() // 有keyword
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY)
  useEffect(() => {
    setStarted(false)
    setPage(1)
    setList([])
    setTotal(0)
  }, [keyword])
  // console.log('keyWord', searchParams);
  //   console.log("params", params);
  const deleteQuestion = (id: string) => {
    console.log("deleteQuestion", id)
  }
  //   触发加载
  const containerRef = useRef<HTMLDivElement>(null)
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      const elem = containerRef.current
      console.log("elem", elem)
      if (elem == null) return
      // if (!elem) return
      const domRect = elem.getBoundingClientRect() // 获取元素的边界信息
      if (domRect == null) return
      console.log("domRect", domRect)
      const bottom = domRect.bottom // 元素底部距离视口顶部的距离
      // const windowHeight = window.innerHeight // 视口高度
      const height = document.body.clientHeight // 视口高度
      console.log("bottom", bottom, "height", height)
      // 距离底部100px 触发加载
      // if (bottom - height < 100) {
      if (bottom <= height) {
        console.log("触发加载")
        load()
        setStarted(true)
        // getQuestionServiceList().then(res => {
        //   console.log("res", res)
        //   const lists = [...list, ...res.list]
        //   setList(lists)
        // })
      }
      console.log("tryLoadMore1111")
    },
    {
      wait: 1000
    }
  )
  // 真正的触发加载
  const { run: load, loading } = useRequest(
    async () => {
      const data = await getQuestionServiceList({
        page,
        pageSize: LIST_PAGE_SIZE,
        keyword
      })
      return data
    },
    {
      manual: true,
      onSuccess(result) {
        console.log("result", result)
        const { list: l = [], total = 0 } = result
        // setList(list.concat(l))
        setList(prev => [...prev, ...l]) // ✅ 关键点：在原数据后追加
        setTotal(total)
        // setPage(page + 1) // 下一页
        setPage(prev => prev + 1)
        console.log("result", result)
        console.log("list", list)
      }
    }
  )

  //1.当页面加载或者url参数keyword发生变化的时候 重新加载
  useEffect(() => {
    tryLoadMore()
  }, [searchParams])

  // 2.页面滚动时 触发
  useEffect(() => {
    console.log("开始设置滚动监听", window)
    if (haveMoreData) {
      window.addEventListener("scroll", tryLoadMore, true) // 监听滚动事件
    }
    return () => {
      window.removeEventListener("scroll", tryLoadMore, true) // 组件卸载时移除监听
    }
  }, [searchParams, haveMoreData]) // 添加空依赖数组，确保只在组件挂载时执行一次

  const LoadMoreContentElem = useMemo(() => {
    if (!started || loading) {
      return <Spin></Spin>
    }
    if (total === 0) return <Empty></Empty>
    if (!haveMoreData) {
      return <div>没有更多数据了</div>
    }
    return <span>开始加载下一页</span>
  }, [started, loading, total, haveMoreData])
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
          <div className="mb-10">
            {loading && (
              <div style={{ textAlign: "center" }}>
                <Spin></Spin>
              </div>
            )}
            {!loading &&
              list.length > 0 &&
              list.map((item, index) => {
                const { _id } = item
                return (
                  <QuestionCard
                    id={_id}
                    key={_id}
                    {...item}
                    deleteQuestion={deleteQuestion}
                  />
                )
              })}
            {list.length === 0 && !loading && <Empty description="暂无数据" />}
          </div>
          <div className="mb-10 text-center">
            <div ref={containerRef}></div>
            {LoadMoreContentElem}
            {/* <ListPage  total={total}></ListPage> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default List
