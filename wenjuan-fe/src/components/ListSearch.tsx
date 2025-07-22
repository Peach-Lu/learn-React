import React, { FC } from "react"
import type { ChangeEvent } from "react"
import { useNavigate, useLocation } from "react-router"
import { Input, Button } from "antd"
import {LIST_SEARCH_PARAM_KEY} from "../constant"
const ListSearch: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log("pathname", pathname)

  const { Search } = Input
  const [search, setSearch] = React.useState<string>("")
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    console.log("search", search)
  }
  function handleSearch(val: string) {
    console.log("val", val)
    console.log("pathname", pathname)
    // navigate(`${pathname}?keyWord=${val}`)
    navigate({
      pathname: pathname,
      search: `?${LIST_SEARCH_PARAM_KEY}=${val}`,
    })

  }
  return (
    <>
      <div className="flex justify-end">
        <Search
          style={{ width: 200 }}
          allowClear
          value={search}
          onChange={handleChange}
          onSearch={handleSearch}
          placeholder="请输入关键字"
        />
      </div>
    </>
  )
}
export default ListSearch
