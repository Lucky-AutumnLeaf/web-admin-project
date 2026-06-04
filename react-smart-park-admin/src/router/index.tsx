import { AuthGuard } from '@/components/auth/AuthGuard'
import { AuthLayout } from '@/components/auth/AuthLayout'
import { createBrowserRouter } from 'react-router'
import { Layout, Login, NotFound } from './lazy'

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    )
  },
  {
    path: '/',
    element: (
      <AuthLayout>
        <Layout />
      </AuthLayout>
    )
  },

  {
    path: '*',
    element: <NotFound />
  }
])

export default router
