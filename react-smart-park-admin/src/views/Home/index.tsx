import { MyHeader } from '@/home/MyHeader'
import { MySider } from '@/home/MySider'
import { Layout, theme } from 'antd'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

const { Content, Footer } = Layout

const Home = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const currentYear = new Date().getFullYear()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MySider />
      <Layout>
        <MyHeader />
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer style={{ textAlign: 'center', background: colorBgContainer }}>
          Ant Design ©{currentYear} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home
