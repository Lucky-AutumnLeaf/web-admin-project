import { userInfoAtom } from '@/atoms/user'
import { useAtomValue } from 'jotai'
import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router'

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { token } = useAtomValue(userInfoAtom)
  if (token) {
    return <Navigate to="/" />
  }
  return children
}
