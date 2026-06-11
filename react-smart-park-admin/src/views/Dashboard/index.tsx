import { getEnergyData } from '@/api/dashboard'
import useAppRequest from '@/hooks/useAppRequest'
import {
  DollarOutlined,
  LaptopOutlined,
  RadarChartOutlined,
  SnippetsOutlined
} from '@ant-design/icons'
import { Card, Col, Flex, Progress, Row, Statistic, Tag, Timeline } from 'antd'
import ReactECharts from 'echarts-for-react'
import { useState } from 'react'
import { energyOption } from './energyOption'
import styles from './index.module.scss'

const enterpriseOption = {
  title: {
    text: '企业资质情况(家)'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: [0, 0.01],
    data: ['2014', '2016', '2018', '2020', '2022', '2024']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '科技企业',
      type: 'bar',
      data: [40, 220, 378, 658, 1122, 1200]
    },
    {
      name: '高新企业',
      type: 'bar',
      data: [20, 39, 443, 490, 559, 762]
    },
    {
      name: '国营企业',
      type: 'bar',
      data: [78, 167, 229, 330, 380, 420]
    }
  ]
}
const leaseOption = {
  legend: {
    top: 0
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [30, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: '在营' },
        { value: 38, name: '已租' },
        { value: 32, name: '出租' },
        { value: 30, name: '续签' },
        { value: 28, name: '新签' },
        { value: 26, name: '待租' },
        { value: 22, name: '退租' }
      ]
    }
  ]
}
const Dashboard = () => {
  const [energyData, setEnergyData] = useState(energyOption)
  useAppRequest(getEnergyData, {
    onSuccess: (res) => {
      const dataList = res.data.map((item) => ({
        name: item.name,
        data: item.data,
        type: 'line',
        stack: 'Total'
      }))
      const updataOption = {
        ...energyData,
        legend: {
          ...energyData.legend,
          data: dataList.map((item) => item.name)
        },
        series: dataList
      }
      setEnergyData(updataOption)
    }
  })
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Flex justify="space-between">
              <div>
                <h2>13479</h2>
                <p>园区总面积(平方米)</p>
              </div>
              <RadarChartOutlined
                className={styles.icon}
                style={{ color: '#7da1f7' }}
              />
            </Flex>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Flex justify="space-between">
              <div>
                <h2>8635</h2>
                <p>总租赁面积(平方米)</p>
              </div>
              <SnippetsOutlined
                className={styles.icon}
                style={{ color: '#81c452' }}
              />
            </Flex>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Flex justify="space-between">
              <div>
                <h2>38764</h2>
                <p>园区总产值(万元)</p>
              </div>
              <DollarOutlined
                className={styles.icon}
                style={{ color: '#62c9cb' }}
              />
            </Flex>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Flex justify="space-between">
              <div>
                <h2>2874</h2>
                <p>入驻企业总数(家)</p>
              </div>
              <LaptopOutlined
                className={styles.icon}
                style={{ color: '#e49362' }}
              />
            </Flex>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="能源消耗情况">
            <ReactECharts option={energyData} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="企业资质情况">
            <ReactECharts option={enterpriseOption}></ReactECharts>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="租赁情况">
            <ReactECharts option={leaseOption}></ReactECharts>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="科技充电桩空闲统计">
            <div className={styles.progressContainer}>
              <Progress percent={75} type="circle" />
              <Statistic title="总充电桩数" value={75} suffix="/ 100" />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="实时车辆信息">
            <Timeline
              items={[
                {
                  content: (
                    <>
                      <Tag color="green">进场</Tag>08:24车辆 京A66666
                    </>
                  )
                },
                {
                  content: (
                    <>
                      <Tag color="red">出场</Tag>09:15 车辆 京A66666{' '}
                    </>
                  ),
                  color: 'red'
                },
                {
                  content: (
                    <>
                      <Tag color="green">进场</Tag>09:22 车辆 京A23456{' '}
                    </>
                  )
                },
                {
                  content: (
                    <>
                      <Tag color="red">出场</Tag>10:43 车辆 京A18763{' '}
                    </>
                  ),
                  color: 'red'
                },
                {
                  content: (
                    <>
                      <Tag color="green">进场</Tag>13:38 车辆 京A88888{' '}
                    </>
                  )
                },
                {
                  content: (
                    <>
                      <Tag color="green">进场</Tag>14:46 车辆 京A23456{' '}
                    </>
                  )
                }
              ]}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default Dashboard
