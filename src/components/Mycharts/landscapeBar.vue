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
        var colorList = ['#1e90ff', '#f36c6c', '#f36c6c', '#e6cf4e', '#e6cf4e', '#20d180', '#0093ff']

        var datass = props.seriesData

        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            show: false
          },
          grid: {
            left: '5%',
            right: '7%',
            top: '5%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: {
            name: '百分比',
            show: false,
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              //y轴文字的配置
              textStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              //y轴刻度线
              show: false
            }
          },
          yAxis: [
            {
              type: 'category',
              inverse: true,
              axisTick: {
                //y轴刻度线
                show: false
              },
              splitLine: {
                show: false,
                color: '#fff'
              },
              axisLabel: {
                //y轴文字的配置
                textStyle: { color: '#fff' }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: 'rgba(239, 242, 247, 0.974)'
                }
              },
              nameTextStyle: {
                color: 'rgba(239, 242, 247, 0.974)',
                fontSize: props.fontSize,
                padding: props.padding
              },
              splitArea: {
                show: false
              },
              data: datass.map(item => item.name)
            }
          ],

          series: [
            {
              name: '方法',
              type: 'bar',
              barCategoryGap: '50%',
              barGap: '100%',
              barWidth: 10,
              data: datass.map(item => {
                var itemStyle = {
                  color: colorList[0],
                  barBorderRadius: [10, 10, 10, 10]
                }
                return {
                  value: item.value,
                  itemStyle: itemStyle
                }
              }),
              label: {
                normal: {
                  color: '#fff',
                  show: true,
                  position: ['102%', '0'],
                  textStyle: {
                    fontSize: 12
                  },
                  formatter: function (a) {
                    // return a.name + ' ' + a.value
                    return a.value
                  }
                }
              }
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
