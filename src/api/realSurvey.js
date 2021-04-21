import request from '@/system/request'

//  实时概况--数据总览
export function dataView(data) {
  return request({
    url: `/v1/api/dataOverview/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//  实时概况--交易看板
export function transactionView(data) {
  return request({
    url: `/v1/api/tradingKanban/${data.tenantId}/${data.cid}?units=${data.units}&date=${data.date}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//  实时概况--交易分布
export function tradeDistribution(data) {
  return request({
    url: `/v1/api/userTransactionAreaDistribution/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  实时概况--用户概览
export function userView(data) {
  return request({
    url: `/v1/api/userOverView/${data.tenantId}/${data.cid}/${data.channelType}?units=${data.units}&date=${data.date}&channelType=${data.channelType}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}  
//  实时概况--渠道转化
export function channelView(data) {
  return request({
    url: `/v1/api/ChannelInto/${data.tenantId}/${data.cid}/${data.channelType}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//  实时概况--商品看板
export function goodsView(data) {
  return request({
    url: `/v1/api/commodityKanban/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  实时概况--移动商城数据是否完成准备接口
export function dataReady(data) {
  return request({
    url: `/v1/api/dataTime/${data.tenantId}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
  