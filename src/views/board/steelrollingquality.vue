<template>
  <!-- 凌钢优特钢轧钢质量看板 -->
  <div class="quality">
    <div class="tit">凌钢优特钢轧钢质量看板</div>
    <div class="content">
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <div class="chart_item">
              <ChartBar :legend="true" />
            </div>
            <div class="chart_item">
              <div class="inp">
                <Instrumentpanel />
              </div>
              <div class="inp">
                <Instrumentpanel />
              </div>
            </div>
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <div class="chart_item l1">
              <div class="table_item">
                <div class="clome" style="text-align: center">数据项:</div>
                <div class="clome">值</div>
              </div>
              <div class="table_item">
                <div class="clome" style="text-align: center">数据项:</div>
                <div class="clome">值</div>
              </div>
              <div class="table_item">
                <div class="clome" style="text-align: center">数据项:</div>
                <div class="clome">值</div>
              </div>
            </div>
            <div class="chart_item l2">
              <Gant />
            </div>
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <div class="chart_item">
              <ChartLine />
            </div>
            <div class="chart_item">
              <ChartLine />
            </div>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartBar :legend="true" />
          </div>
        </div>

        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <Superposition />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine />
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <Columndiagram />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <Columndiagram />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
import Instrumentpanel from '@/components/Mycharts/instrumentpanel.vue' // 仪表盘
import Columndiagram from '@/components/Mycharts/Columndiagram.vue' // 柱线图
import ChartLine from '@/components/Mycharts/ChartLine.vue' // 折线图
import ChartBar from '@/components/Mycharts/ChartBar.vue' // 柱状图
import Gant from '@/components/Mycharts/gant.vue' // 甘特图
import Superposition from '@/components/Mycharts/superposition.vue' // 柱状叠加图

export default {
  setup() {
    let state = reactive({
      storeroom: [
        {
          name: '示例',
          data: [15, 51, 8, 46, 15, 51, 8, 46, 15, 51],
          colors: ['rgba(	0, 255, 255, 1)', 'rgba(0, 255, 255, 0)']
        },
        {
          name: '系列2',
          data: [65, 45, 24, 48, 65, 45, 24, 48, 65, 45],
          colors: ['rgba(	173,109,255, 1)', 'rgba(173,109,255, 0)']
        },
        {
          name: '系列3',
          data: [18, 4, 60, 6, 18, 4, 60, 6, 18, 4],
          colors: ['rgba(	0, 255, 0, 1)', 'rgba(0, 241, 226, 0)']
        }
      ]
    })
    let methods = {}
    return { ...toRefs(state), ...methods }
  },
  components: {
    ChartBar,
    Instrumentpanel,
    Gant,
    ChartLine,
    Superposition,
    Columndiagram
  }
}
</script>

<style lang="scss" scoped>
.quality {
  width: 100%;
  height: 100vh;
  background: url('~@/assets/img/bg.png') no-repeat;
  background-size: 100% 100%;
  .tit {
    width: 100%;
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    font-size: 0.22rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .content {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .content_box {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.3% 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .box_item {
        margin: 0 0.3%;
        height: 100%;
        flex: 1;
        background: url('~@/assets/img/w_bgc.png') no-repeat;
        background-size: 100% 100%;
        .chart {
          height: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
          .chart_item {
            height: 100%;
            flex: 1;
            margin: 0 0.3%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .inp {
              width: 100%;
              flex: 1;
              margin: 0.3% 0;
            }
          }
          .l1 {
            flex: auto;
            width: 30%;

            .table_item {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 3%;
              color: aliceblue;
              font-size: 0.085rem;
              letter-spacing: 1px;
              display: flex;
              .clome {
                width: 50%;
                display: flex;
                justify-content: center;
              }
            }
          }
          .l2 {
            flex: auto;
            width: 60%;
          }
        }
        .box_tit {
          height: 10%;
          width: 100%;
          background: url('~@/assets/img/255.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
