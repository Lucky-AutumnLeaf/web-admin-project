import type { ApiResponse } from '@/utils/request'
import { useRequest } from 'ahooks'
import type { Options, Result } from 'ahooks/es/useRequest/src/types'
import { message } from 'antd'

const useAppRequest = <TData, TParams extends unknown[]>(
  service: (...args: TParams) => Promise<ApiResponse<TData>>,
  options?: Options<ApiResponse<TData>, TParams>
): Result<ApiResponse<TData>, TParams> => {
  return useRequest(service, {
    ...options,
    onError: (err) => {
      message.error(err.message)
    }
  })
}

export default useAppRequest
