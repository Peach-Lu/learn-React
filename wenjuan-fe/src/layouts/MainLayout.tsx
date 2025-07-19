import React,{ FC, } from "react";
import { Outlet} from "react-router-dom";
const MainLayout:FC = ({children})=>{

  return <>
  <header>
    <h1>MainLayout header</h1>
  </header>
  <main>
   <Outlet/>
  </main>
  <footer>
    <h1>MainLayout Footer</h1>
  </footer>
  </>
}
export default MainLayout;