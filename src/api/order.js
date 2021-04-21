import request from '@/system/request'

export function getStatusCount(data){
  return request({
    method: 'post',
    url: '/order/b/countStatus',
    data
  })
}
// 用户取消审核原因
export function cancelOrderReason(data){
  return request({
    method: 'post',
    url: '/order/b/cancel/reason',
    data
  })
}
// 审核用户取消订单
export function verifyOrder(data){
  return request({
    method: 'post',
    url: '/order/b/cancel/verify',
    data
  })
}
//获取订单改价详情
export function getPriceChangeDetail(data){
  return request({
    target: 'ORDER-PRICE-CHANGE-DETAIL-PROCESSOR',
    method: 'post',
    url: '/order/b/priceChangeDetail',
    data
  })
}

// 订单改价
export function changePrice(data){
  return request({
    target: 'ORDER-PRICE-CHANGE-PROCESSOR',
    method: 'post',
    url: '/order/b/priceChange',
    data
  })
}

// 订单导出所有可选字段
export function queryOrderExportAllField(data){
  return request({
    method: 'post',
    url: '/order/b/queryOrderExportAllField',
    data
  })
}

// 获取订单列表
export function fetchOrderList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PAGE-LIST-PROCESSOR',
    url: '/order/b/queryOrderList',
    data
  })
}

// 订单详情
export function fetchOrderDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-DETAIL-PROCESSOR',
    url: '/order/b/order/detail',
    data
  })
}

// 订单导出
export function exportOrders(data) {
  return request({
    apiType: 'order',
    method: 'post',
    timeout: 22000,
    target: 'ORDER-INFO-EXPORT-PROCESSOR',
    data
  })
}

// 订单发货列表 
export function orderSendPageList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SEND-PAGE-LIST-PROCESSOR',
    data
  })
}

// 售后单发货列表
export function SendPageList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-SEND-INFO-LIST-PROCESSOR',
    data,
    url: '/order/b/after/sale/send/pageList'
  })
}

// 订单确认收款
export function makeCollections(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-INFO-RECEIVE-MONEY-PROCESSOR',
    data,
    url: '/order/b/confirmReceiveAmount'
  })
}

// 订单关闭
export function orderClose(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-CLOSE-PROCESSOR',
    data,
    url: '/order/b/closeOrder'
  })
}

// 订单备注--商家备注
export function orderRemark(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SELLER-ADD-REMARK-PROCESSOR',
    data,
    url: '/order/b/sellerAddRemark'
  })
}

// 订单收货信息--商家修改
export function orderUpdateReceive(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-UPDATE-RECEIVED-PROCESSOR',
    data,
    url: '/order/b/updateReceivedInfo'
  })
}

// 修改收发货地址
export function updateReceiveAndSend(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-UPDATE-RECEIVED-PROCESSOR',
    data,
    url: '/order/b/updateReceivedInfo'
  })
}

// 订单改价
export function orderPriceChange(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PRICE-CHANGE-PROCESSOR',
    data
  })
}

// 评论列表查询（分页）
export function getCommentList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PRODUCT-COMMENT-PAGE-LIST-PROCESSOR',
    data,
    url: ''
  })
}

// 查看评论详情
export function getCommentInfo(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PRODUCT-COMMENT-INFO-PROCESSOR',
    data
  })
}

// 回复 / 批量回复
export function replyComment(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PRODUCT-COMMENT-REPLYP-ROCESSOR',
    data
  })
}

// 设为/取消精选
export function setChoiceness(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PRODUCT-COMMENT-CHOICENESS-PROCESSOR',
    data
  })
}

// 审核 / 批量审核
export function orderCommentAuth(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PRODUCT-COMMENT-AUTH-PROCESSOR',
    data
  })
}

//  商家自定义敏感词列表查询
export function getSensitiveWordList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'SENSITIVE-WORD-LIST-PROCESSOR',
    data
  })
}

//  商家自定义敏感词删除
export function deleteSensitiveWord(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'SENSITIVE-WORD-DELETE-PROCESSOR',
    data
  })
}

//  商家自定义敏感词添加
export function addSensitiveWord(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'SENSITIVE-WORD-ADD-PROCESSOR',
    data
  })
}

//  售后单列表
export function getOrderAfterSalePageList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-PAGE-LIST-PROCESSOR',
    data,
    url: '/order/b/after/sale/pageList'
  })
}

//  售后单详情
export function getOrderAfterSaleDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-INFO-PROCESSOR',
    data,
    url: '/order/b/after/sale/detail'
  })
}

// 换货确认
export function orderAfterSaleConfirmExchange(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-CONFIRM-EXCHANGE-PROCESSOR',
    data
  })
}

//  审核/批量审核
export function orderAfterSaleUpdateStatus(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-UPDATE-STATUS-PROCESSOR',
    data,
    url: '/order/b/after/sale/verify'
  })
}

//  导出
export function orderAfterSaleExport(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTERSALE-EXPORT-EXCEL-PROCESS',
    data,
    url: '/order/b/after/sale/export'
  })
}

// //  换货确认
// export function orderAfterConfirmExchange(data) {
//   return request({
//     apiType: 'order',
//     method: 'post',
//     target: 'ORDER-AFTER-SALE-CONFIRM-EXCHANGE-PROCESSOR',
//     data
//   })
// }

//  订单支付信息
export function getOrderPayRecordList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PAY-RECORD-LIST-PROCESSOR',
    data
  })
}

//  订单发货 
export function orderSendGoods(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SENDINFO-BATCHV-PROCESS',
    url:'/order/b/batch/delivery',
    data
  })
}

// 批量发货
export function orderSendGoodsMore(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SENDINFO-BATCHV-PROCESS',
    url:'/order/b/page/batch/delivery',
    data
  })
}

//  获取快递公司
export function fetchExpressCompanyList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'EXPRESS-COMPANY-LIST-PROCESSOR',
    data
  })
}

//  打印电子面单--获取电子面单详情
export function getElectronicFaceSheetsDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'EXPRESS-ELECTRONIC-SHEET-DETAIL-PROCESS',
    url:'/order/b/express/electronic/detail/list',
    data
  })
}

//  获取电子面单列表
export function fetchElectronicFaceSheetList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    // target: 'EXPRESS-ELECTRONIC-SHEET-PAGELIST-PROCESSOR',
    target:'EXPRESS-ELECTRONIC-SHEET-PAGE-PROCESS',
    url:'/order/b/express/electronic/page',
    data
  })
}

//  查看电子面单
export function getElectronicFaceSheetDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'EXPRESS-ELECTRONIC-SHEET-DETAIL-PROCESS',
    url:'/order/b/express/electronic/detail',
    data
  })
}

//  新增电子面单
export function addElectronicFaceSheet(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'EXPRESS-ELECTRONIC-SHEET-ADD-PROCESS',
    url:'/order/b/express/electronic/add',
    data
  })
}

//  修改电子面单
export function editorElectronicFaceSheet(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'EXPRESS-ELECTRONIC-SHEET-UPDATE-PROCESS',
    url:'/order/b/express/electronic/update',
    data
  })
}

//  删除电子面单
export function deleteElectronicFaceSheet(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'DEXPRESS-ELECTRONIC-SHEET-DELETE-PROCESS',
    url:'/order/b/express/electronic/delete',
    data
  })
}

//  获取物流管理列表
export function fetchTemplatePageList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'FREIGHT-TEMPLATE-PAGE-LIST-PROCESSOR',
    data
  })
}

//  物流模板详情查看
export function getTemplatePageDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'FREIGHT-TEMPLATE-DETAIL-PROCESSOR',
    data
  })
}

// 获取省市区
export function getArea(data) {
  return request({
    apiType: 'goodsOperate',
    method: 'post',
    target: 'PUBLIC-CITY-ALLLIST-PROCESSOR',
    data
  })
}

// 新建物流模板
export function addFreightTemplate(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'FREIGHT-TEMPLATE-ADD-PROCESSOR',
    data
  })
}

// 物流模板修改
export function editorFreightTemplate(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'FREIGHT-TEMPLATE-EDIT-PROCESSOR',
    data
  })
}

// 售后单列表
export function getOrderAfterSaleList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-PAGE-LIST-PROCESSOR',
    data,
    url: '/order/b/after/sale/pageList'
  })
}

// 打印配送单
export function orderSendInfoPrint(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SEND-INFO-PRINT-PROCESSOR',
    data,
    url: '/order/b/queryOrderSendInfoPrint'
  })
}

// 批量打印电子面单
export function printElectronicForm(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'EXPRESS-ELECTRONIC-TEMPLATE-LIST-PROCESSOR',
    data,
    url: '/order/b/expressElectronicList'
  })
}

// 售后单打印配送单
export function afterSalePrintSendInfo(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-BATCH-PRINT-DELIVERY-PROCESSOR',
    data,
    url: '/order/b/after/sale/send/batchDeliveryPrint'
  })
}

// 售后单打印电子面单
export function afterSalePrintElectronicForm(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-EXPRESS-ELE-TEMPLATE-LIST-PROCESSOR',
    data,
    url: '/order/b/after/sale/electronicSheetList'
  })
}

// 售后单批量发货
export function orderAfterSaleSend(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-BATCH-SEND-PROCESSOR',
    data,
    url : '/order/b/after/sale/send/batchSend'
  })
}

// 修改物流信息
export function upLogisticsInfo(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SEND-INFO-UPDATE-EXPRESS-PROCESSOR',
    data,
    url: '/order/b/update/express'
  })
}

// 修改物流信息
export function upAfterLogisticsInfo(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-SEND-UPDATE-EXPRESS-PROCESSOR',
    data,
    url: '/order/b/after/sale/send/updateExpress'
  })
}

// 系统(线上)退款
export function orderAfterSaleDrawback(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-REFUND-PROCESSOR',
    data,
    url: '/order/b/after/sale/refund'
  })
}
// 线下退款
export function orderAfterSaleDrawbackOffline(data){
  return request({
    method: 'post',
    data,
    url: '/order/b/after/sale/offlineRefund'
  })
}
// 售后发货详情列表
export function orderAfterSaleDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-SEND-INFO-DETIAL-LIST-PROCESSOR',
    data,
    url: '/order/b/after/sale/send/sendList'
  })
}

// 订单批量发货详情
export function orderSendDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SEND-LISTP-ROCESSOR',
    data,
    url:'/order/b/batch/info/list'
  })
}
// 订单批量发货详情
export function orderBatchSendDetail(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-PAGE-BATCH-INFO-LIST',
    data,
    url:'/order/b/page/batch/info/list'
  })
}



// 获取补填物流详情
export function orderSendInfoFillUpExpressPage(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SENDINFO-FILLUP-EXPRESS-PAGE-PROCESS',
    data
  })
}

// 单个/批量补填物流
export function orderSendInfoFillUpExpress(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDERSENDINFOBATCHPROCESS',
    data,
    url: '/order/b/batch/delivery'
  })
}

// 查询物流轨迹
export function orderLogistics(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-EXPRESSINFOTRACE-EXPRESSCODE-PROCESS',
    data,
    url: '/order/b/getOrderTracesByExpressNo'
  })
}

// 确认收货
export function orderConfirmReceived(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-CONFIRM-RECEIVED-PROCESSOR',
    data,
    url: '/order/b/after/sale/confirmReceiveGoods'
  })
}

// 批量导入订单发货
export function orderSendInfoImportBatchDelever(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-SENDINFO-IMPORT-BATCH-DELIVER-PROCESSOR',
    data,
    url: '/order/b/batch/import/deliver'
  })
}

// 批量导入订单发货
export function exportOrder(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-EXPORT-PROCESSOR',
    data,
    url: '/order/b/orderExport'
  })
}


// 批量导入售后发货
export function orderSendInfoImportAfterSaleBatchDelever(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-AFTER-SALE-IMPORT-BATCH-DELIVER-PROCESSOR',
    data,
    url: '/order/b/after/sale/send/importSend'
  })
}

//获取公告信息(装修首页显示)
export function getBuyNotice(data) {
  return request({
    target: 'APPORDER-BUY-BULLETIN-PROCESS',
    method: 'post',
    apiType: 'client',
    data
  })
} 

  //订单删除
  export function deleteOrder(data) {
    return request({
      target: 'ORDER-EDIT-PROCESSOR',
      method: 'post',
      apiType: 'order',
      data
    })
}

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

 //获取快递公司
 export function getElectronicFaceSheetExpressCompanyList(data) {
  return request({
    target: 'PUBLIC-EXPRESS-COMPANY-LIST-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    data
  })
}

//电子面单 获取快递公司
export function getExpressCompanyList(data) {
  return request({
    target: 'EXPRESS-ELECTRONIC-SHEET-DETAIL-PROCESS',
    url:'/order/b/express/electronic/list',
    method: 'post',
    apiType: 'order',
    data
  })
}

//电子面单 顺丰速运下获取业务类型
export function getExpressCompanyType(data) {
	return request({
		target: 'PUBLIC-EXPRESS-TYPE-INFO-PROCESSOR',
		method: 'post',
		apiType: 'goodsOperate',
		data
	})
}

 //快递鸟-详情
 export function getIsTrace(data) {
  return request({
    target: 'SHOP-KDNIAO-DETAIL-PROCESSOR',
    method: 'post',
    apiType: 'order',
    data
  })
}

 //订单发货-校验快递单号是否必填
 export function checkExpress(data) {
  return request({
    target: 'CHECK-EXPRESSNO-REQUIRED-PROCESSOR',
    method: 'post',
    apiType: 'order',
    data
  })
}

 //活动赠品
 export function getGain(data) {
  return request({
    url: `v1/b/order-after-sale/order-rewards/${data.gainId}`,
    method: 'get',
    baseURL: process.env.SALE_API
  })
}

//售后单修改退还积分、金额
export function editorScoreAmount(data) {
  return request({
    target: 'ORDER-AFTER-SALE-EDIT-SCORE-AMOUNT-PROCESSOR',
    method: 'post',
    apiType: 'order',
    data,
    url: '/order/b/after/sale/editScoreAmount'
  })
}

//获取配送时间自定义的时间段
export function getTimeSlot(data) {
  return request({
    target: 'ORDER-DELIVER-INFO-DETAIL-PROCESS',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//获取配送员列表
export function getDistributorList(data) {
  return request({
    target: 'MANAGER-API-143',
    method: 'post',
    apiType: 'manager',
    data
  })
}

// 小票打印机设置-详情  易其孜
export function getPrinterSetDetail(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-SHOP-PRINTER-DETAIL-PROCESSOR',
    data
  })
}

// 添加 小票打印机配置
export function savePrinterSetDetail(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-SHOP-PRINTER-NEW-ADD-PROCESSOR',
    data
  })
}

// 设置 小票打印机 自动打印
export function updatePrinterAutoPrint(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-SHOP-PRINTER-UPDATE-AUTO-PRINT-PROCESSOR',
    data
  })
}

// 小票配送单预览 易其孜
export function shopPrinterPreview(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-SHOP-PRINTER-PREVIEW-PROCESSOR',
    data
  })
}

// 小票配送单打印 易其孜
export function goPrinter(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-SHOP-PRINTER-PRINT-PROCESSOR',
    data
  })
}

// 易联云商户授权结果  lyc
export function sendYlyunResult(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-SHOP-PRINTER-ES-CALL-BACK-PROCESSOR',
    data
  })
}

// 连接打印机  lyc
export function connectPrinter(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-SHOP-PRINTER-CONNECT-PROCESSOR',
    data
  })
}


//查看电子面单快递规格
export function getExpressSpec(data) {
  return request({
    target: 'EXPRESS-ELECTRONIC-SIZE-PROCESSOR',
    method: 'post',
    apiType: 'goodsOperate',
    data
  })
}
// 测试验证自提码功能
export function confirmVerifySelfLiftCode(data) {
  return request({
    url:`/mkt-api/v1/b/app-verify-tool-info/confirmVerifyCode`,
    method: 'get',
    params:data,
    baseURL: process.env.DATA_API,
    verifyCode:1
  })
}

//自提点-详情
export function getPickInfo(data) {
  return request({
    target: 'PICKUPINFO-FIND-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//地址库默认退货地址查询
export function getShopAddress(data) {
  return request({
    target: 'SHOP-ADDRESS-DEFAULT-RETURN-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//地址库默认发货地址查询
export function getShopSendAddress(data) {
  return request({
    target: 'SHOP-ADDRESS-DEFAULT-SENDER-PROCESSOR',
    method: 'post',
    apiType: 'manager',
    data
  })
}

//更新电子面单
export function editorExpressSize(data) {
  return request({
    target: 'EDIT-EXPRESS-ELECTRONIC-SHEET-PROCESSOR',
    method: 'post',
    apiType: 'order',
    data
  })
}
//查看第三方配送时骑手轨迹 ORDER-EXPRESS-INFO-LIST-PROCESSOR
export function getDistributorTrack(data) {
  return request({
    target: 'ORDER-DISTRIBUTION-INFO-LIST-PROCESSOR',
    method: 'post',
    apiType: 'order',
    url: '/order/b/distributionInfoList',
    data
  })
}
//第三方订单发货
export function sendGoods3(data) {
  return request({
    target: 'ORDER-SENDINFO-BATCHV2-PROCESS',
    method: 'post',
    apiType: 'order',
    data,
    sendGoods3: true,
    url: '/order/b/batch/delivery'
  })
}
//重新发单
export function reOrder(data) {
  return request({
    target: 'REISSUE-ORDER0SENDINFO-PROCESS',
    method: 'post',
    apiType: 'order',
    data,
    url: '/order/b/reissueOrderSendInfo'
  })
}
//商家配送情况下-确认送达
export function sellerComfirmDelivery(data) {
  return request({
    apiType: 'order',
    method: 'post',
    target: 'ORDER-CONFIRM-DELIVERY-PROCESSOR',
    data,
    url: '/order/b/confirm/delivery'
  })
}
//批量导入发货-任务列表
export function getImportTaskList(data) {
  return request({
    apiType: 'order',
    method: 'post',
    data,
    url: '/order/b/batch/import/task'
  })
}
// 订单导出- 查询导出字段
export function getExportFields(data){
  return request({
    apiType: 'order',
    method: 'post',
    data,
    url: '/order/b/queryOrderExportAllField'
  })
}