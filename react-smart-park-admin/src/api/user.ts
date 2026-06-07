import type {
  LoginFormType,
  LoginResultType,
  MenuResultType
} from '@/types/user'
import request from '@/utils/request'

export const loginApi = (data: LoginFormType) => {
  return request.post<LoginResultType>('/login', data)
}

export const getMenuApi = () => {
  return request.get<MenuResultType[]>('/menu')
}
