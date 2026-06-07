import logo from '@/assets/logo.png'
import { Layout } from 'antd'
import { useState } from 'react'
import { MyMenu } from './MyMenu'
import styles from './index.module.scss'

const { Sider } = Layout

export const MySider = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className={styles.logo}>
        <img className={styles['logo__img']} src={logo} alt="logo" />
        {!collapsed && <h1 className={styles['logo__text']}>朋远智慧园区</h1>}
      </div>
      <MyMenu />
    </Sider>
  )
}
