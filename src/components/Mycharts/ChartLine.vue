<template>
  <!-- 折线图 -->
  <!-- <div class="loading" v-if="prop"></div> -->
  <div ref="line" class="line"></div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'
export default {
  props: {
    data: {
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
          top: '20% ',
          left: '2%',
          right: '5%',
          bottom: '3%'
        }
      }
    },
    title: {
      type: String,
      default: ' '
    },
    tittop: {
      type: String,
      default: '5%'
    }
  },
  setup(props) {
    let line = ref('')
    const methods = {
      drawLine() {
        // 初始化
        var myChart = echarts.init(line.value)
        let colorlist = [
          '#1B7EF2',
          '#48E5E5',
          '#6821FF',
          '#ffd700',
          '#8b008b',
          '#F9A589',
          '#ff4500',
          '#7fff00',
          '#9acd32',
          '#20b2aa',
          '#ffc0cb',
          '#2f4f4f',
          '#ff4500',
          '#d2b48c',
          '#800000',
          '#00ffff',
          '#4682b4'
        ]
        let series = []
        props.data.forEach(item => {
          series.push({
            name: item.name,
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 1.5
            },
            showSymbol: false,
            emphasis: {
              focus: 'series'
            },
            data: item.data
          })
        })

        // 配置项
        let option = {
          color: colorlist,
          title: {
            show: props.title == ' ' ? false : true,
            text: props.title,
            textStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 13
            },
            top: props.tittop,
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            show: props.legend,
            right: '5%',
            top: '4%',
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#1bb4f6'
            }
          },

          grid: {
            left: props.grid.left,
            right: props.grid.right,
            bottom: props.grid.bottom,
            top: props.grid.top,
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: props.xdata,
              axisLine: {
                lineStyle: {
                  color: 'rgba(239, 242, 247, 0.974)'
                }
              },
              axisLabel: {
                //y轴文字的配置
                textStyle: {}
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: true,
                lineStyle: { color: 'rgba(	105, 105, 105,0.6)', type: 'dashed' }
              },
              axisLabel: {
                //y轴文字的配置
                textStyle: {}
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
              }
            }
          ],
          series:
            props.data.length != 0
              ? series
              : [
                  {
                    name: 'Line1',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 1.5
                    },
                    showSymbol: false,
                    emphasis: {
                      focus: 'series'
                    },
                    data: [140, 232, 101, 264, 90, 340, 250]
                  },
                  {
                    name: 'Line2',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 1.5
                    },
                    showSymbol: false,
                    emphasis: {
                      focus: 'series'
                    },

                    data: [120, 282, 111, 234, 220, 340, 310]
                  },
                  {
                    name: 'Line3',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                      width: 1.5
                    },
                    showSymbol: false,
                    emphasis: {
                      focus: 'series'
                    },
                    data: [320, 132, 201, 334, 190, 130, 220]
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
