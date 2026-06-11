import type { BillSearchData, ContractSearchData } from '@/types/contract'
import request from '@/utils/request'

export const getContractList = (data: ContractSearchData) => {
  return request.post('/contractList', data)
}

export const getBillList = (data: BillSearchData) => {
  return request.post('/billList', data)
}
