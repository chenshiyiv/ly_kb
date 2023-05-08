import request from '@/until/request.js';
// 一炼钢优特钢 炼钢库存去向饼图
export function StockPieAPI(v) {
  return request({
    method: 'get',
    url: `PMBoard/StockPieChartFS`,
    params: { type: v.type, source: v.source }
  })
}
// 一炼钢优特钢 炼钢库存去向折线图
export function StockLineAPI(v) {
  return request({
    method: 'get',
    url: `PMBoard/StockLineChartFS`,
    params: { type: v.type, source: v.source }
  })
}
// 当日累计产量
export function daydataAPI() {
  return request({
    method: 'get',
    url: `PMBoard/ProdDailyChart`,
  })
}
// 高线-中宽带 --- 胚料库折线数据
export function SlabYardAPI(v) {
  return request({
    method: 'get',
    url: `PMBoard/H1W1SlabYard`, params: { type: v }
  })
}

// 高线-中宽带 --- 成品库折线数据
export function ProdYardAPI(v) {
  return request({
    method: 'get',
    url: `PMBoard/H1W1ProdYard`, params: { type: v }
  })
}



// 高线-中宽带 --- 胚料库柱状图数据
export function SlabYardBarAPI(v) {
  return request({
    method: 'get',
    url: `PMBoard/H1W1SlabYardBar`, params: { type: v.type, time: v.time }
  })
}
// 高线-中宽带 --- 成品库玫瑰图
export function ProdYardOrderAPI(v) {
  return request({
    method: 'get',
    url: 'PMBoard/H1W1ProdYardOrder',
    params: { type: v }
  })
}
// 棒材总览横柱图
export function BOverviewAPI() {
  return request({
    method: 'get',
    url: `PMBoard/BOverview`
  })
}
// 棒材试试库存量
export function BYardOverviewAPI() {
  return request({
    method: 'get',
    url: `PMBoard/BYardOverview`
  })
}

// 棒材总览
export function PMBOverviewAPI() {
  return request({
    method: 'get',
    url: `PMBoard/BOverview`
  })
}
// 棒材总览
export function pmBYardOverviewAPI() {
  return request({
    method: 'get',
    url: `PMBoard/BYardOverview`
  })
}
// 棒材坯料柱状图
export function BSlabYardBarAPI() {
  return request({
    method: 'get',
    url: `PMBoard/BSlabYardBar`
  })
}
// 棒材坯料折线图

export function BSlabYardLineAPI() {
  return request({
    method: 'get',
    url: `PMBoard/BSlabYardLine`
  })
}
// dimen  棒材成品库-ok
export function BProdYardBarAPI(v) {
  return request({
    method: 'get',
    url: `PMBoard/BProdYardBar`, params: { type: v }
  })
}


// 轧钢质量看板

// 加热炉生产跟踪进度
export function HFProd1API() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/HFProd1`
  })
}
export function HFProd2API() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/HFProd2`
  })
}
export function HFProd3API() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/HFProd3`
  })
}
// 当前班组生产指标分析
export function MillProdDataAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/MillProdData`
  })
}
// 加热炉入炉温度跟踪
export function HFDataAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/HFData`
  })
}
// 加热炉加热时长跟踪
export function HFData3API() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/HFData3`
  })
}
// 扎线轧制温度跟踪
export function HFData4API() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/HFData4`
  })
}
// 质量异议缺陷类型分布
export function Mill_qualityAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/Mill_quality`
  })
}
// 温度命中率分析
export function Mill_hitrateAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/Mill_hitrate
    `
  })
}
// 成材率分析
export function Mill_yieldAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/Mill_yield`
  })
}

// 定尺率分析
export function Mill_fixlengthAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/Mill_fixlength`
  })
}
// 扎线生产跟踪进度
export function MillProdAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/MillProd
    `
  })
}

export function MillProd2API() {
  return request({
    method: 'get',
    url: `PMBoard/Mill/MillProd2
    `
  })
}

// 炉次生产进跟踪热力图
export function latest_prodAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Steel/latest_prod`
  })
}
// 生产炉次数量 和 告警数量
export function prod_heat_countAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Steel/prod_heat_count
    `
  })
}

// 冶炼节奏
export function SmeltingProcedureAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Steel/SmeltingProcedure`
  })
}

// 质量异议缺陷类型分布
export function QualityDefectAPI() {
  return request({
    method: 'get',
    url: `PMBoard/Steel/QualityDefect
    `
  })
}

// BOF出钢情况
export function BOF_outSteelAPI() {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/BOF_outSteel
    `
  })
}

// 过程成分跟踪
export function QCMTrackAPI(v) {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/QCMTrack`,
    params: { type: v }
  })
}
// 过程热度跟踪
export function SuperHeatAPI() {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/SuperHeat`,
  })
}
// 低倍缺陷TOP5
export function QBDefectTop5API() {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/QBDefectTop5
    `,
  })
}
// 窄成分命中率TOP5
export function narrow_componentAPI() {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/narrow_component`,
  })
}



// 窄成分命中率趋势
export function NarrowHitTrendAPI() {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/NarrowHitTrend

    `,
  })
}

// 低倍合格率趋势

export function QBQualityTrendAPI() {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/QBQualityTrend

    `,
  })
}

export function QBDistributionAPI() {
  return request({
    method: 'get',
    url: `/PMBoard/Steel/QBDistribution`,
  })
}



