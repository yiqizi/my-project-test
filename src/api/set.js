import request from '@/system/request'

// /* 获取店铺信息 */
// export function getShopInfo(data) {
//   return request({
//     target: 'SHOP-API-100-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

// /* 更新店铺信息 */
// export function updateShopInfo(data) {
//   return request({
//     target: 'SHOP-API-102-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

/* 店铺支付信息 */
export function getShopPayInfo(data) {
  return request({
    target: 'PAYMENT-106-PROCESSOR',
    method: 'post',
    apiType: 'pay',
    data
  })
}

/* 添加店铺支付信息 */
export function addShopPayInfo(data) {
  return request({
    target: 'PAYMENT-104-PROCESSOR',
    method: 'post',
    apiType: 'pay',
    data
  })
}

/* 更新店铺支付信息 */
export function updateShopPayInfo(data) {
  return request({
    target: 'PAYMENT-105-PROCESSOR',
    method: 'post',
    apiType: 'pay',
    data
  })
}

/* 获取店铺交易物流信息 */
export function getShopLogistics(data) {
  return request({
    target: 'SHOP-KDNIAO-DETAIL-PROCESSOR',
    method: 'post',
    apiType: 'order',
    data
  })
}

/* 更新店铺交易物流信息 */
export function updateShopLogistics(data) {
  return request({
    target: 'SHOP-KDNIAO-ADD-PROCESSOR',
    method: 'post',
    apiType: 'order',
    data
  })
}

// /* 获取店铺消息列表 */
// export function getShopMessage(data) {
//   return request({
//     target: 'SHOP-API-107-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

// /* 设置店铺消息列表 */
// export function setShopMessage(data) {
//   return request({
//     target: 'SHOP-API-108-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

/* 获取子账号列表 */
export function getSubAccount(data) {
  return request({
    target: 'MANAGER-API-143',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 新建子账号 */
export function newSubAccount(data) {
  return request({
    target: 'MANAGER-API-144',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 编辑子账号 */
export function editSubAccount(data) {
  return request({
    target: 'MANAGER-API-145',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 删除子账号 */
export function deleteAccount(data) {
  return request({
    target: 'MANAGER-API-146',
    method: 'post',
    apiType: 'manager',
    data
  })
}


/* 获取角色列表 */
export function getRoleList(data) {
  return request({
    target: 'MANAGER-API-147',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 新建角色 */
export function newRole(data) {
  return request({
    target: 'MANAGER-API-148',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 删除角色 */
export function deleteRole(data) {
  return request({
    target: 'MANAGER-API-149',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 根据角色名称查询角色详情 */
export function getRoleInfo(data) {
  return request({
    target: 'MANAGER-API-151',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 上传图片 */
export function uploadImage(data) {
  return request({
    url: '',
    method: 'post',
    apiType: 'uploadImage',
    headers:{
      "Content-Type":'multipart/form-data'
    },
    data
  })
}

// /* 店铺授权分页列表 */
// export function getAuthPageList(data) {
//   return request({
//     target: 'SHOP-API-AUTH-PAGE-LIST-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

// /* 获取店铺授权码 */
// export function getShopCode(data) {
//   return request({
//     target: 'SHOP-API-GET-AUTH-CODE-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

// /* 解除店铺授权 */
// export function cancelAuth(data) {
//   return request({
//     target: 'SHOP-API-AUTH-ENABLE-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

// /* 店铺授权平台列表 */
// export function getShopAuthList(data) {
//   return request({
//     target: 'SHOP-API-AUTH-LIST-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }

/* 同城配送|商家配送信息详情 */
export function getOrderDeliverInfo(data) {
  return request({
    target: 'ORDER-DELIVER-INFO-DETAIL-PROCESS',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/* 订单同城配送|商家配送信息 设置 */
export function updateOrderDeliverInfo(data) {
  return request({
    target: 'ORDER-DELIVER-INFO-SAVE-PROCESS',
    method: 'post',
    apiType: 'manager',
    data
  })
}

// 获取地址列表
export function getAddressList(data) {
  return request({
    target: 'SHOP-ADDRESS-LIST-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 新增地址
export function addAddress(data) {
  return request({
    target: 'SHOP-ADDRESS-ADD-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 编辑地址
export function editAddressById(data) {
  return request({
    target: 'SHOP-ADDRESS-EDIT-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
//  地址库默认退货地址查询
export function getAddressDefaultReturn(data) {
  return request({
    target: 'SHOP-ADDRESS-DEFAULT-RETURN-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
//  地址库默认发货地址查询
export function getAddressDefaultSender(data) {
  return request({
    target: 'SHOP-ADDRESS-DEFAULT-SENDER-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 地址库详情查询
export function getAddressDetail(data) {
  return request({
    target: 'SHOP-ADDRESS-DETAIL-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 删除地址库通过id
export function delAddressById(data) {
  return request({
    target: 'SHOP-ADDRESS-DELETE-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 新建自提点
export function addSelfLift(data) {
  return request({
    target: 'PICKUPINFO-ADD-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 编辑自提点
export function editSelfLiftById(data) {
  return request({
    target: 'PICKUPINFO-UPDATE-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 通过id 获取自提点详情 
export function getSelfLiftById(data) {
  return request({
    target: 'PICKUPINFO-FIND-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
// 获取自提点列表
export function getSelfLiftList(data) {
  return request({
    target: 'PICKUPINFO-PAGE-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/*  达达-商户获取余额 */
export function getBalance(data) {
  return request({
    target: 'THIRD-PART-BALANCE-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
/*  达达-商户充值 */
export function getRecharge(data) {
  return request({
    target: 'THIRD-PART-RECHARGE-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

/*  三方-达达-注册商户 */
export function registerMerchants(data) {
  return request({
    target: 'THIRD-PART-MERCHANT-REGISTER-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
/*  三方-达达配送-注册门店 */
export function registerStore(data) {
  return request({
    target: 'THIRD-PART-ADD-SHOP-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
/*  三方-达达配送-更新门店 */
export function updateStore(data) {
  return request({
    target: 'THIRD-PART-UPDATE-SHOP-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
/*  三方-第三方配送列表 */
export function getTh3DeliverList(data) {
  return request({
    target: 'THIRD-PART-LIST-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
/*  获取全量省市区数据 */
export function getAddress(data) {
  return request({
    target: 'PUBLIC-CITY-ALLLIST-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
/*  三方-达达-注册详情 */
export function getTh3DeliverDetail(data) {
  return request({
    target: 'THIRD-PART-DETAIL-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}
/*  三方-达达--判断当前城市是否开通费配送 */
export function isDaDaCoveredArea(data) {
  return request({
    target: 'THIRD-PART-IS-OPEN-DELIVERY-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}