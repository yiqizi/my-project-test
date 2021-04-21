import request from '@/system/request'


/********************************************************** 概况 js ******************************************************/
// 概况详情首页
export function overviewDetails(data) {
  return request({
    target: 'OVER-VIEW-PROCESSOR',
    method: 'post',
    apiType: 'data',
    data
  })
}
// 代办提醒 
export function overviewRemind(data) {
    return request({
      target: 'ORDER-REMIND-PROCESSOR',
      method: 'post',
      apiType: 'order',
      data,
      url: '/order/b/orderRemind'
    })
  }
//待办售罄
export function overviewSelling(data) {
    return request({
      target: 'PRODUCT-SELLING-CHIME-PROCESSOR',
      method: 'post',
      apiType: 'overview',
      data
    })
  }
// 营销活动
export function getMarketing(data) {
    return request({
      url: '/v1/b/app/my',
      method: 'get',
      baseURL: process.env.SALE_API,
      params:data
    })
}
   