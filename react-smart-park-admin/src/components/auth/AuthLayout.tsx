import { userInfoAtom } from '@/atoms/user'
import { useAtomValue } from 'jotai'
import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

export const AuthLayout = ({ children }: PropsWithChildren) => {
  const { token } = useAtomValue(userInfoAtom)
  if (token) {
    return children
  }
  return <Navigate to="/login" />
}
