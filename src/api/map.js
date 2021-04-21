import request from '@/system/request'

//  腾讯地图-逆地址解析
export function getGeocoder(data) {
  return request({
    target:'PUBLIC-TENCENT-MAP-GEO-CODER-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    noCid: true,
    data
  })
}
// 腾讯地图-地点搜索
export function getSearch(data) {
  return request({
    target:'PUBLIC-TENCENT-MAP-PLACE-SEARCH-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    noCid: true,
    data
  })
}

// 腾讯地图-地址解析
export function getGeocoderAddress(data) {
  return request({
    target:'PUBLIC-TENCENT-MAP-GEO-CODER-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    noCid: true,
    data
  })
}

// 通过code码查询省市区

export function getParentAreaCode(data) {
  return request({
    target:'PUBLIC-AREA-LIST-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    noCid: true,
    data
  })
}