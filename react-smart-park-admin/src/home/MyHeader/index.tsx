import { userInfoAtom } from '@/atoms/user'
import { MyBreadcrumb } from '@/home/MyBreadcrumb'
import { logout } from '@/utils/logout'
import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Layout, Space } from 'antd'
import { useAtomValue } from 'jotai'
import styles from './index.module.scss'
import { items } from './items'

const { Header } = Layout

export const MyHeader = () => {
  const username = useAtomValue(userInfoAtom).username
  const onClick = ({ key }) => {
    if (key === 'logout') {
      logout()
    }
  }
  return (
    <Header className={styles.header}>
      <MyBreadcrumb />
      <Dropdown menu={{ items, onClick }} trigger={['click']}>
        <Button type="link">
          <Space>
            <span>欢迎您，{username}</span>
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Header>
  )
}
