import { useEffect } from 'react';
import List1 from './List1';
import List2 from './List2';
import StateDemo from './StateDemo2';
import ImmerDemo from './immerDemo';
import UseRefDemo from './UseRefDemo';
// import UseMemoDemo from './useMemoDemo';
import UseCallbackDemo from './useCallbackDemo';
import StyledComponentDemo from './StyledComponentDemo';
import useTitle from './hook/useTitle';
import useMouse from './hook/useMouse';
import useGetInfo,{getInfo} from './hook/useGetInfo';
import { useRequest} from 'ahooks'
// import reactLogo from './assets/react.svg';
// import type { MouseEvent } from 'react';
// import viteLogo from '/vite.svg';
// import './App.css';


function App() {
    useTitle('App mounted');
    // const {x,y} = useMouse()
    // const {loading,info} = useGetInfo()
    const { data, error, loading } = useRequest(getInfo);
  return (
    <>
    <p>
    {JSON.stringify({ data, error, loading })}
    </p>
    {/* <p>App page</p> */}
    {/* <p>{loading ? '加载中。。。。' : data}</p> */}
    {/* <StyledComponentDemo></StyledComponentDemo> */}
    {/* <List1></List1>  */}
    <List2></List2>
    {/* <UseCallbackDemo></UseCallbackDemo> */}
    {/* <UseMemoDemo></UseMemoDemo> */}
    {/* <UseRefDemo></UseRefDemo> */}
      {/* <ImmerDemo></ImmerDemo>
      */}
      {/* <StateDemo></StateDemo>  */}
    </>
  );
}

export default App;
