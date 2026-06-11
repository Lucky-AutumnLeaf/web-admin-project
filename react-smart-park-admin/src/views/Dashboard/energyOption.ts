export const energyOption = {
  title: {
    text: '当日能源消耗'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [],
    top: 'top'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['0：00', '4：00', '8：00', '12：00', '16：00', '20：00', '24：00']
  },
  yAxis: {
    type: 'value'
  },
  series: []
}
