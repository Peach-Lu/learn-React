import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import Logo from "../components/Logo"
import UserInfo from "../components/UserInfo"
import useLoadUserData from "../hook/useLoadUserData"
import useNavPage from "../hook/useNavPage"


const { Header, Footer, Content } = Layout
const headerStyle: React.CSSProperties = {
  // textAlign: 'center',
  // color: '#fff',
  // height: 64,
  // paddingInline: 48,
  // lineHeight: '64px',
  // backgroundColor: '#4096ff',
}

const contentStyle: React.CSSProperties = {
  // 'minHeight': 'calc(100vh - 64px - 71px)',.
  // 'minHeight': 'calc(100vh - 64px - 64px)',
  height: "calc(100vh - 64px - 64px)",
  overflow: "auto"
  // textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '120px',
  // color: '#fff',
  // backgroundColor: '#0958d9',
}

const footerStyle: React.CSSProperties = {
  // textAlign: 'center',
  // color: '#fff',
  // backgroundColor: '#4096ff',
}

const layoutStyle = {
  // borderRadius: 8,
  // overflow: 'hidden',
  // width: 'calc(100% - 8px)',
  // maxWidth: 'calc(100% - 8px)',
}
const MainLayout: FC = ({}) => {
  const {waitingUserData} = useLoadUserData()
  useNavPage(waitingUserData)
  // const onChange = e => {
  //   console.log("change", e)
  // }
  return (
    <>
      <Layout style={layoutStyle} className="flex">
        <Header
          style={headerStyle}
          className="flex items-center justify-between"
        >
          <div className="text-white">
            <Logo></Logo>
          </div>
          <div className="text-white">
            <UserInfo></UserInfo>
          </div>
        </Header>
        <Content style={contentStyle} className="">
          {!waitingUserData &&  <Outlet></Outlet>}
        </Content>
        <Footer
          style={footerStyle}
          className="text-center bg-[#f7f7f7] border-y-inherit boder-[1px] border-[1px solid #ccc]"
        >
          @2025 Created by Peach
        </Footer>
      </Layout>
    </>
  )
}
export default MainLayout
