import List1 from './List1';

import useTitle from './hook/useTitle';
import useGetInfo,{getInfo} from './hook/useGetInfo';
import { useRequest} from 'ahooks'
import List from './pages/List';
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
    <div className='App'>
        <h1>问卷 FE</h1>
        <List></List>
    </div>
    </>
  );
}

export default App;
