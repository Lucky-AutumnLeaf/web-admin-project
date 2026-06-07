import { AuthGuard } from '@/components/auth/AuthGuard'
import { AuthLayout } from '@/components/auth/AuthLayout'
import type { RouteObject } from 'react-router'
import { Home, Login, NotFound } from './lazy'

export const routes: RouteObject[] = [
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
        <Home />
      </AuthLayout>
    )
  },

  {
    path: '*',
    element: <NotFound />
  }
]
