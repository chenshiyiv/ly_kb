<template>
  <!-- 饼图 -->
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
    padding: {
      type: Array,
      default: () => {
        return [0, 0, 0, 20]
      }
    },
    fontSize: {
      type: Number,
      default: 12
    },
    xdata: {
      type: Array,
      default: () => {
        return [0, 0, 0, 0]
      }
    },
    minmax: {
      type: Boolean,
      default: false
    },
    areaStyle: {
      type: Boolean,
      default: false
    },
    dataZoom: {
      type: Boolean,
      default: false
    },
    unit: {
      type: Boolean,
      default: false
    },

    linkage: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 12
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

        var trafficWay = props.data
        var data = []
        var color = ['#00ffff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
        for (var i = 0; i < trafficWay.length; i++) {
          data.push(
            {
              value: trafficWay[i].value,
              name: trafficWay[i].name,
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  shadowBlur: 20,
                  borderColor: color[i],
                  shadowColor: color[i]
                }
              }
            },
            {
              value: 2,
              name: '',
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  },
                  color: 'rgba(0, 0, 0, 0)',
                  borderColor: 'rgba(0, 0, 0, 0)',
                  borderWidth: 0
                }
              }
            }
          )
        }
        var seriesOption = [
          {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [30, 50],
            center: ['50%', '58%'],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'outside',
                  color: '#fff',
                  fontSize: 12,
                  formatter: function (params) {
                    var percent = 0
                    var total = 0
                    for (var i = 0; i < trafficWay.length; i++) {
                      total += trafficWay[i].value
                    }
                    percent = ((params.value / total) * 100).toFixed(0)
                    if (params.name !== '') {
                      return params.name + percent + '%'
                    } else {
                      return ''
                    }
                  }
                },
                labelLine: {
                  length: 5,
                  length2: 10,
                  show: true,
                  color: '#00ffff'
                }
              }
            },
            data: data
          }
        ]
        let option = {
          color: color,
          title: {
            text: props.title,
            top: '0',
            textAlign: 'center',
            left: '49%',
            textStyle: {
              color: '#fff',
              fontSize: 15,
              fontWeight: '700'
            }
          },

          tooltip: {
            show: true
          },
          // legend: {
          //   icon: 'circle',
          //   orient: 'horizontal',
          //   // x: 'left',
          //   data: ['火车', '飞机', '客车', '轮渡'],
          //   right: 340,
          //   bottom: 150,
          //   align: 'right',
          //   textStyle: {
          //     color: '#fff'
          //   },
          //   itemGap: 20
          // },
          toolbox: {
            show: false
          },
          series: seriesOption
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
