// 财务相关接口
import request from '@/system/request'

//推客奖励 ------
export function getListTa(data) {
    return request({
      url: '/v1/b/recordMarketingPresent/detail-list',
      method: 'get',
      baseURL: process.env.SALE_API,
      params:data
    })
}

export function exportTa(data) {
    return request({
      url: '/v1/b/recordMarketingPresent/export',
      method: 'get',
      baseURL: process.env.SALE_API,
      params:data
    })
}

export function statisticsTa(data) {
    return request({
      url: '/v1/b/recordMarketingPresent/statistics',
      method: 'get',
      baseURL: process.env.SALE_API,
      params:data
    })
}

//营收状况 ------
export function getSurveyDayRs(data) {
    return request({
      target: 'FINANCIAL-REVENUE-SUM-TODAY-PROCESSOR',
      method: 'post',
      apiType: 'finance',
      data
    })
}

export function getDataDateRs(data) {
    return request({
      target: 'FINANCIAL-REVENU-TIMESLOT-LIST-PROCESSOR',
      method: 'post',
      apiType: 'finance',
      data
    })
}

export function getDataNumRs(data) {
    return request({
      target: 'FINANCIAL-REVENUE-RECENT-LIST-PROCESSOR',
      method: 'post',
      apiType: 'finance',
      data
    })
}

//收支明细 -------
export function getListRe(data) {
    return request({
      target: 'FINANCIAL-TRADE-RECORD-PAGE-PROCESSOR',
      method: 'post',
      apiType: 'finance',
      data
    })
}

export function exportRe(data) {
    return request({
      target: 'FINANCIAL-TRADE-EXPORT-PROCESSOR',
      method: 'post',
      apiType: 'finance',
      data
    })
}

//每日营收 --------
export function getListDr(data) {
  return request({
    target: 'FINANCIAL-ACCOUNT-RECORD-PAGE-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

export function exportDr(data) {
  return request({
    target: 'FINANCIAL-ACCOUNT-EXPORT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//提现明细 --------
export function getListWd(data) {
  return request({
    target: 'FINANCIAL-CASHOUT-RECORD-PAGE-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}
export function getInfoWd(data) {
  return request({
    target: 'FINANCIAL-CASHOUT-DETAIL-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}
export function examineWd(data) {
  return request({
    target: 'FINANCIAL-CASHOUT-AUDIT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}
export function exportWd(data) {
  return request({
    target: 'FINANCIAL-CASHOUT-EXPORT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//客户ID余额 --------
export function getListCb(data) {
  return request({
    target: 'FINANCIAL-BALANCE-PAGELIST-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

export function exportCb(data) {
  return request({
    target: 'FINANCIAL-BALANCE-EXPORT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//积分明细 --------
export function getListId(data) {
  return request({
    target: 'FINANCIAL-INTEGRAL-PAGELIST-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

export function exportId(data) {
  return request({
    target: 'FINANCIAL-INTEGRAL-EXPORT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//物流对账 --------
export function getListFs(data) {
  return request({
    target: 'FINANCIAL-EXPRESS-PAGE-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//三方配送 --------
export function getListTd(data) {
  return request({
    target: 'THIRD-DELIVERY-RECORD-LIST-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//电子面单与物流查询导出
export function exportFs(data) {
  return request({
    target: 'FINANCIAL-EXPRESS-EXPORT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//三方配送导出
export function exportTd(data) {
  return request({
    target: 'THIRD-DELIVERY-RECORD-EXPORT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

//短信成本 ------
export function smsStatistics(data) {
  return request({
    url: '/v1/b/sms/statistics',
    method: 'get',
    baseURL: process.env.SALE_API,
    params:data
  })
}

export function smsPagelist(data) {
  return request({
    url: '/v1/b/sms/send-record/accept/pagelist',
    method: 'get',
    baseURL: process.env.SALE_API,
    params:data
  })
}

export function smsExport(data) {
  return request({
    url: '/v1/b/sms/send-record/accept/list/export',
    method: 'get',
    baseURL: process.env.SALE_API,
    params:data
  })
}
// 分销账目列表接口
export function getCommissionLIst(data) {
  return request({
    target: 'RESELLER-COMMISSION-PAGE-LIST-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}

// 分销账目导出接口
export function commissionExport(data) {
  return request({
    target: 'RESELLER-COMMISSION-EXPORT-PROCESSOR',
    method: 'post',
    apiType: 'finance',
    data
  })
}










