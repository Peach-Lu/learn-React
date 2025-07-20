import React, { FC } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import styles from "./MainManage.module.scss"
import { Button, Flex } from "antd"
import {
  StarOutlined,
  BarsOutlined,
  PlusOutlined,
  DeleteOutlined
} from "@ant-design/icons"



const MainManageLayout: FC = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  console.log("location", location)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>MannageLayout left</p>
          <Flex gap="middle" vertical>
            <Button icon={<PlusOutlined />} value="large" type="primary">
              创建问卷
            </Button>
           <Button
            style={{ marginTop: "10px" }}
              icon={<BarsOutlined />}
              value="large"
              type={pathname === "/manage/list" ? "primary" : "default"}
              onClick={() => navigate("/manage/list")}
            >
              我的问卷
            </Button>
            <Button
              icon={<StarOutlined />}
              value="large"
              type={pathname === "/manage/start" ? "primary" : "default"}
              onClick={() => navigate("/manage/start")}
            >
              星标问卷
            </Button>
            <Button
              icon={<DeleteOutlined />}
              value="large"
              type={pathname === "/manage/trash" ? "primary" : "default"}
              onClick={() => navigate("/manage/trash")}
            >
              回收站
            </Button>
          </Flex>
        </div>
        <div className="pl-[10px] flex-1">
          <Outlet />
        </div>
      </div>
      {/* <div className="flex h-full w-full">
    <div className="sidebar w-[200px]"></div>
    <div className="flex-1">
      <Outlet />
    </div>
  </div> */}
    </>
  )
}
export default MainManageLayout
