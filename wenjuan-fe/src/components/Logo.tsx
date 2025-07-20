import React,{FC} from "react";
import { Space, Typography } from 'antd';
import { Link } from "react-router-dom";
import {FormOutlined} from '@ant-design/icons';

const {Title}  = Typography
const Logo: FC = () => {
  return <div className="flex items-center">
    <Link to='/'>
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