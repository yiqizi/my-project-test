import request from "@/system/request";

//  渠道会员转化指标接口
export function member(data) {
	return request({
    url: `/v1/api/channelMemberConversion/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//  接口名称: 商品交易来源top3
export function top3(data) {
	return request({
    url: `/v1/api/dealSourceTop3/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  用户渠道分布指标接口
export function userdistributed(data) {
	return request({
    url: `/v1/api/distributionOfUserChannels/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

// 总交易金额分布
export function totalamount(data) {
	return request({
    url: `/v1/api/distributionOftotalTransactionAmount/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

// 性别年龄分布
export function sexage(data) {
	return request({
    url: `/v1/api/genderAndAgeDistribution/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  商城访客(最近7天）
export function vistor(data) {
	return request({
    url: `/v1/api/last7DaysAccessNum/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//  商城浏览(最近7天)
export function mail(data) {
	return request({
    url: `/v1/api/last7DaysBrowseTheMall/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  下单转化漏斗(最近7天)
export function order(data) {
	return request({
    url: `/v1/api/last7DaysOrderConversionFunnel/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

// 支付金额(最近7天)
export function payamount(data) {
	return request({
    url: `/v1/api/last7DaysPayMoney/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

// 客单价（最近7天
export function price(data) {
	return request({
    url: `/v1/api/perCustomerTransaction/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  实时交易金额指标接口
export function realtimedealamount(data) {
	return request({
    url: `/v1/api/realTimeKpi/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}
//  实时交易用户
export function realdealuser(data) {
	return request({
    url: `/v1/api/realTimeUser/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  统计分析指标接口（ 统计指标，用户交易偏好，手机 号）
export function statistics(data) {
	return request({
    url: `/v1/api/statisticsKpi/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

//  用户交易分布
export function realTimeUser(data) {
	return request({
    url: `/v1/api/userTransactionAreaDistribution/${data.tenantId}/${data.cid}`,
    method: 'post',
    baseURL: process.env.DATUM_API,
    data
  })
}

