import styles from './index.module.scss'

import { loginApi } from '@/api/user'
import logo from '@/assets/logo.png'
import { userInfoAtom } from '@/atoms/user'
import type { LoginFormType } from '@/types/user'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { Button, Flex, Form, Input, message } from 'antd'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
  const setUserInfo = useSetAtom(userInfoAtom)

  const { run: login, loading } = useRequest(loginApi, {
    manual: true,
    onSuccess: (res) => {
      if (res.code === 200) {
        setUserInfo(res.data)
        message.success(res.message)
        navigate('/')
      } else {
        message.error(res.message)
      }
    },
    onError: (err) => {
      message.error(err.message)
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
