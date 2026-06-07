import type { LoginResultType, MenuResultType } from '@/types/user'
import { atomWithStorage } from 'jotai/utils'

import { atom } from 'jotai'

export const userInfoAtom = atomWithStorage<LoginResultType>('userInfo', {
  token: '',
  username: '',
  btnAuth: []
})

export const menuListAtom = atom<MenuResultType[]>([])
