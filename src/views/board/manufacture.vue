<template>
  <!-- 生产看板 -->
  <div class="quality">
    <div class="tit">凌钢优特钢生产看板</div>
    <div class="manufacture">
      <div class="manufacture_item">
        <div class="mtop">
          <div class="box_tit">一炼钢</div>
          <div class="chart">
            <div class="onel">
              <div>炼钢当日</div>
              <div>s245454</div>
              <div>当月累计产量</div>
              <div>s245454</div>
              <div>月计划完成率</div>
              <div>123456</div>
              <div>转炉1#当日累计产量</div>
              <div>123456</div>
              <div>转炉4#当日累计产量</div>
              <div>123456</div>
            </div>
            <div class="oner">
              <div class="oner_item">
                <ChartLine />
              </div>
              <div class="oner_item">
                <el-table :data="tableData" style="width: 100%" height="120">
                  <el-table-column prop="date" label="日期" width="180"> </el-table-column>
                  <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                  <el-table-column prop="address" label="地址"> </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </div>
        <div class="mtop">
          <div class="box_tit"></div>
          <div class="chart">
            <div class="onel">
              <div>炼钢当日</div>
              <div>s245454</div>
              <div>当月累计产量</div>
              <div>s245454</div>
              <div>月计划完成率</div>
              <div>123456</div>
              <div>转炉1#当日累计产量</div>
              <div>123456</div>
              <div>转炉4#当日累计产量</div>
              <div>123456</div>
            </div>
            <div class="oner">
              <div class="oner_item">
                <ChartLine />
              </div>
              <div class="oner_item">
                <el-table :data="tableData" style="width: 100%" height="120">
                  <el-table-column prop="date" label="日期" width="180"> </el-table-column>
                  <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
                  <el-table-column prop="address" label="地址"> </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="manufacture_item">
        <div class="middle m1">
          <div class="box_tit"></div>
          <div class="chart">
            <div class="hitem">
              <div class="htit">
                <div>轧制当日： 124545</div>
                <div>当月累计产量： 124545</div>
              </div>
              <div class="hcont">
                <ChartLine />
              </div>
            </div>
            <div class="hitem">
              <div class="htit">
                <div>轧制当日： 124545</div>
                <div>当月累计产量： 124545</div>
              </div>
              <div class="hcont">
                <ChartLine />
              </div>
            </div>
          </div>
        </div>
        <div class="middle m2">
          <div class="box_tit">棒材总览</div>
          <div class="chart h_1">
            <div class="m_tit">
              <div>实时库存总量：213.13</div>
              <div>当日累计消耗量：213.13</div>
              <div>当日累计消耗量：213.13</div>
            </div>
            <div class="m_cont">
              <LandscapeBar />
            </div>
          </div>
        </div>
        <div class="middle m3">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartBar />
          </div>
        </div>
        <div class="middle m4">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartBar />
          </div>
        </div>
      </div>
      <div class="manufacture_item">
        <div class="mbtm b1">
          <div class="box_tit"></div>
          <div class="chart">
            <div class="hitem">
              <div class="htit">
                <div>轧制当日： 124545</div>
                <div>当月累计产量： 124545</div>
              </div>
              <div class="hcont">
                <ChartLine />
              </div>
            </div>
            <div class="hitem">
              <div class="htit">
                <div>轧制当日： 124545</div>
                <div>当月累计产量： 124545</div>
              </div>
              <div class="hcont">
                <ChartLine />
              </div>
            </div>
          </div>
        </div>
        <div class="mbtm b2">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine />
          </div>
        </div>
        <div class="mbtm b3">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine />
          </div>
        </div>
        <div class="mbtm b4">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine />
          </div>
        </div>
        <div class="mbtm b5">
          <div class="box_tit"></div>
          <div class="chart">
            <ChartLine />
          </div>
        </div>
        <div class="mbtm b6">
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
import ChartLine from '@/components/Mycharts/ChartLine.vue'
import ChartBar from '@/components/Mycharts/ChartBar.vue' // 柱状图
import LandscapeBar from '@/components/Mycharts/landscapeBar.vue' // 柱状图
export default {
  setup() {
    let state = reactive({
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    })
    let methods = {}
    return { ...toRefs(state), ...methods }
  },
  components: { ChartLine, ChartBar, LandscapeBar }
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
  .box_tit {
    height: 10%;
    width: 100%;
    background: url('~@/assets/img/255.png') no-repeat;
    background-size: 100% 100%;
    color: #fff;
    padding-left: 4%;
    display: flex;
    align-items: center;
    font-size: 0.1rem;
    font-weight: 700;
  }
  .chart {
    width: 100%;
    height: 90%;
    display: flex;
  }
  .hitem {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .htit {
      width: 100%;
      height: 25%;
      color: #fff;
      font-size: 0.08rem;
      font-weight: 700;
      padding-left: 10%;
      padding-top: 4%;
    }
    .hcont {
      width: 100%;
      height: 75%;
    }
  }
  .manufacture {
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .manufacture_item {
      width: 100%;
      flex: 1;
      margin: 0.3% 0;
      display: flex;

      .mtop {
        height: 100%;
        flex: 1;
        margin: 0 0.2%;
      }
      .mbtm {
        height: 100%;
        margin: 0 0.2%;
      }
      .middle {
        height: 100%;
        margin: 0 0.2%;
      }
      .m1 {
        width: 30%;
      }
      .m2 {
        width: 20%;
      }
      .m3 {
        width: 25%;
      }
      .m4 {
        width: 25%;
      }
      .b1 {
        width: 43%;
      }
      .b2 {
        width: 20%;
      }
      .b3 {
        width: 20%;
      }
      .b4 {
        width: 20%;
      }
      .b5 {
        width: 20%;
      }
      .b6 {
        width: 20%;
      }
    }

    .onel {
      width: 30%;
      height: 100%;
      color: #fff;
      font-size: 0.08rem;
      font-weight: 700;
      padding: 1%;
    }
    .oner {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .oner_item {
        flex: 1;
        width: 100%;
      }
    }
  }
}
.h_1 {
  display: flex;
  flex-direction: column;
}
.m_tit {
  width: 100%;
  height: 30%;
  color: #fff;
  font-weight: 700;
  font-size: 0.08rem;
  padding-left: 5%;
  padding-top: 1%;
}
.m_cont {
  width: 100%;
  height: 70%;
}
// =表格透明

::v-deep .el-table th {
  background-color: transparent !important;
  color: #fff;
  border-color: black !important;
  font-size: 0.05rem;
}
::v-deep .el-table tr {
  background-color: transparent !important;
  color: #fff;
  font-size: 0.05rem;
}
::v-deep .el-table--enable-row-transition .el-table__body td,
.el-table .cell {
  background-color: transparent;
  border-color: black !important;
}
::v-deep .el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
// 鼠标经过是的颜色
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #c8e1e74a !important;
}
::v-deep .el-table--enable-row-hover .el-table__body tr:nth-child(0):hover > td {
  background-color: transparent !important;
}
// 去除底部白线
::v-deep(.el-table__inner-wrapper::before) {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  z-index: 3;
}
</style>
