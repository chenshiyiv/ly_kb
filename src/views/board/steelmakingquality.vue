<template>
  <!-- 凌钢优特钢炼钢质量看板 -->
  <div class="quality">
    <div class="tit">凌钢优特钢炼钢质量看板</div>
    <div class="content">
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <Heatmap />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <Columndiagram />
          </div>
        </div>
        <div class="box_item last">
          <div class="last_item">
            <div class="box_tit"></div>
            <div class="chart">
              <LandscapeBar />
            </div>
          </div>
          <div class="last_item">
            <div class="box_tit"></div>
            <div class="chart">
              <LandscapeBar />
            </div>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine :title="'坯料库历史库存量'" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartBar :seriesData="storeroom" :legend="true" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartBar :seriesData="storeroom" :legend="true" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <Superposition />
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
            <ChartLine :title="'坯料库历史库存量'" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine :title="'坯料库历史库存量'" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartPie :title="'成品库有单无单百分比'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
import Heatmap from '@/components/Mycharts/heatmap.vue'
import Columndiagram from '@/components/Mycharts/Columndiagram.vue'
import LandscapeBar from '@/components/Mycharts/landscapeBar.vue'
import ChartLine from '@/components/Mycharts/ChartLine.vue'
import ChartBar from '@/components/Mycharts/ChartBar.vue'
import ChartPie from '@/components/Mycharts/ChartPie.vue'
import Superposition from '@/components/Mycharts/superposition.vue'

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
  components: { Heatmap, Columndiagram, LandscapeBar, ChartLine, ChartBar, ChartPie, Superposition }
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
      .box_item {
        height: 100%;
        flex: 1;
        margin: 0 0.3%;
        background: url('~@/assets/img/w_bgc.png') no-repeat;
        background-size: 100% 100%;
        .box_tit {
          height: 10%;
          width: 100%;
          background: url('~@/assets/img/255.png') no-repeat;
          background-size: 100% 100%;
        }

        .chart {
          width: 100%;
          height: 90%;
        }
      }
    }
    .last {
      display: flex;
      justify-content: center;
      align-items: center;
      .last_item {
        height: 100%;
        flex: 1;
        margin: 0 0.3%;
      }
    }
  }
}
</style>
