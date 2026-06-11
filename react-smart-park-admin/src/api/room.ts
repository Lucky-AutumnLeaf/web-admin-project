import type { RoomType } from '@/types/room'
import request from '@/utils/request'

export const getRoomListApi = (roomid: string) => {
  return request.post<{
    rooms: RoomType[]
  }>('/roomList', { roomid })
}
