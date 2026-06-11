import { Button } from 'antd'

import type { UserListResponseType } from '@/types/user'

type EditButtonProps = {
  onTitle: (title: string) => void
  onOpen: (open: boolean) => void
  record: UserListResponseType
  onEdit: (record: UserListResponseType) => void
}

const EditButton = ({ onTitle, onOpen, record, onEdit }: EditButtonProps) => {
  const handleEdit = () => {
    onEdit(record)
    onOpen(true)
    onTitle('编辑企业')
  }
  return (
    <Button type="primary" size="small" onClick={handleEdit}>
      编辑
    </Button>
  )
}

export default EditButton
