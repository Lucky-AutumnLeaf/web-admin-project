import type { MenuProps } from 'antd'

export const items: MenuProps['items'] = [
  {
    label: '个人中心',
    key: 'personal'
  },
  {
    type: 'divider'
  },
  {
    label: '退出登录',
    key: 'logout'
  }
]
