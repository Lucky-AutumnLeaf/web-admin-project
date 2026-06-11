import DelButton from '@/components/users/DelButton'
import EditButton from '@/components/users/EditButton'
import type { UserListResponseType } from '@/types/user'
import type { TableProps } from 'antd'
import { Space, Tag } from 'antd'

const statusMap: Record<string, { color: string; text: string }> = {
  '1': { color: 'green', text: '正常营业' },
  '2': { color: '#f50', text: '暂停营业' },
  '3': { color: 'red', text: '已关闭' }
}

export const getColumns = (
  onRefresh: () => void,
  setTitle: (title: string) => void,
  setOpen: (open: boolean) => void,
  onEdit: (record: UserListResponseType) => void
): TableProps<UserListResponseType>['columns'] => [
  {
    title: '序号',
    key: 'index',
    width: 80,
    render: (_, __, index) => {
      return index + 1
    }
  },
  {
    title: '客户名称',
    key: 'name',
    dataIndex: 'name',
    width: 120
  },
  {
    title: '经营状态',
    key: 'status',
    dataIndex: 'status',
    width: 110,
    render: (value: string) => {
      const status = statusMap[value]
      return <Tag color={status.color}>{status.text}</Tag>
    }
  },
  {
    title: '联系电话',
    key: 'tel',
    dataIndex: 'tel',
    width: 140
  },
  {
    title: '所属行业',
    key: 'business',
    dataIndex: 'business',
    width: 100
  },
  {
    title: '邮箱',
    key: 'email',
    dataIndex: 'email',
    width: 180
  },
  {
    title: '统一信用代码',
    key: 'creditCode',
    dataIndex: 'creditCode',
    width: 180
  },
  {
    title: '工商注册号',
    key: 'industryNum',
    dataIndex: 'industryNum',
    width: 160
  },
  {
    title: '组织结构代码',
    key: 'organizationCode',
    dataIndex: 'organizationCode',
    width: 140
  },
  {
    title: '法人名',
    key: 'legalPerson',
    dataIndex: 'legalPerson',
    width: 100
  },
  {
    title: '操作',
    key: 'operate',
    fixed: 'right',
    width: 160,
    render: (_, record) => {
      return (
        <Space>
          <EditButton onTitle={setTitle} onOpen={setOpen} record={record} onEdit={onEdit} />
          <DelButton id={record.id} onSuccess={onRefresh} />
        </Space>
      )
    }
  }
]
