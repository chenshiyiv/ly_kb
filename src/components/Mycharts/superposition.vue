<template>
  <!-- 柱状图 -->
  <!-- <div class="loading" v-if="prop"></div> -->
  <div ref="line" class="line"></div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'
export default {
  props: {
    seriesData: {
      type: Array,
      default: () => {
        return []
      }
    },

    xdata: {
      type: Array,
      default: () => {
        return []
      }
    },
    legend: {
      type: Boolean,
      default: false
    },
    dataZoom: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Object,
      default: () => {
        return {
          top: '22% ',
          left: '3%',
          right: '4%',
          height: '70%',
          bottom: '0',
          containLabel: true
        }
      }
    },
    title: {
      type: String,
      default: ' '
    }
  },
  setup(props) {
    let line = ref('')
    const methods = {
      drawLine() {
        // 初始化
        var myChart = echarts.init(line.value)

        // 配置项

        var colors = [
          '#4C98FB',
          '#83CCE7',
          '#26C7C8',
          '#73DEBD',
          '#26C978',
          '#8CDF6C',
          '#FBD657',
          '#F56679',
          '#E07BCE',
          '#9D50E0',
          '#634FDA'
        ]
        var option = {
          title: {
            text: '',
            left: 19,
            top: 15,
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            //提示框组件
            trigger: 'axis',
            // formatter: (params) => {
            //     return params.value
            // },
            borderColor: 'rgba(0, 243, 230, 0.4)', // 边框颜色
            axisPointer: {
              type: 'shadow',
              label: {
                backgroundColor: 'rgba(17, 27, 54, 1)'
              }
            },
            textStyle: {
              color: 'black',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 14
            }
          },
          color: colors,
          legend: {
            show: false,
            top: 10,
            left: 200,
            itemWidth: 10,
            itemHeight: 10,
            // padding: [5, 10],
            textStyle: {
              fontSize: 14,
              color: '#96A4F4',
              padding: [3, 0, 0, 0]
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '22%',
            containLabel: true
          },

          xAxis: {
            type: 'category',
            axisLabel: {
              color: '#fff'
            },
            axisLine: {
              lineStyle: {
                color: '#96A4F4'
              },
              width: 5
            },
            axisTick: {
              show: false
            },
            data: props.xdata
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#fff'
            },
            axisLine: {
              lineStyle: {
                color: '#96A4F4'
              },
              width: 5
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
              }
            }
          },
          series: []
        }
        if (props.dataZoom) {
          option.dataZoom = [
            {
              type: 'inside',
              start: 0,
              end: 1
            },
            {
              start: 0,
              end: 5
            }
          ]
        }

        props.seriesData.forEach(item => {
          option.series.push({
            name: item.name,
            type: 'bar',
            stack: 'total',
            barWidth: '10',
            label: {
              show: false,
              position: 'insideRight'
            },
            data: item.value || item.data
          })
        })

        myChart.setOption(option)
        myChart.clear()
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.onresize = function () {
          myChart.resize()
        }
      }
    }
    onMounted(() => {
      methods.drawLine()
    })

    watch(
      props,
      newVal => {
        if (newVal) {
          // console.log(newVal, 'newval')
          methods.drawLine() //调用ECharts的方法重新绘制
        }
      },
      {
        // 被侦听的内容需要是函数的写法 () => stuInfo.friend
        deep: true
      }
    )
    return {
      ...methods,
      line
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 100%;
}
.loading {
  width: 100%;
  height: 100%;
}
</style>
