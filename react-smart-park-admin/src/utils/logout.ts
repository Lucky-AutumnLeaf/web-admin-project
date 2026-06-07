import { userInfoAtom } from '@/atoms/user'
import { store } from '@/store'
import { RESET } from 'jotai/utils'

const allAtoms = [userInfoAtom] as const

export const logout = () => {
  allAtoms.forEach((atom) => store.set(atom, RESET))
}
