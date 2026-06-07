// Mock（开发环境）
import '@/mock'

// 样式
import '@/index.scss'

// 主页
import { App } from '@/App.tsx'
import { Provider } from 'jotai'
import { createRoot } from 'react-dom/client'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
