import React,{FC, useState,useEffect} from "react";
import { Space, Typography } from 'antd';
import { Link } from "react-router-dom";
import {FormOutlined} from '@ant-design/icons';
import useGetUserInfo from "../hook/userGetUserInfo";
import { MANAGE_PATHNAME,HOME_PATHNAME } from "../router";
const {Title}  = Typography
const Logo: FC = () => {
  const {username} = useGetUserInfo()
  const [pathname,setPathname] = useState(HOME_PATHNAME)
  useEffect(()=>{
    if(username){
      setPathname(MANAGE_PATHNAME)
    }
  },[username])

  return <div className="flex items-center">
    <Link to={pathname}>
    <Space>
      <Title>
        <FormOutlined  style={{color:"#fff"}} twoToneColor="#fff" ></FormOutlined>
      </Title>
      <Title>
       <span  className="text-white">
       Peach问卷
       </span>
      </Title>
    </Space>
    </Link>
{/* 
    <FormOutlined  style={{color:"#fff"}} twoToneColor="#fff" ></FormOutlined>
    <span  className="text-white">
       Peach问卷
       </span> */}
  </div>
}
export default Logo