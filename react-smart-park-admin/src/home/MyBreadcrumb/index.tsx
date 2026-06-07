import { menuListAtom } from '@/atoms/user'
import { getBreadcrumbLabels } from '@/utils/getBreadcrumbLabels'
import { Breadcrumb } from 'antd'
import { useAtomValue } from 'jotai'
import { useLocation } from 'react-router'

export const MyBreadcrumb = () => {
  const location = useLocation()
  const menuList = useAtomValue(menuListAtom)
  const labels = getBreadcrumbLabels(location.pathname, menuList)
  return <Breadcrumb items={labels.map((label) => ({ title: label }))} />
}
