import type { LoginFormType, LoginResultType } from '@/types/user'
import request from '@/utils/request'

export const loginApi = (data: LoginFormType) => {
  return request.post<LoginResultType>('/login', data)
}
