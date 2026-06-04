import { lazy } from 'react'

const Login = lazy(() => import('@/views/Login'))
const Layout = lazy(() => import('@/views/Layout'))
const NotFound = lazy(() => import('@/views/NotFound'))

export { Layout, Login, NotFound }
