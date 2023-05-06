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
