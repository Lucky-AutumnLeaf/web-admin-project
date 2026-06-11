import request from '@/utils/request'

export type EnergyResultType = {
  name: string
  data: number[]
}

export const getEnergyData = () => {
  return request.get<EnergyResultType[]>('/energyData')
}
