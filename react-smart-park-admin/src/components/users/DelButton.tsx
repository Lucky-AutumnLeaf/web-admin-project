import { deleteUserApi } from '@/api/user'
import useAppRequest from '@/hooks/useAppRequest'
import { Button, Popconfirm } from 'antd'

const DelButton = ({ id, onSuccess }: { id: string; onSuccess: () => void }) => {
  const { run: del, loading } = useAppRequest(deleteUserApi, {
    manual: true,
    onSuccess: () => {
      onSuccess()
    }
  })

  return (
    <Popconfirm
      description="删除用户信息"
      title="确定删除吗？"
      okText="是"
      cancelText="否"
      onConfirm={() => del(id)}
    >
      <Button type="default" size="small" danger loading={loading}>
        删除
      </Button>
    </Popconfirm>
  )
}
export default DelButton
