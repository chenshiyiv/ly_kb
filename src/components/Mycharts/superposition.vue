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
        var data = {
          area: ['新荣区', '平城区', '云冈区', '云州区', '阳高县', '天镇县', '广灵县', '浑源县', '左云县'],
          legend: [
            '因病',
            '因残',
            '因学',
            '因灾',
            '缺土地',
            '缺水',
            '缺技术',
            '缺资金',
            '交通条件落后',
            '自身发展动力不足',
            '其他原因'
          ],
          data: [
            [1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50]
          ]
        }
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
            },
            data: data.legend
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '13%',
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
            data: data.area
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
        for (var i = 0; i < data.legend.length; i++) {
          option.series.push({
            name: data.legend[i],
            type: 'bar',
            stack: '总量',
            barWidth: '45%',
            label: {
              show: false,
              position: 'insideRight'
            },
            data: data.data[i]
          })
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
