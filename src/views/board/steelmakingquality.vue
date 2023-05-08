<template>
  <!-- 凌钢优特钢炼钢质量看板 -->
  <div class="quality">
    <div class="tit">凌钢优特钢炼钢质量看板</div>
    <div class="content">
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit">最新炉次生产进度跟踪</div>
          <div class="chart">
            <Heatmap :xdata="hotdata.xdata" :ydata="hotdata.ydata" :data="hotdata.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">生产炉次数量发和告警分布</div>
          <div class="chart">
            <Columndiagram :xdata="coundata.xdata" :data="coundata.data" />
          </div>
        </div>
        <div class="box_item last">
          <div class="last_item">
            <div class="box_tit">窄成分命中率TOP5</div>
            <div class="chart">
              <LandscapeBar :seriesData="narrowda.data" />
            </div>
          </div>
          <div class="last_item">
            <div class="box_tit">低倍缺陷TOP5</div>
            <div class="chart">
              <LandscapeBar :seriesData="fect.data" />
            </div>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit">BOF出钢情况</div>
          <div class="chart">
            <ChartLine :title="'BOF出钢'" :xdata="bofsteel.xdata" :data="bofsteel.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">
            过程成分跟踪
            <div class="tab">
              <div
                class="tabitem"
                v-for="item in tablist"
                :key="item.id"
                :class="{ chose: item.id == Tochose }"
                @click="Totarget(item)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="chart">
            <ChartBar :seriesData="rackdata.data" :xdata="rackdata.xdata" :legend="true" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">过热度跟踪</div>
          <div class="chart">
            <ChartBar :seriesData="Heatdata.data" :xdata="Heatdata.xdata" :legend="true" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">冶炼节奏</div>
          <div class="chart">
            <Superposition :xdata="Procedure.xdata" :seriesData="Procedure.data" />
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit">质量异议缺陷类型分布</div>
          <div class="chart">
            <Columndiagram :xdata="Quality.xdata" :data="Quality.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">窄成分命中率趋势</div>
          <div class="chart">
            <ChartLine :title="'窄成分命中率趋势'" :xdata="HitTrend.xdata" :data="HitTrend.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">低倍合格率趋势</div>
          <div class="chart">
            <ChartLine :title="'低倍合格率趋势'" :xdata="QBQualitydata.xdata" :data="QBQualitydata.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">低倍缺陷分布</div>
          <div class="chart">
            <ChartPie :title="' '" :data="rose.data" />
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
import {
  latest_prodAPI,
  prod_heat_countAPI,
  SmeltingProcedureAPI,
  QualityDefectAPI,
  BOF_outSteelAPI,
  QCMTrackAPI,
  SuperHeatAPI,
  QBDefectTop5API,
  NarrowHitTrendAPI,
  QBQualityTrendAPI,
  narrow_componentAPI,
  QBDistributionAPI
} from '@/api/https.js'
export default {
  setup() {
    let state = reactive({
      Tochose: 0,
      tablist: [
        { name: 'Al', id: 0 },
        { name: 'Si', id: 1 },
        { name: 'S', id: 2 },
        { name: 'B', id: 3 },
        { name: 'Ca', id: 4 },
        { name: 'Ti', id: 5 }
      ],
      fect: {},
      coundata: {},
      Procedure: {},
      Quality: {},
      hotdata: {},
      bofsteel: {},
      rackdata: {},
      Heatdata: {},
      HitTrend: {},
      narrowda: {},
      rose: {},
      QBQualitydata: {},
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
    let methods = {
      // 炉次生产进跟踪热力图
      async latest_prod() {
        let res = await latest_prodAPI()
        state.hotdata = res.data
      },
      async prod_heat_count() {
        let res = await prod_heat_countAPI()
        state.coundata = res.data
      },
      async SmeltingProcedure() {
        let res = await SmeltingProcedureAPI()
        state.Procedure = res.data
      },
      async QualityDefect() {
        let res = await QualityDefectAPI()
        state.Quality = res.data
      },
      async BOF_outSteel() {
        let res = await BOF_outSteelAPI()
        state.bofsteel = res.data
      },
      async Totarget(item) {
        item ? (state.Tochose = item.id) : ''
        let res = await QCMTrackAPI(item ? item.name : 'Al')
        state.rackdata = res.data
      },
      async SuperHeat() {
        let res = await SuperHeatAPI()
        state.Heatdata = res.data
      },
      async QBDefectTop5() {
        let res = await QBDefectTop5API()
        state.fect = res.data
      },
      async NarrowHitTrend() {
        let res = await NarrowHitTrendAPI()
        state.HitTrend = res.data
      },
      async QBQualityTrend() {
        let res = await QBQualityTrendAPI()
        state.QBQualitydata = res.data
      },
      async narrow_component() {
        let res = await narrow_componentAPI()
        state.narrowda = res
      },
      async QBDistribution() {
        let res = await QBDistributionAPI()
        state.rose = res.data
      }
    }
    methods.narrow_component()
    methods.latest_prod()
    methods.prod_heat_count()
    methods.SmeltingProcedure()
    methods.QualityDefect()
    methods.BOF_outSteel()
    methods.Totarget()
    methods.SuperHeat()
    methods.QBDefectTop5()
    methods.NarrowHitTrend()
    methods.QBQualityTrend()
    methods.QBDistribution()
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

.box_tit {
  color: #fff;
  font-size: 0.1rem;
  font-weight: 700;
  padding-left: 5%;
  letter-spacing: 1px;
  position: relative;
}

.tab {
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  .tabitem {
    background: url('~@/assets/img/def_btn.png') no-repeat;
    background-size: 100% 100%;
    flex: 1;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    height: 100%;
    margin: 0 1%;
    color: #ffffff88;
    cursor: pointer;
    &:hover {
      background: url('~@/assets/img/chose_btn.png') no-repeat;
      background-size: 100% 100%;
      color: #fff;
    }
  }
}

.chose {
  background: url('~@/assets/img/chose_btn.png') no-repeat;
  background-size: 100% 100%;
  color: #fff !important;
}
</style>
