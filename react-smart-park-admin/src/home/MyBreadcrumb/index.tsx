import { Breadcrumb } from 'antd'

export const MyBreadcrumb = () => {
  return (
    <Breadcrumb
      style={{ margin: '16px 0' }}
      items={[{ title: 'User' }, { title: 'Bill' }]}
    />
  )
}
