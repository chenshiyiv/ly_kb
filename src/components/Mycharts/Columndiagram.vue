<template>
  <!-- 柱线图 -->
  <!-- <div class="loading" v-if="prop"></div> -->
  <div ref="Columndiagram" class="Columndiagram"></div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [[]]
      }
    },

    xdata: {
      type: Array,
      default: () => {
        return ['电炉', 'LF', 'VD', 'CCM', '加热炉', '轧线']
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
          top: '25%',
          left: '10%',
          right: '10%',
          bottom: '11%',
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
    let Columndiagram = ref('')
    const methods = {
      drawLine() {
        // 初始化
        var myChart = echarts.init(Columndiagram.value)

        // 配置项
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          grid: {
            top: props.grid.top,
            left: props.grid.left,
            right: props.grid.right,
            bottom: props.grid.bottom
          },

          legend: {
            right: '10%',
            top: '2%',
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#fff'
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 14
                }
              },
              axisLine: {
                show: true,
                lineStyle: {
                  type: 'solid',
                  color: '#fff', //左边线的颜色
                  width: '1' //坐标线的宽度
                }
              },
              axisTick: {
                show: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '',

              axisLabel: {
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 14
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false,
                lineStyle: { color: 'rgba(	105, 105, 105,0.6)', type: 'dashed' }
              }
            },
            {
              type: 'value',
              name: '',
              axisLabel: {
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 14
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false,
                lineStyle: { color: 'rgba(	105, 105, 105,0.6)', type: 'dashed' }
              }
            }
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value
                }
              },
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name: 'Precipitation',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value
                }
              },
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: 'Temperature',
              yAxisIndex: 1,

              type: 'line',
              tooltip: {
                valueFormatter: function (value) {
                  return value
                }
              },
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            },
            {
              name: 'dsad',
              type: 'line',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value
                }
              },
              data: [5.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        }

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
      Columndiagram
    }
  }
}
</script>

<style lang="scss" scoped>
.Columndiagram {
  width: 100%;
  height: 100%;
}
.loading {
  width: 100%;
  height: 100%;
}
</style>
