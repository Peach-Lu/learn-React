import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainManageLayout from "../layouts/MainManageLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Start from "../pages/manage/Start";
import Edit from "../pages/question/Edit";
import Stat from "../pages/question/Stat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:'/',
        element :<Home />
      },
      {
        path:'login',
        element: <Login />
      },
      {
        path:'register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <MainManageLayout />,
        children: [
          {
            path: 'start',
            element: <Start />
          },
          {
            path: 'list',
            element: <List />
          },
          {
            path: 'trash',
            element: <Trash />
          },
       
        ]
      },
      
      {
        path:'*', 
        element: <NotFound /> 
      }
    ]
  }, 
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />
      },
      {
        path: 'stat/:id',
        element: <Stat />
      }
    ]
  },])

export default router

export const LOGIN_PATHNAME = '/login';
export const REGISTER_PATHNAME = '/register';
export const HOME_PATHNAME = '/';
export const MANAGE_PATHNAME = '/manage/list';