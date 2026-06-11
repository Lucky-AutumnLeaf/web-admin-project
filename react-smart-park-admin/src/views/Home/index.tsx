import { MyHeader } from '@/home/MyHeader'
import { MySider } from '@/home/MySider'
import { Layout } from 'antd'
import { Suspense } from 'react'
import { Outlet } from 'react-router'
import styles from './index.module.scss'

const { Content, Footer } = Layout

const Home = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Layout className={styles.layout}>
      <MySider />
      <Layout>
        <MyHeader />
        <Content className={styles.content}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer className={styles.footer}>
          Ant Design ©{currentYear} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home
