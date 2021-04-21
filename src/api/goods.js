import request from '@/system/request'

let token = '09255c7724fe9b8df952aa2f7e3ec7189f2a9d376c5ae50fc5676c5dd898ffa7'


// 获取标签列表
export function fetchTagsList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-LABEL-PAGE-LIST-PROCESSOR',
    data,
    token
  })
}

// 获取标签列表(不分页)
export function fetchAllTagsList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-LABEL-LIST-PROCESSOR',
    data,
    token
  })
}

// 添加标签
export function addTag(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-LABEL-NEW-PROCESSOR',
    data,
    token
  })
}

// 商品标签删除(批量删除)
export function deleteTag(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-LABEL-DELETE-PROCESSOR',
    data,
    token
  })
}

// 商品标签删除(批量删除)
export function enableTag(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-LABEL-ENABLE-PROCESSOR',
    data,
    token
  })
}


// 商品标签修改
export function editorTag(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-LABEL-UPDATE-PROCESSOR',
    data,
    token
  })
}

// 商品分类列表
export function fetchCategoryList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-LIST-PROCESSOR',
    data,
    token
  })
}

// 商品分类详情
export function getCategoryDetail(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-DETAIL-PROCESSOR',
    data,
    token
  })
}

// 商品分类添加
export function addCategory(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-NEW-PROCESSOR',
    data,
    token
  })
}

// 商品分类修改
export function editorCategory(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-EDIT-PROCESSOR',
    data,
    token
  })
}

// 商品分类删除
export function deleteCategory(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-DELETE-PROCESSOR',
    data,
    token
  })
}

// 商品分类启用或禁用
export function enableCategory(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-ENABLE-PROCESSOR',
    data,
    token
  })
}

// sku商品分页列表
export function fetchGoodsList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SKU-PAGE-LIST-PROCESSOR',
    data,
    token
  })
}


// sku商品分页列表(无分页)
export function fetchGoodsSKUList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SKU-LIST-PROCESSOR',
    data,
    token
  })
}

// 新增商品
export function addGoods(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-NEW-PROCESSOR',
    data,
    token
  })
}

// 获取商品详情
export function getGoodsDetail(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-DETAIL-PROCESSOR',
    data,
    token
  })
}

// 编辑商品
export function editorGoods(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-EDIT-PROCESSOR',
    data,
    token
  })
}

// 修改售价
export function changePrice(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CHANGE-PRICE-PROCESSOR',
    data,
    token
  })
}

// 单条修改库存
export function updateStock(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-UPDATE-STOCK-PROCESSOR',
    data,
    token
  })
}

// 商品上下架(批量)
export function upperOrLower(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-UPPER-OR-LOWER-PROCESSOR',
    data,
    token
  })
}

// 商品上下架(批量)Spu
export function upperOrLowerSpu(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-BATCH-UP-OR-LOWER-PROCESSOR',
    data,
    token
  })
}

// 商品删除(批量)
export function allDelete(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-DELETE-PROCESSOR',
    data,
    token
  })
}

// 商品删除spu(批量)
export function allDeleteSpu(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-DELETE-PROCESSOR',
    data,
    token
  })
}

// 批量改价
export function allUpdatePrice(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-BATCH-CHANGE-PRICE-PROCESSOR',
    data,
    token
  })
}

// 商品导入分页列表
export function getImportPageList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-IMPORT-PAGE-LIST-PROCESSOR',
    data,
    token
  })
}

// spu商品分页列表
export function fetchSpuGoodsList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-PAGE-LIST-PROCESSOR',
    data,
    token
  })
}

// spu商品无分页列表
export function fetchAllSpuGoodsList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-LIST-PROCESSOR',
    data,
    token
  })
}

// 商品批量导入
export function importGoods(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    timeout: 100000,
    target: 'PRODUCT-IMPORT-PROCESSOR',
    data,
    token
  })
}

// spu商品分页列表
export function getSPUGoodsList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-PAGE-LIST-PROCESSOR',
    data,
    token
  })
}

// 转移商品
export function transferGoods(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-TRANSFER-PROCESSOR',
    data,
    token
  })
}

// 商品分类树形列表
export function fetchTreeCategoryList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-TREE-LIST-PROCESSOR',
    data,
    token
  })
}

// 根据商品分类IDS查询规则类型
export function getCategorySeoStatusList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-CATALOG-TDK-RULE-TYPE-LIST-PROCESSOR',
    data,
    token
  })
}

// 根据标签IDS查询规则类型
export function getTagSeoStatusList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-TAG-TDK-RULE-TYPE-LIST-PROCESSOR',
    data,
    token
  })
}

// 根据商品IDS查询规则类型
export function getGoodsSeoStatusList(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-PRODUCT-TDK-RULE-TYPE-LIST-PROCESSOR',
    data,
    token
  })
}

// 设置商品分类TDK规则
export function setCatelogTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-CATALOG-TDK-RULE-SET-PROCESSOR',
    data,
    token
  })
}
// 设置商品详情TDK规则
export function setProductTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-PRODUCT-TDK-RULE-SET-PROCESSOR',
    data,
    token
  })
}
// 设置标签详情TDK规则
export function setTagTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-TAG-TDK-RULE-SET-PROCESSOR',
    data,
    token
  })
}
// 设置店铺TDK通用规则
export function setCommonTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-COMMON-TDK-RULE-SET-PROCESSOR',
    data,
    token
  })
}
// 查询TDK规则可配置字段列表
export function getTdkColumn(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-TDK-COLUMN-LIST-PROCESSOR',
    data,
    token
  })
}
//查询TDK系统默认规则
export function getSystemTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-SYSTEM-TDK-RULE-PROCESSOR',
    data,
    token
  })
}
//查询店铺TDK通用规则
export function getCommmonTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-COMMON-TDK-RULE-PROCESSOR',
    data,
    token
  })
}
//查询自定义seo分类Tdk规则
export function getCatalogCustomTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-CATALOG-TDK-RULE-FIND-PROCESSOR',
    data,
    token
  })
}
//查询自定义seo标签Tdk规则
export function getTagCustomTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-TAG-TDK-RULE-FIND-PROCESSOR',
    data,
    token
  })
}
//查询自定义seo商品Tdk规则
export function getProductCustomTdk(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'SEO-PRODUCT-TDK-RULE-FIND-PROCESSOR',
    data,
    token
  })
}
// 商品分类推荐或取消
export function recommend(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-CATALOG-ISRECOMMEND-PROCESSOR',
    data,
    token
  })
}

// 编辑SPU商品售卖价
export function changePriceSpu(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-CHANGE-PRICE-PROCESSOR',
    data,
    token
  })
}

// 编辑SPU商品上下架
export function productUpperOrLowerSpu(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-UPPER-OR-LOWER-PROCESSOR',
    data,
    token
  })
}

// 编辑SPU商品库存
export function productUpdateStockSpu(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-UPDATE-STOCK-PROCESSOR',
    data,
    token
  })
}

// 批量改价SPU商品
export function allUpdatePriceSpu(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-BATCH-CHANGE-PRICE-PROCESSOR',
    data,
    token
  })
}

// 商品是否在参加营销活动
export function getMarketActivity(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-MARKET-ACTIVITY-LIST-PROCESSOR',
    data,
    token
  })
}

// 商品推广 单个
export function shareOne(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-EXTEND-PROCESSOR',
    data,
    token
  })
}

// 商品推广 批量
export function shareMore(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-BATCH-EXTEND-PROCESSOR',
    data,
    token
  })
}

// 获取申请信息
export function getApplyInfo(data) {
  return request({
    apiType: 'manager',
    method: 'post',
    target: 'TC-PCWAP-APPLY-INFO-PROCESSOR',
    data,
    token
  })
}

// 获取小程序审核状态
export function getMiniappInfo(data) {
  return request({
    apiType: 'decorate',
    method: 'post',
    target: 'DECORATION-GET-MINI-APP-STATUS-PROCESSOR',
    data,
    token
  })
}

// 直播-商品链接
export function getJdLive(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT-SPU-JD-LIVE-LINKS-PROCESSOR',
    data,
    token
  })
}
// 分销商品设置
export function commisionGoodsSet(data) {
  return request({
    apiType: 'commission',
    method: 'post',
    target: 'COMMISSION-PRODUCT-CONFIG-EDIT-PROCESSOR',
    data,
    token
  })
}
// //通过店铺查询获取普通快递、商家配送是否设置开启状态
// export function getExpressAndDeliverySet(data) {
//   return request({
//     target: 'SHOP-API-100-PROCESSOR',
//     method: 'post',
//     apiType: 'manager',
//     data
//   })
// }
//修改商品排列序号
export function editGoodSortId(data) {
  return request({
    target: 'PRODUCT-EDIT-BY-SORTID-PROCESSOR',
    method: 'post',
    apiType: 'goods',
    data,
  })
}
//商品转移分类和新增分类
export function editProductsCatalogs(data) {
  return request({
    target: 'PRODUCT-CATALOG-BATCH-EDIT-PROCESSOR',
    method: 'post',
    apiType: 'goods',
    data,
  })
}

//添加商品常用类目
export function addProCommonCategory(data) {
  return request({
    target: 'PRODUCT_OFTEN_CATEGORY_ADD_PROCESSOR',
    method: 'post',
    apiType: 'goods',
    data,
  })
}
//查询商品常用类目
export function getProCommonCategory(data) {
  return request({
    target: 'PRODUCT_OFTEN_CATEGORY_FIND_LIST_PROCESSOR',
    method: 'post',
    apiType: 'goods',
    data,
  })
}
//删除商品常用类目
export function delProCommonCategory(data) {
  return request({
    target: 'PRODUCT_OFTEN_CATEGORY_DEL_PROCESSOR',
    method: 'post',
    apiType: 'goods',
    data,
  })
}

// 分销商品设置详情
export function commisionGoodsDetails(data) {
  return request({
    apiType: 'commission',
    method: 'post',
    target: 'COMMISSION-PRODUCT-CONFIG-DETAIL-PROCESSOR',
    data,
    token
  })
}
// 查看-分销店铺（默认）设置详情
export function commisionSetDetail(data) {
  return request({
    apiType: 'commission',
    method: 'post',
    target: 'COMMISSION-SHOP-CONFIG-DETAIL-PROCESSOR',
    data,
    token
  })
}

// 商品--批量修改配送方式
export function batchEditDistributionMode(data) {
  return request({
    apiType: 'goods',
    method: 'post',
    target: 'PRODUCT_SPU_EDIT_DISTRIBUTION_PROCESSOR',
    data,
    token
  })
}





