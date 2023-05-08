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
              // console.log(params, ']]]]]]')
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
            // data: ['支出', '收入'],
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
            data: props.xdata

            // data: (function () {
            //   var list = []
            //   for (var i = 1; i <= 11; i++) {
            //     list.push(i)
            //   }
            //   return list
            // })()
          },
          xAxis: {
            show: false,
            splitLine: {
              show: false,
              lineStyle: { color: 'rgba(	105, 105, 105,0.6)', type: 'dashed' }
            },
            type: 'value',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: { show: false }
          },
          series: [
            {
              name: '',
              type: 'bar',
              stack: 'total',
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
              data: props.seriesData[0] ? props.seriesData[0].data : []
            }
          ]
        }
        props.seriesData.forEach(item => {
          option.series.push({
            name: item.name,
            type: 'bar',
            stack: 'total',
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: { color: '#fff' }
              }
            },
            data: item.data
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
