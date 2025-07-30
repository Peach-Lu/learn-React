import React, { FC, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Divider, Typography } from "antd";
import { Button } from "antd";
import { MANAGE_PATHNAME } from "../router";
import http from "../request/http";

import "../_mock/index";
import axios from "axios";
const { Title, Paragraph } = Typography;
const Home: FC = () => {
  const navigate = useNavigate();
  // React 开发环境下会调用两次
  useEffect(() => {
    console.log("home mounted");
    // fetch("/api/test")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    // mockjs 只能劫持xmlhttprequest fetch无法劫持
    http.post('/api/question').then((res) => {
      console.log(res.data);
    });
  });
  // function clickHandler(){
  //   console.log('click')
  //   // navigate('/login')
  //   navigate({
  //     pathname: '/login',
  //     search: '?b=12',
  //   })
  // }
  // return <>
  // <p>Home</p>
  // <Button type="primary">Primary Button</Button>
  // <button onClick={clickHandler}>登录</button>
  // <Link to='/register?Id=123'>注册</Link>
  // </>
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
        }}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <div>
          <Title level={3}>问卷调查 | 在线投票</Title>
          <Paragraph>
            已累计创建问卷 100 份 发布问卷 10 份 收到答卷90份
          </Paragraph>
        </div>
        <div>
          <Button
            size="large"
            type="primary"
            onClick={() => navigate(MANAGE_PATHNAME)}
          >
            开始使用
          </Button>
        </div>
      </div>
    </>
  );
};
export default Home;
