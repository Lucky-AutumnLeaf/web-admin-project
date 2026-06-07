import {
  AddUser,
  All,
  Article,
  Bill,
  Car,
  Comments,
  Contract,
  Dashboard,
  Enengy,
  Equipment,
  Merchants,
  Personal,
  Repair,
  Room,
  Settings,
  Surrender,
  Tenement,
  UserList
} from '@/router/lazy'
import type { MenuResultType } from '@/types/user'
import type { RouteObject } from 'react-router'

const componentMap: Record<string, React.ReactElement> = {
  '/dashboard': <Dashboard />,
  '/users/list': <UserList />,
  '/users/add': <AddUser />,
  '/estate/tenement': <Tenement />,
  '/estate/room': <Room />,
  '/estate/car': <Car />,
  '/repair': <Repair />,
  '/finance/contract': <Contract />,
  '/finance/surrender': <Surrender />,
  '/finance/bill': <Bill />,
  '/merchants': <Merchants />,
  '/operation/all': <All />,
  '/operation/article': <Article />,
  '/operation/comments': <Comments />,
  '/equipment': <Equipment />,
  '/energy': <Enengy />,
  '/settings': <Settings />,
  '/personal': <Personal />
}

export const generateRoutes = (menuList: MenuResultType[]): RouteObject[] => {
  return menuList
    .filter((item) => item.children || componentMap[item.key])
    .map((item) => {
      const route: RouteObject = { path: item.key }

      if (item.children) {
        route.children = generateRoutes(item.children)
      } else {
        route.element = componentMap[item.key]
      }

      return route
    })
}
