import type {
  LoginFormType,
  LoginResultType,
  MenuResultType,
  UserListRequestType,
  UserListResponseType
} from '@/types/user'
import request from '@/utils/request'

export const loginApi = (data: LoginFormType) => {
  return request.post<LoginResultType>('/login', data)
}

export const getMenuApi = () => {
  return request.get<MenuResultType[]>('/menu')
}

export const getUserListApi = (data: UserListRequestType) => {
  return request.post<{
    list: UserListResponseType[]
    total: number
  }>('/userList', data)
}

export const deleteUserApi = (id: string) => {
  return request.post('/deleteUser', { id })
}

export const batchDeleteUserApi = (keys: React.Key[]) => {
  return request.post('/batchDeleteUser', { keys })
}

export const editUserApi = (data: UserListResponseType) => {
  return request.post('/editUser', data)
}
