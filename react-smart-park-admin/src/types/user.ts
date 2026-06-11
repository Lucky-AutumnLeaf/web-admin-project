export type LoginFormType = {
  username: string
  password: string
}

export type LoginResultType = {
  token: string
  username: string
  btnAuth: string[]
}

export type MenuResultType = {
  key: string
  label: string
  icon?: string
  children?: MenuResultType[]
}

export type UserListResponseType = {
  id: string
  name: string
  status: string
  tel: string
  business: string
  email: string
  creditCode: string
  industryNum: string
  organizationCode: string
  legalPerson: string
}

export interface PaginationParams {
  pageNum: number
  pageSize: number
}

export interface UserQueryParams {
  companyName?: string
  contact?: string
  tel?: string
}

export type UserListRequestType = PaginationParams & UserQueryParams
