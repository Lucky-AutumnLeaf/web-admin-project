import { getRoomListApi } from '@/api/room'
import useAppRequest from '@/hooks/useAppRequest'
import type { RoomType } from '@/types/room'
import { Button, Card, Col, Image, Radio, Row, Spin } from 'antd'
import type { CheckboxGroupProps } from 'antd/es/checkbox'
import { useEffect, useState } from 'react'
import styles from './Room.module.scss'

const options: CheckboxGroupProps<string>['options'] = [
  { label: 'A1幢写字楼', value: 'a1' },
  { label: 'A2幢写字楼', value: 'a2' },
  { label: 'B1幢写字楼', value: 'b1' },
  { label: 'B2幢写字楼', value: 'b2' },
  { label: 'C1幢写字楼', value: 'c1' },
  { label: 'C2幢写字楼', value: 'c2' },
  { label: 'D1幢写字楼', value: 'd1' },
  { label: 'D2幢写字楼', value: 'd2' }
]

const Room = () => {
  const [open, setOpen] = useState(false)
  const [roomList, setRoomList] = useState<RoomType[]>([])
  const [building, setBuilding] = useState('a1')
  const { run: getRoomList, loading } = useAppRequest(getRoomListApi, {
    manual: true,
    onSuccess: (res) => {
      setRoomList(res.data.rooms)
    }
  })

  useEffect(() => {
    console.log(building)

    getRoomList(building)
  }, [building, getRoomList])

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card>
          <Radio.Group
            block
            options={options}
            defaultValue={building}
            onChange={(e) => setBuilding(e.target.value)}
            optionType="button"
            buttonStyle="solid"
          />
        </Card>
      </Col>

      {roomList.map((room) => (
        <Col span={6} key={room.roomNumber}>
          <Spin spinning={loading}>
            <Card
              title="房间号"
              extra={
                <Button type="link" onClick={() => setOpen(true)}>
                  查看详情
                </Button>
              }
            >
              <h1 className={styles.roomNumber}>{room.roomNumber}</h1>
              <p className={styles.roomInfo}>
                <span>装修情况</span>
                <span>{room.decorationType}</span>
              </p>
              <p className={styles.roomInfo}>
                <span>房间面积</span>
                <span>{room.area}㎡</span>
              </p>
              <p className={styles.roomInfo}>
                <span>出租单价</span>
                <span>{room.unitPrice}元/平/日</span>
              </p>
            </Card>
            <Image
              width={200}
              style={{ display: 'none' }}
              alt="basic image"
              preview={{
                open,
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                onOpenChange: (value) => {
                  setOpen(value)
                }
              }}
            />
          </Spin>
        </Col>
      ))}
    </Row>
  )
}
export default Room
