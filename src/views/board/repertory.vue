<template>
  <!-- 库存看板 -->
  <div class="repertory">
    <div class="tit">
      <!-- 凌钢优特钢库存看板 -->
    </div>
    <div class="content">
      <div class="first_half">
        <div class="first_half_box">
          <div class="box_content one">
            <div class="half_box_item">
              <div class="box_tit">一炼钢—炼钢库存去向</div>
              <div class="day">当日累计产量: {{ steeldaydata.steel }}</div>
              <div class="st_content">
                <div class="left">
                  <div class="left_btn">
                    <div
                      @click="Todirectiontop(item, index)"
                      :class="{ chose: direction_top == index }"
                      class="direction"
                      v-for="(item, index) in direction"
                      :key="index"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                  <ChartPie :data="ylgdata" />
                </div>
                <div class="right">
                  <div class="btn">
                    <div
                      class="btnitem"
                      :class="{ chose: steel == index }"
                      v-for="(item, index) in datetype"
                      :key="item"
                      @click="Tosteel(index, item)"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                  <ChartLine :grid="linegrid" :xdata="ylglinedata.xdata" :data="ylglinedata.data" />
                </div>
              </div>
            </div>
            <div class="half_box_item">
              <div class="box_tit">优特钢—炼钢库存去向</div>
              <div class="day">当日累计产量: {{ steeldaydata.goodsteel }}</div>
              <div class="st_content">
                <div class="left">
                  <div class="left_btn">
                    <div
                      @click="Todirectionbtm(item, index)"
                      :class="{ chose: direction_btm == index }"
                      class="direction"
                      v-for="(item, index) in direction"
                      :key="index"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                  <ChartPie :data="goodsteeldata" />
                </div>
                <div class="right">
                  <div class="btn">
                    <div
                      class="btnitem"
                      :class="{ chose: excellent == index }"
                      v-for="(item, index) in datetype"
                      :key="item"
                      @click="Toexcellent(index)"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                  <ChartLine :xdata="goodsteellinedata.xdata" :data="goodsteellinedata.data" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="first_half_box">
          <div class="box_tit">高线</div>
          <div class="box_content">
            <div class="half_box_def">
              <div class="def_tit">
                <span>当日累计消耗量：{{ altitudeline.dayconsume }}</span>
                <span>库存总量：{{ altitudeline.all }}</span>
              </div>
              <ChartLine
                :title="'坯料库历史库存量'"
                :tittop="'12%'"
                :grid="linegrid"
                :data="altitudeline.data"
                :xdata="altitudeline.xdata"
              />
            </div>
            <div class="half_box_def">
              <div class="tab">
                <div
                  class="tab_item"
                  :class="{ chose: heightline == index }"
                  v-for="(item, index) in timetype"
                  :key="index"
                  @click="Toheightline(item, index)"
                >
                  {{ item.name }}
                </div>
              </div>
              <ChartBar :title="'棒材坯料库'" :seriesData="altitudebar.data" :xdata="altitudebar.xdata" />
            </div>
            <div class="half_box_def">
              <div class="def_tit">
                <span>成品库库位库存：{{ finishedgline.all }}</span>
                <span>实时库存量：{{ finishedgline.dayconsume }}</span>
              </div>

              <ChartLine
                :title="'成品库历史库存量'"
                :tittop="'12%'"
                :grid="linegrid"
                :data="finishedgline.data"
                :xdata="finishedgline.xdata"
              />
            </div>
            <div class="half_box_def">
              <Chartrose :title="'成品库有单无单百分比'" :data="finishedgrose.data" />
            </div>
          </div>
        </div>
        <div class="first_half_box">
          <div class="box_tit">中宽带</div>

          <div class="box_content">
            <div class="half_box_def">
              <div class="def_tit">
                <span>当日累计消耗量：{{ Mediumbroadband.dayconsume }}</span>
                <span>库存总量：{{ Mediumbroadband.all }}</span>
              </div>
              <ChartLine
                :title="'坯料库历史库存量'"
                :tittop="'12%'"
                :grid="linegrid"
                :data="Mediumbroadband.data"
                :xdata="Mediumbroadband.xdata"
              />
            </div>
            <div class="half_box_def">
              <div class="tab">
                <div
                  class="tab_item"
                  :class="{ chose: feed == index }"
                  v-for="(item, index) in timetype"
                  :key="index"
                  @click="Tofeed(item, index)"
                >
                  {{ item.name }}
                </div>
              </div>

              <ChartBar :title="'棒材坯料库'" :seriesData="Mediumbroadbandbar.data" :xdata="Mediumbroadbandbar.xdata" />
            </div>
            <div class="half_box_def">
              <div class="def_tit">
                <span>成品库库位库存：{{ finishedmline.all }}</span>
                <span>实时库存量：{{ finishedmline.dayconsume }}</span>
              </div>
              <ChartLine
                :title="'坯料库历史库存量'"
                :tittop="'12%'"
                :grid="linegrid"
                :data="finishedmline.data"
                :xdata="finishedmline.xdata"
              />
            </div>
            <div class="half_box_def">
              <Chartrose :title="'成品库有单无单百分比'" :data="finishedmrose.data" />
            </div>
          </div>
        </div>
      </div>
      <div class="second_half">
        <div class="second_l">
          <div class="box_tit">棒材总览</div>
          <div class="second_content">
            <div class="bartitle">
              <div>实时库存总量：213.34</div>
              <div>当日累计消耗量：122</div>
              <div class="boxt">钢坯坯料库各产线库存量</div>
            </div>
            <div class="bar">
              <LandscapeBar />
            </div>
          </div>
        </div>
        <div class="second_r">
          <div class="secondr_content">
            <div class="content_item">
              <div class="two_item">
                <div class="box_tit">棒材坯料库</div>
                <div class="btm_content">
                  <ChartBar :seriesData="storeroom" :legend="true" />
                </div>
              </div>
              <div class="two_item">
                <div class="box_tit"></div>
                <div class="btm_content">
                  <ChartLine :legend="true" />
                </div>
              </div>
            </div>
            <div class="content_item">
              <div class="two_item">
                <div class="box_tit a1">1号棒材成品库</div>
                <div class="btm_content">
                  <ChartBar />
                </div>
              </div>
              <div class="two_item">
                <div class="box_tit a1">2号棒材成品库</div>
                <div class="btm_content">
                  <ChartBar />
                </div>
              </div>
              <div class="two_item">
                <div class="box_tit a1">3号棒材成品库</div>
                <div class="btm_content">
                  <ChartBar />
                </div>
              </div>
              <div class="two_item">
                <div class="box_tit a1">4号棒材成品库</div>
                <div class="btm_content">
                  <ChartBar />
                </div>
              </div>
              <div class="two_item">
                <div class="box_tit a1">5号棒材成品库</div>
                <div class="btm_content">
                  <ChartBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartLine from '@/components/Mycharts/ChartLine.vue'
import ChartPie from '@/components/Mycharts/ChartPie.vue'
import ChartBar from '@/components/Mycharts/ChartBar.vue'
import LandscapeBar from '@/components/Mycharts/landscapeBar.vue'
import Chartrose from '@/components/Mycharts/Chartrose.vue'
import { toRefs, reactive } from 'vue'
import {
  ProdYardOrderAPI,
  ProdYardAPI,
  StockPieAPI,
  StockLineAPI,
  daydataAPI,
  SlabYardAPI,
  SlabYardBarAPI
} from '@/api/https.js'

export default {
  setup() {
    let state = reactive({
      linegrid: {
        top: '30% ',
        left: '2%',
        right: '5%',
        bottom: '3%'
      },
      ylgdata: [],
      goodsteeldata: [],
      ylglinedata: [],
      goodsteellinedata: [],
      steeldaydata: {},
      altitudeline: {},
      Mediumbroadband: {},
      finishedgline: {},
      finishedmline: {},
      altitudebar: {},
      Mediumbroadbandbar: {},
      finishedgrose: {},
      finishedmrose: {},
      datetype: [
        { name: '日', type: 1 },
        { name: '月', type: 2 },
        { name: '年', type: 3 }
      ],
      timetype: [
        { name: '近七日', type: 1 },
        { name: '近六个月', type: 2 }
      ],
      direction: [
        { name: '棒线', type: 1 },
        { name: '高线', type: 2 },
        { name: '中宽带', type: 3 }
      ],
      steel: 0,
      excellent: 0,
      feed: 0,
      heightline: 0,
      direction_top: 0,
      direction_btm: 0,
      storeroom: [
        {
          name: '示例',
          data: [15, 51, 8, 46, 15, 51, 8, 46, 15, 51]
        },
        {
          name: '系列2',
          data: [65, 45, 24, 48, 65, 45, 24, 48, 65, 45]
        },
        {
          name: '系列3',
          data: [18, 4, 60, 6, 18, 4, 60, 6, 18, 4]
        }
      ]
    })
    let methods = {
      // 炼钢库存去向
      async Tosteel(index, item) {
        state.steel = index
        methods.StockLine({ type: item.type, source: 1 }, 'y')
      },
      // 优特钢炼钢库存去向
      Toexcellent(item, index) {
        state.excellent = index
        methods.StockLine({ type: item.type, source: 2 }, 'good')
      },
      Tofeed(item, index) {
        state.feed = index
        methods.SlabYardBar({ type: 2, time: item.type == 1 ? 'week' : 'month' })
      },
      Toheightline(item, index) {
        state.heightline = index
        methods.SlabYardBar({ type: 1, time: item.type == 1 ? 'week' : 'month' })
      },
      Todirectionbtm(item, index) {
        state.direction_btm = index
        methods.StockPie({ type: item.type, source: 2 }, 'good')
      },
      Todirectiontop(item, index) {
        state.direction_top = index
        methods.StockPie({ type: item.type, source: 1 })
      },
      async StockPie(v, g) {
        let res = await StockPieAPI({ type: v ? v.type : 1, source: v ? v.source : 1 })
        if (g == 'good') {
          state.goodsteeldata = res.data.data
        } else {
          state.ylgdata = res.data.data
        }
      },
      async StockLine(v, g) {
        let res = await StockLineAPI({ type: v ? v.type : 1, source: v ? v.source : 1 })
        if (g == 'good') {
          state.goodsteellinedata = res.data
        } else {
          state.ylglinedata = res.data
        }
      },
      async daydata() {
        let res = await daydataAPI()
        state.steeldaydata = res.data
      },
      // 高线-中宽带坯料库历史库存折线图
      async SlabYard(v) {
        let res = await SlabYardAPI(v)
        if (v == 1) {
          // 高线坯料库历史库存
          state.altitudeline = res.data
        } else {
          // 中宽带坯料库历史库存
          state.Mediumbroadband = res.data
        }
      },
      // 高线-中宽带坯料库历史库存柱状图
      async SlabYardBar(v) {
        let res = await SlabYardBarAPI(v)
        if (v.type == 1) {
          state.altitudebar = res.data
        } else {
          // 中宽带坯料库历史库存
          state.Mediumbroadbandbar = res.data
        }
      },
      // 高线-中宽带成品库历史库存折线图
      async ProdYard(v) {
        let res = await ProdYardAPI(v)
        if (v == 1) {
          // 高线坯料库历史库存
          state.finishedgline = res.data
        } else {
          // 中宽带坯料库历史库存
          state.finishedmline = res.data
        }
      },
      // 高线-中宽带 --- 成品库有单无单玫瑰饼图
      async ProdYardOrder(v) {
        let res = await ProdYardOrderAPI(v)
        console.log(res, 'res')
        if (v == 1) {
          // 高线坯料库历史库存
          state.finishedgrose = res.data
        } else {
          // 中宽带坯料库历史库存
          state.finishedmrose = res.data
        }
      }
    }
    methods.StockPie()
    methods.StockPie({ type: 1, source: 2 }, 'good')
    methods.StockLine()
    methods.StockLine({ type: 1, source: 2 }, 'good')
    methods.daydata()
    methods.SlabYard(1)
    methods.SlabYard(2)
    methods.SlabYardBar({ type: 1, time: 'week' })
    methods.SlabYardBar({ type: 2, time: 'week' })
    methods.ProdYard(1)
    methods.ProdYard(2)
    methods.ProdYardOrder(1)
    methods.ProdYardOrder(2)
    return { ...toRefs(state), ...methods }
  },
  components: {
    Chartrose,
    ChartLine,
    ChartPie,
    ChartBar,
    LandscapeBar
  }
}
</script>

<style lang="scss" scoped>
.chose {
  background: url('~@/assets/img/chose_btn.png') no-repeat !important;
  background-size: 100% 100% !important;
  color: #fff !important;
}
.repertory {
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
    height: 90.5%;
    position: relative;
  }
  .first_half {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .first_half_box {
      height: 100%;
      flex: 1;
      margin: 0 0.3%;
      display: flex;
      flex-wrap: wrap;
      background: url('~@/assets/img/w_bgc.png') no-repeat;
      background-size: 100% 100%;
      .box_tit {
        width: 100%;
        height: 10%;
        // border: 1px solid red;
        background: url('~@/assets/img/255.png') no-repeat;
        background-size: 100% 100%;
        color: aliceblue;
        padding-left: 5.5%;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 0.1rem;
        letter-spacing: 2px;
      }
      .box_content {
        width: 100%;
        height: 90%;
        display: flex;
        flex-wrap: wrap;
      }
      .half_box_def {
        width: 50%;
        height: 50%;
        position: relative;
        .tab {
          width: 45%;
          height: 10%;
          position: absolute;
          right: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          .tab_item {
            cursor: pointer;
            z-index: 9;
            width: 48%;
            height: 100%;
            background: url('~@/assets/img/def_btn.png') no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #35cdd88f;
            font-size: 0.05rem;
            &:hover {
              background: url('~@/assets/img/chose_btn.png') no-repeat;
              background-size: 100% 100%;
              color: #fff;
            }
          }
        }
        .def_tit {
          position: absolute;
          width: 100%;
          height: 11%;
          top: 0;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-weight: 700;
          font-size: 0.06rem;
        }
      }
    }
    .one {
      width: 100%;
      height: 100% !important;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;

      .half_box_item {
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        .box_tit {
          width: 100%;
          height: 15%;
          background: url('~@/assets/img/small.png') no-repeat;
          background-size: 100% 100%;
          color: aliceblue;
          padding-left: 10%;
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 0.1rem;
          letter-spacing: 2px;
        }
        .day {
          padding-top: 1%;
          color: #fff;
          height: 10%;
          display: flex;
          align-items: center;
          position: absolute;
          right: 2%;
          font-size: 0.06rem;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .st_content {
          width: 100%;
          height: 85%;
          display: flex;
        }
        .left {
          width: 40%;
          height: 100%;
          position: relative;
          .left_btn {
            position: absolute;
            height: 12%;
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            z-index: 9;
            .direction {
              color: #35cdd88f;
              font-size: 0.05rem;
              flex: 1;
              height: 100%;
              margin: 0 1%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: url('~@/assets/img/def_btn.png') no-repeat;
              background-size: 100% 100%;
              cursor: pointer;

              &:hover {
                background: url('~@/assets/img/chose_btn.png') no-repeat;
                background-size: 100% 100%;
                color: #fff;
              }
            }
          }
        }
        .right {
          width: 60%;
          height: 100%;
          position: relative;
          .btn {
            margin-top: 0.5%;
            position: absolute;
            top: 0;
            width: 55%;
            right: 0;
            height: 10%;
            display: flex;
            justify-content: space-around;
            cursor: pointer;
            z-index: 9;

            .btnitem {
              height: 100%;
              width: 33%;
              background: url('~@/assets/img/def_btn.png') no-repeat;
              background-size: 100% 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #35cdd88f;
              font-size: 0.05rem;

              &:hover {
                background: url('~@/assets/img/chose_btn.png') no-repeat;
                background-size: 100% 100%;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .second_half {
    width: 100%;
    height: 50%;
    display: flex;
    .box_tit {
      width: 100%;
      height: 10%;
      background: url('~@/assets/img/255.png') no-repeat;
      background-size: 100% 100%;
      color: #fff;
      display: flex;
      align-items: center;
      padding-left: 10%;
      font-weight: 700;
      font-size: 0.1rem;
      letter-spacing: 2px;
    }
    .second_l {
      height: 100%;
      width: 20%;
      background: url('~@/assets/img/w_bgc.png') no-repeat;
      background-size: 100% 100%;
      margin-right: 0.5%;
      .second_content {
        width: 100%;
        height: 90%;
        .bartitle {
          width: 100%;
          height: 20%;
          color: #fff;
          font-weight: 700;
          font-size: 0.07rem;
          margin: 1% 2%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .boxt {
            position: relative;
            left: 26%;
            top: 35%;
          }
        }

        .bar {
          width: 100%;
          height: 80%;
        }
      }
      .box_tit {
        width: 100%;
        height: 10%;
        background: url('~@/assets/img/small.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .second_r {
      height: 100%;
      width: 80%;
      .secondr_content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .content_item {
          width: 100%;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: url('~@/assets/img/w_bgc.png') no-repeat;
          background-size: 100% 100%;
          .two_item {
            height: 100%;
            flex: 1;
            margin: 0 0.3%;

            .btm_content {
              width: 100%;
              height: 80%;
            }

            .box_tit {
              width: 100%;
              height: 18%;
              background: url('~@/assets/img/255.png') no-repeat;
              background-size: 100% 100%;
              color: #fff;
              display: flex;
              align-items: center;
              padding-left: 5%;
              font-weight: 700;
              font-size: 0.1rem;
              letter-spacing: 2px;
            }

            .a1 {
              width: 100%;
              height: 18%;
              // border: 1px solid red;
              background: url('~@/assets/img/small.png') no-repeat;
              background-size: 100% 100%;
              padding-left: 10%;
            }
          }
        }
      }
    }
  }
}
</style>
