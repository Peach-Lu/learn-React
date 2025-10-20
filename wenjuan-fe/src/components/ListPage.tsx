import React, { FC, useState, useEffect } from "react"
import { Pagination } from "antd"
import { useSearchParams, useNavigate, useLocation } from "react-router-dom"
import {
  LIST_PAGE_SIZE,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_PARAM_KEY
} from "../constant"
type Props = {
  current?: number
  total: number
  defaultPageSize?: number
}
const ListPage: FC<Props> = props => {
  // console.log("props------------", props)
  const [current, setCurrent] = useState(10)
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE)
  const { total } = props
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || "1") || 1
    const pageSize =
      parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || "") ||
      LIST_PAGE_SIZE
    // console.log("page", page)
    setCurrent(page)
    // console.log("pageSize", pageSize)
    setPageSize(pageSize)
  }, [searchParams])
  //   const { defaultCurrent, total, defaultPageSize } = props;
  const navigate = useNavigate()
  const { pathname } = useLocation()
  // console.log("pathname", pathname)
  function handlePageChange(page: number, pageSize: number) {
    // console.log("page", page)
    // console.log("pageSize", pageSize)
    setCurrent(page)
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString())
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString())
    // console.log("searchParams", searchParams)
    navigate({
      pathname,
      search: searchParams.toString() //a=1&b=2
    })
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <Pagination
          current={current}
          total={total}
          pageSize={pageSize}
          onChange={handlePageChange}
        ></Pagination>
        {total}
      </div>
    </>
  )
}
export default ListPage
