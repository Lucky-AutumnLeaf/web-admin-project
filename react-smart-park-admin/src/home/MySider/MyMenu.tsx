import { menuListAtom } from '@/atoms/user'
import { transformMenu } from '@/utils/transformMenu'
import { Menu } from 'antd'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'
import { useNavigate } from 'react-router'

export const MyMenu = () => {
  const navigate = useNavigate()
  const menuList = useAtomValue(menuListAtom)
  const items = useMemo(() => transformMenu(menuList), [menuList])
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/dashboard']}
      selectedKeys={[location.pathname]}
      mode="inline"
      items={items}
      onClick={({ key }) => navigate(key)}
    />
  )
}
