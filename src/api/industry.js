import request from '@/system/request'

// 有效行业列表
export function effIndustryList(data) {
	return request({
		target: 'PUBLIC-OMC-INDUSTRY-INFO-LIST-PROCESSOR',
		method: 'post',
		apiType: 'goodsOperate',
		data
	})
}
