import request from '@/system/request'
const host = location.host;



    // 行业列表
export function getIndustry(data) {
    return request({
      url: `/news?dept=${process.env.BASE_DOMAIN}&cat=hangye&pagenum=3`,
      method: 'get',
      baseURL: process.env.ZX_API,
      data
    })
  }
export function getNews(data) {
  return request({
    url: `/news?dept=${process.env.BASE_DOMAIN}&cat=news&pagenum=3`,
    method: 'get',
    baseURL: process.env.ZX_API,
    data
  })
}
// 产品动态
export function getProductNews(data) {
  return request({
    url: `/news?dept=${process.env.BASE_DOMAIN}&cat=shushangdongtai&pagenum=6`,
    method: 'get',
    baseURL: process.env.ZX_API,
    data
  })
}

// 获取智能开店的进度步骤
export function getIntelligentProgress(data) {
  return request({
    target: 'DECORATION_SMART_STORE_OPEN_STEPS_FIND_PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}
// 获取行业列表
export function getIntelligentIndustry(data) {
  return request({
    target: 'PUBLIC-SMART-STORE-INDUSTRY-LIST-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    data
  })
}

// 获取预览步骤的店铺模板列表
export function getIntelligentPreViewTemplate(data) {
  return request({
    target: 'PUBLIC-SMART-STORE-TEMPLATE-FIND-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    data
  })
}

// 启用模板 / 再次加载
export function intelligentEnableTemplate(data) {
  return request({
    target: 'DECORATION_SMART_STORE_TEMPLATE_ENABLE_PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

// 数据配置实时查询进度的接口
export function intelligentConfigurationStatus(data) {
  return request({
    target: 'DECORATION_STORE_SYNCHRO_RECORD_FIND_PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

//获取小程序和公众号的绑定状态
export function getwxBindStatus (data) {
  return request({
    target: 'SHOP-API-WXBIND-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

// 保存当前步骤状态
export function intelligentUpdateStep (data = {}) {
  return request({
    target: 'DECORATION_SMART_STORE_OPEN_STEPS_UPDATE_PROCESSOR',
    method: 'post',
    apiType: 'decorate',
    data
  })
}

// 帮助中心
export function getHelpNews(data) {
  return request({
    url: `/info?dept=${process.env.BASE_DOMAIN}&cat=yidongshangcheng&pagenum=8`,
    method: 'get',
    baseURL: process.env.ZX_API,
    data
  })
}
// 获取签名列表 不分页
export function getSignatureList (params) {
  return request({
    url: `/v1/b/sms/signature/pagelist`,
    baseURL: process.env.SALE_API,
    method: 'get',
    params
  })
}

// //获取小程序和公众号的绑定状态
// export function getwxBindStatus (data) {
//   return request({
//     target: 'SHOP-API-WXBIND-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

// //获取小程序太阳码
// export function getSmallQRcode (data) {
//   return request({
//     target: 'SHOP-API-APPMAURL-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

//判断小程序是否发布 
export function getSmallRelease (data) {
  return request({
    target: 'SHOP-GETAPP-STATUS-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

// //获取店铺列表
// export function getShopList (data) {
//   return request({
//     target: 'SHOP-API-115-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     noCid:'true',
//     data
//   })
// }

//获取实时最新店铺列表
export function getNewShopList (data) {
  return request({
    target: 'REFRESH-USERINFO-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
