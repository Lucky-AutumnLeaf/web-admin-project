export interface ContractSearchData {
  contractNo: string
  person: string
  tel: string
  page: number
  pageSize: number
}

export interface BillSearchData {
  page: number
  pageSize: number
  no: string
  status: string
  startDate: string
  endDate: string
}
