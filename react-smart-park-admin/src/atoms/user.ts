import type { LoginResultType } from '@/types/user'
import { atomWithStorage } from 'jotai/utils'

export const userInfoAtom = atomWithStorage<LoginResultType>('userInfo', {
  token: '',
  username: '',
  btnAuth: []
})
