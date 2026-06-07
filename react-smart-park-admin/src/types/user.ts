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
