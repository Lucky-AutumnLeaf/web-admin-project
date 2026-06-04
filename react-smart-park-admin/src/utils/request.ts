import { userInfoAtom } from '@/atoms/user'
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import { getDefaultStore } from 'jotai'
import { RESET } from 'jotai/utils'

interface ApiResponse<T = unknown> {
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
    const token = getDefaultStore().get(userInfoAtom).token

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
    return response.data
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      getDefaultStore().set(userInfoAtom, RESET)
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
