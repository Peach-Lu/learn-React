import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux'
import store from './store/index.ts'
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ConfigProvider locale={zhCN}>
      <Provider store={store}>
  <App />
      </Provider>
</ConfigProvider>
  </StrictMode>,

)
