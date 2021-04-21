import request from '@/system/request'


// 获取商品类目列表
export function fetchCategoryList(data) {
  return request({
    apiType: 'goodsOperate',
    method: 'post',
    target: 'PUBLIC-PRODUCT-CATEGORYLIST-QUERYPROCESSOR',
    data
  })
}

// 获取单位计量列表
export function fetchUnitList(data) {
    return request({
      apiType: 'goodsOperate',
      method: 'post',
      target: 'PUBLIC-PRODUCT-UNITINFO-LIST-QUERY-PROCESSOR',
      data
    })
  }

  // 获取品牌管理列表
export function fetchBrandList(data) {
    return request({
        apiType: 'goodsOperate',
        method: 'post',
        target: 'PUBLIC-PRODUCT-BRANDINFO-LIST-QUERY-PROCESSOR',
        data
    })
}

// 获取商品规格列表
export function fetchSpecsList(data) {
    return request({
      apiType: 'goodsOperate',
      method: 'post',
      target: 'PUBLIC-PRODUCT-CATEGORY-SPECS-LIST-PROCESSOR',//PUBLIC-PRODUCT-SPECS-DETAIL-LIST-PROCESSOR
      data
    })
  }

// 获取商品规格列表
export function fetchSpecsList2(data) {
  return request({
    apiType: 'goodsOperate',
    method: 'post',
    target: 'PUBLIC-PRODUCT-CATEGORY-SPECS-LIST-V1-PROCESSOR',
    data
  })
}

  // 获取敏感词列表
export function fetchPublicSensitiveList(data) {
  return request({
    apiType: 'goodsOperate',
    method: 'post',
    target: 'PUBLIC-SENSITIVE-LIST-PROCESSOR',
    data
  })
}

  //获取会员协议
  export function getProtocol(data) {
      return request({
        target: 'PUBLIC-MEMBER-REGISTRATION-PROTOCOL-FIND-PROCESSOR',
        method: 'post',
        data,
        apiType: 'goodsOperate'
      })
  }

  //修改会员协议
  export function setProtocol(data) {
      return request({
        target: 'PUBLIC-REGISTRATION-PROTOCOL-UPDATE-PROCESSOR',
        method: 'post',
        data,
        apiType: 'goodsOperate'
      })
  }

  //获取系统内置图库组
  export function getSystemIconGroup(data) {
      return request({
        target: 'PUBLIC-SYSTEM-ICON-GROUP-GET-ALL-PROCESSOR',
        method: 'post',
        data,
        apiType: 'goodsOperate'
      })
  }

  //根据分组ID获取系统内置图片
  export function getSystemIconByGroupId(data) {
      return request({
        target: 'PUBLIC-SYSTEM-ICON-BY-GROUPID-PROCESSOR',
        method: 'post',
        data,
        apiType: 'goodsOperate'
      })
  }

  //模板列表
  export function getTemplateList(data) {
      return request({
        target: 'PUBLIC-PAGE-TEMPLALE-FIND-PROCESSOR',
        method: 'post',
        data,
        apiType: 'goodsOperate'
      })
  }

  //获取店铺装修某个模板的页面列表
export function getPagesByTemplateId(data) {
    return request({
      target: 'PUBLIC-PAGE-TEMPLATE-ITEM-FIND-PROCESSOR',
      method: 'post',
      apiType: 'goodsOperate',
      data
    })
}

//上架模板列表
export function getEffTemplateList(data) {
	return request({
		target: 'PUBLIC-MB-PAGE-TEMPLATE-FIND-PROCESSOR',
		method: 'post',
		data,
		apiType: 'goodsOperate'
	})
}

export function getTemplateIndustries(data) {
  return request({
    target: 'PUBLIC-MB-PAGE-TEMPLATE-DETAIL-PROCESSOR',
    method: 'post',
    data,
    apiType: 'goodsOperate'
  })
}
