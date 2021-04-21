/* 公共api接口 */
import request from '@/system/request'

//保存积分通用规则
// export function saveCreditRule(data) {
//     return request({
//         target:'SHOP-API-102-PROCESSOR',
//         method: 'post',
//         apiType: 'manager',
//         data
//     })
// }
//查询积分通用规则
// export function checkCreditRule(data) {
//     return request({
//         target:'SHOP-API-100-PROCESSOR',
//         method: 'post',
//         apiType: 'manager',
//         data
//     })
// }

// //通过店铺查询获取普通快递、商家配送是否设置开启状态
// export function getExpressAndDeliverySet(data) {
//   return request({
//     target: 'SHOP-API-100-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

//  //修改发货地址
//  export function orderUpdateAddress(data) {
//   return request({
//     //token: '09255c7724fe9b8df952aa2f7e3ec718768b8ae62e74d1ef2214c0aead86a36b',
//     target: 'SHOP-API-102-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

//  //修改发货地址
//  export function fetchOrderAddress(data) {
//   return request({
//     target: 'SHOP-API-100-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

//获取小程序和公众号的绑定状态
export function getwxBindStatus (data) {
  return request({
    target: 'SHOP-API-WXBIND-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//获取小程序太阳码
export function getSmallQRcode (data) {
  return request({
    target: 'SHOP-API-APPMAURL-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//获取店铺列表
export function getShopList (data) {
  return request({
    target: 'SHOP-API-115-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    noCid:'true',
    data
  })
}

/* 获取店铺信息 */
export function getShopInfo(data) {     
  return request({
    target: 'SHOP-API-100-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 更新店铺信息 */
export function updateShopInfo(data) {     
  return request({
    target: 'SHOP-API-102-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 获取店铺消息列表 */
export function getShopMessage(data) {
  return request({
    target: 'SHOP-API-107-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 设置店铺消息列表 */
export function setShopMessage(data) {
  return request({
    target: 'SHOP-API-108-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 店铺授权分页列表 */
export function getAuthPageList(data) {
  return request({
    target: 'SHOP-API-AUTH-PAGE-LIST-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 获取店铺授权码 */
export function getShopCode(data) {
  return request({
    target: 'SHOP-API-GET-AUTH-CODE-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 解除店铺授权 */
export function cancelAuth(data) {
  return request({
    target: 'SHOP-API-AUTH-ENABLE-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 店铺授权平台列表 */
export function getShopAuthList(data) {
  return request({
    target: 'SHOP-API-AUTH-LIST-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

// //获取店铺信息
// export function getShopInfo(data) {
//   return request({
//     target: 'SHOP-API-100-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

// //改变店铺切换状态
// export function changeSwitchStatus(data) {
//   return request({
//     target: 'SHOP-API-102-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

//查询是否开通分销或者社区团购工具
export function checkOpenTools(data) {
    return request({
      url: `/appstore-api/v1/b/app/isbuy?ids=${data.ids}`,
      method: 'get',
      baseURL: process.env.DATA_API,
      timeout: data.timeout
    })
}