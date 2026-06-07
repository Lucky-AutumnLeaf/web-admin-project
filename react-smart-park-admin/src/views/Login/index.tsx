import styles from './index.module.scss'

import { loginApi } from '@/api/user'
import logo from '@/assets/logo.png'
import { userInfoAtom } from '@/atoms/user'
import useAppRequest from '@/hooks/useAppRequest'
import type { LoginFormType } from '@/types/user'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input, message } from 'antd'
import { useSetAtom } from 'jotai'

const Login = () => {
  const setUserInfo = useSetAtom(userInfoAtom)

  const { run: login, loading } = useAppRequest(loginApi, {
    manual: true,
    onSuccess: (res) => {
      setUserInfo(res.data)
      message.success(res.message)
    }
  })

  const onFinish = (values: LoginFormType) => {
    login(values)
  }

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-wrapper']}>
        <Flex className={styles.part} vertical align="center" gap={20}>
          <img className={styles['part__logo']} src={logo} alt="logo" />
          <h1 className={styles['part__title']}>朋远智慧园区管理平台</h1>
          <Form onFinish={onFinish} autoComplete="off">
            <Form.Item<LoginFormType>
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="用户名" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item<LoginFormType>
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password placeholder="密码" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </div>
    </div>
  )
}

export default Login
