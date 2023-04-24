<template>
  <!-- 仪表盘 -->
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
        var datas = {
          value: 80,
          title: '健康度',
          type: 1,
          radiusType: 1
        }

        var fontColor = '#fff'
        // var seriesName = ''
        let noramlSize = 12
        // let state = ''
        let center = ['50%', '90%']
        let nqradius, kdradius

        // wqradius = '100%'
        nqradius = '150%'
        kdradius = '65%'

        // let wqColor = 'rgba(80, 152, 237,0.9)'
        let nqColor = [
          [
            datas.value / 100,
            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgba(248,182,45,1)'
              },
              {
                offset: 0.5,
                color: 'rgba(125,103,179,1)'
              },
              {
                offset: 1,
                color: 'rgba(33,109,195,1)'
              }
            ])
          ],
          [1, '#2C3638']
        ]

        let option = {
          title: {
            show: true,
            x: 'center',
            bottom: '20%',
            text: datas.value + '%',
            textStyle: {
              fontWeight: '700',
              fontSize: 15,
              color: fontColor
            }
          },
          tooltip: {
            show: false
          },
          series: [
            {
              name: '刻度文字',
              type: 'gauge',
              radius: kdradius,
              center: center,
              startAngle: 180,
              endAngle: 0,
              z: 7,
              splitNumber: 5,
              min: 0,
              max: 100,
              axisTick: {
                show: true,
                lineStyle: {
                  color: '#fff',
                  width: 1
                },
                length: 8,
                splitNumber: 6
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  width: 25,
                  opacity: 0
                }
              },
              axisLabel: {
                distance: -85,
                fontSize: noramlSize,
                color: fontColor
              },

              pointer: {
                show: true,
                width: 10,
                length: '60%'
              },
              itemStyle: {
                normal: {
                  //color: "#0af",//wqColor
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: 'rgba(248,182,45,1)'
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(125,103,179,1)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(33,109,195,1)'
                    }
                  ])
                }
              },
              detail: {
                show: false,
                offsetCenter: [0, '10%'], //显示数值的位置
                rich: {
                  value: {
                    fontSize: 25,
                    lineHeight: 10,
                    color: '#fff',
                    fontWeight: '700'
                  },
                  company: {
                    fontSize: 16,
                    lineHeight: 20,
                    color: '#fff'
                  }
                }
              },
              data: [datas.value]
            },

            {
              name: '内层盘',
              type: 'gauge',
              z: 6,
              radius: nqradius,
              startAngle: 180,
              endAngle: 0,
              center: center,
              axisLine: {
                lineStyle: {
                  color: nqColor,
                  width: 25,
                  opacity: 0.9
                }
              },
              splitNumber: 5,
              min: 0,
              max: 100,
              axisTick: {
                show: false
              },

              axisLabel: {
                show: false,
                textStyle: { color: '#fff' },
                distance: 80
              },
              pointer: {
                show: false
              },

              detail: {
                show: 0
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
