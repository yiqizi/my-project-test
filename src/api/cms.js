import request from '@/system/request'

//获取店铺加密参数
export function getShopEncrypt(data) {
  return request({
    target: 'SHOP-ENCRYPT-HANDLE-PROCESSOR',
    method: 'post',
    data,
    apiType: 'manager'
  })
}