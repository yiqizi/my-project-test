import request from '@/system/request'


/********************************************************** 数据 js ******************************************************/
/*
**访问分析
*/
//浏览量/访客量
export function flowAnalysis(data) {
  return request({
    url: `/v2/api/getPassengerFlowAnalysis/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//到店时段
export function uvhour(data) {
  return request({
    url: `/v2/api/getArrivalTime/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//访问次数
export function pvady(data) {
  return request({
    url: `/v2/api/getVisitsTimes/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//访问来源
export function channel(data) {
  return request({
    url: `/v2/api/getVisitSurce/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//平均停留时间
export function residetime(data) {
  return request({
    url: `/v2/api/getAverageResidenceTime/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//跳出率
export function bouncerate(data) {
  return request({
    url: `/v2/api/getBounceRate/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//路径转化
export function transformation(data) {
  return request({
    url: `/v2/api/getPathConversion/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
/*
**客户分析
*/
//身份属性-属性比例
export function attributeRatio(data) {
  return request({
    url: `/v2/api/getIdentityAttributes/${data.cid}?source=${data.source}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//身份属性-会员趋势 
export function memberTrend(data) {
  return request({
    url: `/v2/api/getMembershipGrowthTrend/${data.cid}?nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//身份属性-支付趋势
export function paymentTrend(data) {
  return request({
    url: `/v2/api/getPaymentTrends/${data.cid}?nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//会员消费
export function memberConsumption(data) {
  return request({
    url: `/v2/api/getMemberConsumption/${data.cid}?memberPhone=${data.memberPhone}&minMoney=${data.minMoney}&maxMoney=${data.maxMoney}&minOrder=${data.minOrder}&maxOrder=${data.maxOrder}&startIndex=${data.startIndex}&pageSize=${data.pageSize}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
/*
**交易分析
*/
// 商品交易-商品总况 
export function generalCondition(data) {
  return request({
    url: `/v2/api/getTradingGoods/${data.cid}?channel=${data.channel}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 商品交易-热销商品  
export function hotGoods(data) {
  return request({
    url: `/v2/api/getBestSellersTop5/${data.cid}?channel=${data.channel}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 商品交易-商品详情 
export function productDetails(data) {
  return request({
    url: `/v2/api/getProductDetailsList/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}&startIndex=${data.startIndex}&pageSize=${data.pageSize}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//店铺交易
export function tradingTrend(data) {
  return request({
    url: `/v2/api/transactionOverview/${data.cid}?channel=${data.channel}&nearDay=${data.nearDay}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 店铺交易-交易趋势图 
export function tradingTrendchart(data) {
    return request({
      target:'SHOP-TRADING-TREND-ANALYSIS-DATA-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 店铺交易-交易概况 
export function tradingOverview(data) {
    return request({
      target:'SHOP-TRADING-SURVEYVIEW-DATA-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
/**************************************************************智能运营分析********************************************************/
/*
**客单价
 */  
// 实时概况
export function realTimeOverview(data) {
  return request({
    url: `/v2/api/getCustomerPriceOverview/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 历史记录
export function historyRecord(data) {
  return request({
    url: `/v2/api/getCustomerPriceDetail/${data.cid}?timeType=${data.timeType}&dataType=${data.dataType}&startIndex=${data.startIndex}&pageSize=${data.pageSize}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 历史记录导出
export function historyExport(data) {
    return request({
      target:'HISTORY-AUTOMATIC-ANALYSE-PAYMENT-EXPORT-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
/*
**会员分析
 */  
// 会员信息 
export function memberInformation(data) {
  return request({
    url: `/v2/api/getUserInfoList/${data.cid}?timeType=${data.timeType}&startIndex=${data.startIndex}&pageSize=${data.pageSize}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 积分消耗 
export function integralconsumption(data) {
  return request({
    url: `/v2/api/getPointsConsumption/${data.cid}?timeType=${data.timeType}&startIndex=${data.startIndex}&pageSize=${data.pageSize}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 积分消耗导出 
export function integralConsumptionExport(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-SCORE-PAYMENT-EXPORT-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 会员信息导出 
export function memberInformationExport(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-MEMBER-INFO-EXPORT-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 渠道转化 
export function channelConversion(data) {
  return request({
    url: `/v2/api/getChannelConversion/${data.cid}?timeType=${data.timeType}&activeName=${data.activeName}&startIndex=${data.startIndex}&pageSize=${data.pageSize}&channel=${data.channel}&changeRatioRange=${data.changeRatioRange}&orderBy=${data.orderBy}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 渠道转化导出 
export function channelConversionExport(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-MEMBER-CHANNEL-EXPORT-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 渠道查询 
export function channelQuery(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-MEMBER-CHANNEL-INFO-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 渠道转化详细信息 
export function channelConversionDetails(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-MEMBER-CHANNEL-DETAIL-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 渠道转化详细信息导出 
export function channelConversionDetailsExport(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-MEMBER-CHANNEL-DETAIL-EXPORT',
      method: 'post',
      apiType: 'data',
      data
    })
  }
/*
** 口碑分析
 */  
// 评价 
export function evaluation(data) {
  return request({
    url: `/v2/api/getEvaluationAnalysisList/${data.cid}?timeType=${data.timeType}&startIndex=${data.startIndex}&pageSize=${data.pageSize}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 评价导出 
export function evaluationExport(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-APPRAISE-EXPORT-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 维权导出 
export function exportOfrights(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-PROTECTION-EXPORT-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 维权 
export function rightsProtection(data) {
  return request({
    url: `/v2/api/getRightsProtectionList/${data.cid}?timeType=${data.timeType}&startIndex=${data.startIndex}&pageSize=${data.pageSize}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
// 获取维权原因
export function getReasons(data) {
  return request({
    target:'AUTOMATIC-ANALYSE-PROTECTION-REASON-PROCESSOR',
    method: 'post',
    apiType: 'data',
    data
  })
}

// 维权类型查询 
export function rightsTypeQuery(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-PROTECTION-TYPE-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
  }
// 维权原因查询  
export function ownershipReasonQuery(data) {
    return request({
      target:'AUTOMATIC-ANALYSE-PROTECTION-REASON-PROCESSOR',
      method: 'post',
      apiType: 'data',
      data
    })
 }
//获取会员和口碑的过滤数据
export function memberInforNum(data) {
  return request({
    target:'FILTER-SET-DATA-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/*
** 是否开通pc wap
*/ 
export function openPcWap(data) {
  return request({
    target:'TC-PCWAP-APPLY-INFO-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

