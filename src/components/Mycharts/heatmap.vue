<template>
  <!-- 热力图 -->
  <!-- <div class="loading" v-if="prop"></div> -->
  <div ref="heatmap" class="heatmap"></div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [
          [
            [0, 0, 21],
            [0, 1, 0],
            [0, 2, 0],
            [1, 0, 6],
            [1, 1, 15],
            [1, 2, 0],
            [2, 0, 11],
            [2, 1, 20],
            [2, 2, 6],
            [3, 0, 21],
            [3, 1, 0],
            [3, 2, 0],
            [4, 0, 19],
            [4, 1, 7],
            [4, 2, 16],
            [5, 0, 22],
            [5, 1, 0],
            [5, 2, 0]
          ]
        ]
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
    let heatmap = ref('')
    const methods = {
      drawLine() {
        // 初始化
        var myChart = echarts.init(heatmap.value)

        // 配置项
        let option = {
          title: {
            text: props.title,
            left: '18', //'5' | '5%'，title 组件离容器左侧的距离
            top: 'auto', //title 组件离容器上侧的距离
            textStyle: {
              color: 'black', //'red'，字体颜色
              fontStyle: 'normal', //'italic'(倾斜) | 'oblique'(倾斜体) ，字体风格
              fontWeight: 'normal', //'bold'(粗体) | 'bolder'(粗体) | 'lighter'(正常粗细) ，字体粗细
              fontFamily: 'sans-serif', //'sans-serif' | 'serif' | 'monospace' | 'Arial' | 'Courier New'
              // 'Microsoft YaHei'(微软雅黑) ，文字字体
              fontSize: 15, //字体大小
              lineHeight: 15 //字体行高
            }
          },
          grid: {
            top: '25%',
            left: '8%',
            right: '2%',
            bottom: '11%'
          },
          tooltip: {
            show: true
          },
          xAxis: {
            position: 'bottom',
            name: '',
            type: 'category',
            data: ['电炉', 'LF', 'VD', 'CCM', '加热炉', '轧线'],
            splitArea: {
              show: true
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14
              }
            }
          },
          yAxis: {
            nameLocation: 'end',
            type: 'category',
            data: ['1#', '2#', '3#'],
            axisLine: {
              show: true,
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
            },
            axisLabel: {
              rich: {
                red: {
                  color: '#fff'
                }
              },
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14
              }
            },
            splitArea: {
              show: true
            }
          },
          visualMap: {
            min: 0,
            max: 31,
            calculable: true,
            orient: 'horizontal',
            right: '30%',
            top: '10',
            //   "color": ["#dd3f36", '#fae521', "#37b70c"],
            color: ['#A30014', '#fdefef'],
            text: ['炉次多', '炉次少'],
            textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              name: '优良天数',
              type: 'heatmap',
              data: [
                [0, 0, 21],
                [0, 1, 0],
                [0, 2, 0],
                [1, 0, 6],
                [1, 1, 15],
                [1, 2, 0],
                [2, 0, 11],
                [2, 1, 20],
                [2, 2, 6],
                [3, 0, 21],
                [3, 1, 0],
                [3, 2, 0],
                [4, 0, 19],
                [4, 1, 7],
                [4, 2, 16],
                [5, 0, 22],
                [5, 1, 0],
                [5, 2, 0]
              ],
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  borderColor: 'rgba(255, 255, 255, 0.9)'
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(255, 255, 255, 0.5)'
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
      heatmap
    }
  }
}
</script>

<style lang="scss" scoped>
.heatmap {
  width: 100%;
  height: 100%;
}
.loading {
  width: 100%;
  height: 100%;
}
</style>
