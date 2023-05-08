<template>
  <!-- 横向柱状图 -->
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
        return [
          {
            value: 522.38,
            name: '1#棒材'
          },
          {
            value: 448.72,
            name: '2#棒材'
          },
          {
            value: 432.89,
            name: '3#棒材'
          },
          {
            value: 328.71,
            name: '4#棒材'
          },
          {
            value: 311.28,
            name: '5#棒材'
          }
        ]
      }
    },

    xdata: {
      type: Array,
      default: () => {
        return [0, 0, 0, 0]
      }
    },
    legend: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Object,
      default: () => {
        return {
          top: '22% ',
          left: '3%',
          right: '20%',
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
        let seriesdata = []
        props.seriesData.forEach(item => {
          seriesdata.push({
            name: item.name,
            type: 'bar',
            data: item.data,
            stack: item.stack ? item.stack : null
          })
        })

        let option = {
          legend: {
            show: false,
            left: '10%'
          },

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          xAxis: {
            data: props.xdata,
            name: '',
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 11
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: { show: false },
            splitArea: { show: false }
          },
          yAxis: {
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: { show: false }
          },
          grid: {
            bottom: '12%',
            right: '1%'
          },
          series: seriesdata
        }
        myChart.on('brushSelected', function (params) {
          var brushed = []
          var brushComponent = params.batch[0]
          for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
            var rawIndices = brushComponent.selected[sIdx].dataIndex
            brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '))
          }
          myChart.setOption({
            title: {
              backgroundColor: '#333',
              text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
              bottom: 0,
              right: '10%',
              width: 100,
              textStyle: {
                fontSize: 12,
                color: '#fff'
              }
            }
          })
        })

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
