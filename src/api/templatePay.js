// 模板支付
import request from '@/system/request'


// 获取支付链接
export function getOrcode(data) {
	return request({
		apiType: 'goodsOperate',
		method: 'post',
		target: 'PUBLIC-GET-QRCODE-PROCESSOR',
		data
	})
}

// 获取支付结果
export function getPayInfo(data) {
	return request({
		apiType: 'goodsOperate',
		method: 'post',
		target: 'PUBLIC-BILL-QUERY-PROCESSOR',
		data
	})
}
