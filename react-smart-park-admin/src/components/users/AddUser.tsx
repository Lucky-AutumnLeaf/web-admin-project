import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

const AddUser: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="warning"
      title="新增租户页面功能暂未完成"
      extra={
        <Button type="primary" onClick={() => navigate('/users/list')}>
          去往租户列表页面
        </Button>
      }
    />
  )
}
export default AddUser
