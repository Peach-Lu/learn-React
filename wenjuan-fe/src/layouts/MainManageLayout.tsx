import React,{ FC, } from "react";
import { Outlet} from "react-router-dom";
import styles from './MainManage.module.scss';
const MainManageLayout:FC = ({children})=>{

  return <>
  <div className={styles.container}>
    <div className={styles.left}>
      <p>MannageLayout left</p>
      <button>创建问卷</button> <br />
      <button>我的问卷</button><br />
      <button>星标问卷</button><br />
      <button>回收站</button><br />
    </div>
    <div className={styles.right}>
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
}
export default MainManageLayout;