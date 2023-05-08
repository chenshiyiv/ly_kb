<template>
  <!-- 凌钢优特钢轧钢质量看板 -->
  <div class="quality">
    <div class="tit">凌钢优特钢轧钢质量看板</div>
    <div class="content">
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit">加热炉生产进度跟踪</div>
          <div class="chart">
            <div class="chart_item">
              <Bothbar :legend="true" :xdata="bothdata.xdata" :seriesData="bothdata.data" />
            </div>
            <div class="chart_item">
              <div class="inp">
                <Instrumentpanel :subtext="topplan.plan" :Data="topplan.value" />
              </div>
              <div class="inp">
                <Instrumentpanel :subtext="btmplan.plan" :Data="btmplan.value" />
              </div>
            </div>
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">扎线生产进度跟踪</div>
          <div class="chart">
            <div class="chart_item l1">
              <div class="table_item" v-for="item in list" :key="item.name">
                <div class="clome" style="text-align: center">{{ item.name }}:</div>
                <div class="clome">{{ item.value }}</div>
              </div>
            </div>
            <div class="chart_item l2">
              <Gant :seriesData="gant.data" :xdata="gant.xdata" />
            </div>
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">当前班组生产指标分析</div>
          <div class="chart">
            <div class="chart_item">
              <ChartLine :xdata="roolhit.xdata" :data="roolhit.data" />
            </div>
            <div class="chart_item">
              <ChartLine :xdata="yields.xdata" :data="yields.data" />
            </div>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit">加热炉入炉温度跟踪</div>
          <div class="chart">
            <ChartBar :legend="true" :xdata="hoatdata.xdata" :seriesData="hoatdata.ydata" v-if="hoatdata != {}" />
          </div>
        </div>

        <div class="box_item">
          <div class="box_tit">加热炉加热时长跟踪</div>
          <div class="chart">
            <Superposition :seriesData="longtime.data" :xdata="longtime.xdata" :dataZoom="true" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">扎线轧制温度跟踪</div>
          <div class="chart">
            <ChartLine :xdata="temp.xdata" :data="temp.data" />
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="box_item">
          <div class="box_tit">质量异议缺陷类型分布</div>
          <div class="chart">
            <Columndiagram :xdata="mquality.xdata" :data="mquality.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">温度命中率分析</div>
          <div class="chart">
            <Columndiagram :xdata="milldata.xdata" :data="milldata.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">成材率分析</div>
          <div class="chart">
            <ChartLine :xdata="yieldata.xdata" :data="yieldata.data" />
          </div>
        </div>
        <div class="box_item">
          <div class="box_tit">定尺率分析</div>
          <div class="chart">
            <ChartLine :xdata="millfixdata.xdata" :data="millfixdata.data" />
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
import Bothbar from '@/components/Mycharts/bothbar.vue' // 柱状叠加图
import {
  HFProd1API,
  HFProd2API,
  HFProd3API,
  MillProdDataAPI,
  HFDataAPI,
  HFData3API,
  HFData4API,
  Mill_qualityAPI,
  Mill_yieldAPI,
  Mill_hitrateAPI,
  Mill_fixlengthAPI,
  MillProdAPI,
  MillProd2API
} from '@/api/https.js'
export default {
  setup() {
    let state = reactive({
      topplan: {},
      btmplan: {},
      bothdata: {},
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
      ],
      roolhit: {},
      yields: {},
      hoatdata: {},
      longtime: {},
      temp: {},
      list: {},
      mquality: {},
      milldata: {},
      yieldata: {},
      millfixdata: {},
      MillProdAPI: {},
      gant: {}
    })
    let methods = {
      async MillProd() {
        let res = await MillProdAPI()
        state.gant = res.data
        console.log(res, '==')
      },
      async HFProd1() {
        let res = await HFProd1API()
        state.bothdata = res.data
      },
      async HFProd2() {
        let res = await HFProd2API()
        state.topplan = res.data
      },
      async HFProd3() {
        let res = await HFProd3API()
        state.btmplan = res.data
      },
      async MillProdData() {
        let res = await MillProdDataAPI()
        state.roolhit = res.data.roolhit
        state.yields = res.data.yield
      },
      async HFData() {
        let res = await HFDataAPI()
        state.hoatdata = res.data
      },
      async HFData3() {
        let res = await HFData3API()
        state.longtime = res.data
      },
      async HFData4() {
        let res = await HFData4API()
        state.temp = res.data
      },
      async Mill_quality() {
        let res = await Mill_qualityAPI()
        state.mquality = res.data
      },
      async Mill_hitrate() {
        let res = await Mill_hitrateAPI()
        state.milldata = res.data
      },
      async Mill_yield() {
        let res = await Mill_yieldAPI()
        state.yieldata = res.data
      },
      async Mill_fixlength() {
        let res = await Mill_fixlengthAPI()
        state.millfixdata = res.data
      },
      async MillProd2() {
        let res = await MillProd2API()
        state.list = res.data.list
      }
    }
    methods.HFProd1()
    methods.HFProd2()
    methods.HFProd3()
    methods.MillProd2()
    methods.MillProd()
    methods.MillProdData()
    methods.HFData()
    methods.HFData3()
    methods.HFData4()
    methods.Mill_quality()
    methods.Mill_yield()
    methods.Mill_hitrate()
    methods.Mill_fixlength()
    return { ...toRefs(state), ...methods }
  },
  components: {
    ChartBar,
    Instrumentpanel,
    Gant,
    ChartLine,
    Superposition,
    Columndiagram,
    Bothbar
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

.box_tit {
  color: #fff;
  font-size: 0.1rem;
  font-weight: 700;
  padding-left: 5%;
  letter-spacing: 1px;
}
</style>
