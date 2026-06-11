// Mock（开发环境）
import '@/mock'

// 国际化
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

// 样式
import '@/index.scss'

// 主页
import { App } from '@/App.tsx'
import { Provider } from 'jotai'
import { createRoot } from 'react-dom/client'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>
)
