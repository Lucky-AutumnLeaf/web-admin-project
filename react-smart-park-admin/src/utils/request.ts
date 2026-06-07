import { userInfoAtom } from '@/atoms/user'
import { store } from '@/store'
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import { RESET } from 'jotai/utils'

export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
})

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = store.get(userInfoAtom).token

    // 登录接口放行
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message: msg, data } = response.data as ApiResponse
    if (code !== 200) {
      return Promise.reject(new Error(msg))
    }
    return { data, message: msg } as unknown as AxiosResponse
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      store.set(userInfoAtom, RESET)
    }
    return Promise.reject(err)
  }
)

const get = <T = unknown, P = unknown>(
  url: string,
  params?: P
): Promise<ApiResponse<T>> => {
  return request.get(url, { params }) as Promise<ApiResponse<T>>
}

const post = <T = unknown, D = unknown>(
  url: string,
  data?: D
): Promise<ApiResponse<T>> => {
  return request.post(url, data) as Promise<ApiResponse<T>>
}

export default {
  get,
  post
}
