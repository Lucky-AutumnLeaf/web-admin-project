import { getMenuApi } from '@/api/user'
import { menuListAtom, userInfoAtom } from '@/atoms/user'
import useAppRequest from '@/hooks/useAppRequest'
import { produce } from 'immer'
import { useAtom, useAtomValue } from 'jotai'
import { Suspense, useMemo } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { routes } from './router'
import { generateRoutes } from './utils/generateRoutes'

export const App = () => {
  const token = useAtomValue(userInfoAtom)
  const [menuList, setMenuList] = useAtom(menuListAtom)

  useAppRequest(getMenuApi, {
    onSuccess: (res) => {
      setMenuList(res.data)
    }
  })

  const router = useMemo(() => {
    if (!token) {
      return createBrowserRouter(routes)
    }
    const dynamicRoutes = generateRoutes(menuList)
    const mergedRoutes = produce(routes, (draft) => {
      const homeRoute = draft.find((r) => r.path === '/')
      if (homeRoute) {
        homeRoute.children = [...homeRoute.children, ...dynamicRoutes]
      }
    })
    return createBrowserRouter(mergedRoutes)
  }, [menuList, token])
  if (menuList.length > 0) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    )
  } else {
    return <div>Loading...</div>
  }
}
