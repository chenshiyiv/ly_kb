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
        let colorlist = [
          ['rgba(	0, 255, 255, 1)', 'rgba(251, 213, 138, 0)'],
          ['rgba(	173,109,255, 1)', 'rgba(173,109,255, 0)'],
          ['rgba(	0, 255, 0, 1)', 'rgba(0, 241, 226, 0)'],
          ['rgba(255, 69, 0, 1)', 'rgba(	255, 69, 0, 0)'],
          ['rgba(255, 20, 147, 1)', 'rgba(255, 20, 147, 0)'],
          ['rgba(	106, 90, 205, 1)', 'rgba(106, 90, 205, 0)'],
          ['rgba(	139, 0, 139, 1)', 'rgba(139, 0, 139, 0)']
        ]

        // const seriesData = props.seriesData

        const getSeries = () => {
          return props.seriesData.map((item, index) => {
            return {
              name: item.name,
              type: 'bar',
              data: item.data,
              barWidth: 8,
              barGap: 0.1, //柱间距离
              itemStyle: {
                normal: {
                  show: true,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorlist[index][0]
                    },
                    {
                      offset: 0.5,
                      color: colorlist[index][0]
                    },
                    {
                      offset: 1,
                      color: colorlist[index][1]
                    }
                  ]),
                  opacity: 0.8
                }
              }
            }
          })
        }

        let option = {
          title: {
            text: props.title,
            top: '14%',
            textAlign: 'center',
            left: '50%',
            textStyle: {
              color: '#fff',
              fontSize: 15,
              fontWeight: '700'
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
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: '25%',
            //	padding:'0 0 10 0',
            containLabel: true
          },
          legend: {
            show: props.legend,
            type: 'scroll',

            //图例组件，颜色和名字
            right: '10%',
            top: '2%',
            icon: 'circle',
            left: '5%',
            itemGap: 16,
            itemWidth: 20,
            itemHeight: 13,
            selectedMode: false,
            textStyle: {
              color: '#08f1f8',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12
            }
          },
          xAxis: [
            {
              type: 'category',
              interval: 0,
              // 	boundaryGap: true,//坐标轴两边留白
              data: props.xdata,
              axisLabel: {
                //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 14
                },
                rotate: 0
              },
              axisTick: {
                //坐标轴刻度相关设置。
                show: true
              },
              axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                  color: '#fff'
                }
              }
              //splitLine: {
              //         show: true,
              //         lineStyle: {
              //             color: 'rgba(255,255,255,0.2)',
              //         }
              //     },
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '',
              nameTextStyle: {
                color: '#fff',
                lineHeight: 20,
                padding: [0, 0, 10, 0]
              },
              splitNumber: 5,
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
              axisTick: {
                show: false
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: ['#fff'],
                  opacity: 0.06
                }
              }
            }
          ],
          series: getSeries()
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
