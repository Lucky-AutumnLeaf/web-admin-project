import { menuListAtom } from '@/atoms/user'
import type { MenuResultType } from '@/types/user'
import { transformMenu } from '@/utils/transformMenu'
import { Menu } from 'antd'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'

/** 从菜单树中找到当前路径的父级 key */
const getOpenKeys = (
  menuList: MenuResultType[],
  pathname: string
): string[] => {
  for (const item of menuList) {
    if (item.children?.some((child) => child.key === pathname)) {
      return [item.key]
    }
    if (item.children) {
      const keys = getOpenKeys(item.children, pathname)
      if (keys.length) return [item.key, ...keys]
    }
  }
  return []
}

export const MyMenu = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const menuList = useAtomValue(menuListAtom)
  const items = useMemo(() => transformMenu(menuList), [menuList])
  const defaultOpenKeys = useMemo(
    () => getOpenKeys(menuList, pathname),
    [menuList, pathname]
  )
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/dashboard']}
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={[pathname]}
      mode="inline"
      items={items}
      onClick={({ key }) => navigate(key)}
    />
  )
}
