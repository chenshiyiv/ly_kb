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
        return [
          {
            name: '示例',
            data: [15, 51, 8, 46, 15, 51, 8, 46, 15, 51],
            colors: ['rgba(	0, 255, 255, 1)', 'rgba(251, 213, 138, 0)']
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
        let option = {
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              console.log(params, ']]]]]]')
              var tar
              if (params[1].value != '-') {
                tar = params[1]
              } else {
                tar = params[2]
              }
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
            }
          },
          legend: {
            data: ['支出', '收入'],
            left: '5%',
            top: '3%',
            textStyle: {
              color: '#fff'
            }
          },
          grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            containLabel: true
          },
          yAxis: {
            type: 'category',
            splitLine: { show: false },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            data: (function () {
              var list = []
              for (var i = 1; i <= 11; i++) {
                list.push(i + '月')
              }
              return list
            })()
          },
          xAxis: {
            splitLine: {
              show: true,
              lineStyle: { color: 'rgba(	105, 105, 105,0.6)', type: 'dashed' }
            },
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            }
          },
          series: [
            {
              name: '辅助',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
                }
              },
              data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
            },
            {
              name: '收入',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  textStyle: { color: '#fff' }
                }
              },
              data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
            },
            {
              name: '支出',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  textStyle: { color: '#fff' }
                }
              },
              data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
            }
          ]
        }

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
