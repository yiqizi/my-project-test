import request from '@/system/request'

// 获取会员卡列表
export function getCardList(data) {
    return request({
      target:'CARD-LEVEL-INFO-FIND-PAGE-LIST-PROCESSOR',
      method: 'post',
      apiType: 'member',
      data
    })
}
//获取客户标签
export function getLabels(data) {
    return request({
        target:'MEMBER-LABEL-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡管理-发卡
export function sendCard(data) {
    return request({
        target:'RECEIVE-CARD-RECORD-SEND-CARD-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡管理-启用/禁用
export function toggleStatus(data) {
    return request({
        target:'CARD-LEVEL-INFO-STATUS-EDIT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡管理-等级权益列表信息
export function getRightsList(data) {
    return request({
        target:'RIGHTS-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡管理-下拉列表
export function getCardNames(data) {
    return request({
        target:'CARD-LEVEL-INFO-FIND-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//客户渠道下拉
export function getChannels(data) {
    return request({
        target:'MEMBER-SOURCECHANNELLIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//客户列表
export function getMemberList(data) {
    return request({
        target:'MEMBER-INFO-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//删除客户
export function deleteMember(data) {
    return request({
        target:'MEMBER-INFO-DEL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//打标签
export function markLabel(data) {
    return request({
        target:'MEMBER-INFO-MARKLABEL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//批量删除
export function batchDeleteMember(data) {
    return request({
        target:'MEMBER-INFO-DEL-BATCH-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//批量打标签
export function batchMarkLabel(data) {
    return request({
        target:'MEMBER-INFO-MARKLABELBATCH-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取客户详情
export function getMemberInfo(data) {
    return request({
        target:'MEMBER-INFO-DETAIL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//客户个人资料保存
export function saveMemberInfo(data) {
    return request({
        target:'MEMBER-INFO-PERSONALDATA-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//等级-下拉列表
export function getLevelList(data) {
    return request({
        target:'LEVEL-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//变换客户身份
export function identityChange(data) {
    return request({
        target:'UPDATE-MEMBER-LEVEL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//变更会员卡
export function cardChange(data) {
    return request({
        target:'MEMBERINFO-CHANGECARD-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//发放会员卡
export function giveCard(data) {
    return request({
        target:'MEMBERINFO-GRANTCARD-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//取消手动标签
export function removeLabel(data) {
    return request({
        target:'MEMBERINFO-CANCELLABEL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//标签列表
export function getLabelList(data) {
    return request({
        target:'MEMBER-LABEL-PAGE-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//标签添加
export function addTag(data) {
    return request({
        target:'MEMBER-LABEL-ADD-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//标签详情
export function getLabelInfo(data) {
    return request({
        target:'MEMBER-LABEL-DETAIL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//标签编辑
export function updateTag(data) {
    return request({
        target:'MEMBER-LABEL-UPDATE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//批量删除标签
export function batchDeleteTag(data) {
    return request({
        target:'MEMBER-LABEL-BATCH-DELETE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//等级分页查询
export function getLevelsList(data) {
    return request({
        target:'LEVEL-PAGE-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取等级详情
export function getLevelsInfo(data) {
    return request({
        target:'LEVEL-DETAIL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//升级条件列表
export function levelConditionList(data) {
    return request({
        target:'LEVEL-CONDITION-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//升级奖励列表
export function getRewardList(data) {
    return request({
        target:'UPGRADE-REWARD-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//余额明细表
export function getBalanceList(data) {
    return request({
        target:'FINANCIAL-BALANCE-PAGELIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//手动变更余额
export function manualChangeBalance(data) {
    return request({
        target:'MEMBER-INFOBALANCE-ADJUSTMENT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//手动变更积分
export function manualChangeCredit(data) {
    return request({
        target:'MEMBER-INFO-SCOREADJUSTMENT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取优惠券下拉
export function getAllCoupons(data) {
    return request({
        url: '/v1/b/app-coupon/activity/page-list',
        method: 'get',
        baseURL: process.env.SALE_API,
        params:data
    })
}
//获取优惠券及优惠码的数量
export function getCouponNum(data) {
    return request({
        url: '/v1/b/app-coupon-member-get/activity/queryOwnNum',
        method: 'get',
        baseURL: process.env.SALE_API,
        params:data
    })
}
//获取优惠券发放列表
export function getDistributeCouponList(data) {
    return request({
        url: '/v1/b/app-coupon/activity/distributeList',
        method: 'post',
        baseURL: process.env.SALE_API,
        data
    })
}
//获取优惠券下拉
export function getAllCouponsOther(data) {
    return request({
        url: '/activity/page-list',
        method: 'get',
        baseURL: process.env.SALE_API,
        params:data
    })
}
//优惠券/码发放
export function distributeCoupon(data) {
    return request({
        url: '/v1/b/app-coupon-member-get/activity/distribute',
        method: 'post',
        baseURL: process.env.SALE_API,
        data
    })
}
//导入客户记录列表
export function importMemberList(data) {
    return request({
        target:'MEMBER-IMPORTRECORD-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取积分规则
export function getCreditList(data) {
    return request({
        target:'GAIN-SCORE-SCENE-INFO-FIND-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//修改积分规则
export function editCreditRegular(data) {
    return request({
        target:'GAIN-SCORE-SCENE-INFO-EDIT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//导入用户页-添加标签
export function addImportLabel(data) {
    return request({
        target:'MEMBERINFO-MARKLABELBATCHBYIMPORT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//导入用户页-变更身份
export function modifyImportIdentity(data) {
    return request({
        target:'MEMBERINFO-IDENTITYCHANGEBYIMPORT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//黑名单禁用复选框
export function blackChecks(data) {
    return request({
        target:'MEMBE-RBLACKLISTLIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//用户已经有的优惠券
export function getUsedCoupon(data) {
    return request({
        url: '/v1/b/app-coupon-member-get/activity/customer-list',
        method: 'get',
        baseURL: process.env.SALE_API,
        params: data
    })
}
//赠品列表
export function getGiftList(data) {
    return request({
        url: '/v1/b/app-gift/activity/page-list',
        method: 'get',
        baseURL: process.env.SALE_API,
        params: data
    })
}
//红包列表
export function getRedPacket(data) {
    return request({
        url: '/v1/b/hongbao',
        method: 'get',
        baseURL: process.env.SALE_API,
        params: data
    })
}
//加入黑名单
export function addToBlack(data) {
    return request({
        target:'MEMBER-BLACKLIST-DETAIL-ADD-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//批量加入黑名单
export function batchToBlack(data) {
    return request({
        target:'MEMBER-BLACKLIST-DETAIL-ADD-BATCH-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//解除黑名单
export function removeFromBlack(data) {
    return request({
        target:'MEMBER-BLACKLIST-DETAIL-REMOVE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//批量解除黑名单
export function batchRemoveFromBlack(data) {
    return request({
        target:'MEMBER-BLACKLIST-DETAIL-REMOVEBATCH-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//等级编辑
export function editLevel(data) {
    return request({
        target:'LEVEL-EDIT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//等级启用禁用
export function enableLevel(data) {
    return request({
        target:'LEVEL-ENABEL-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//等级批量禁用  优化相同的接口统一，测试通过可删除
// export function batchEnableLevel(data) {
//     return request({
//         target:'LEVEL-ENABEL-PROCESSOR',
//         method: 'post',
//         apiType: 'member',
//         data
//     })
// }
//解除黑名单冻结列表
export function getFreezeList(data) {
    return request({
        target:'MEMBERINFO-BLACKLISTDETAILS-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡管理-详情信息
export function getCardInfo(data) {
    return request({
        target:'CARD-LEVEL-INFO-FIND-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡管理-查询一等级会员卡公共字段
export function getCardPublic(data) {
    return request({
        target:'CARD-LEVEL-INFO-FIND-LEVEL-ONE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡管理-编辑
export function editCard(data) {
    return request({
        target:'CARD-LEVEL-INFO-EDIT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡领取记录查询列表
export function getLkList(data) {
    return request({
        target:'RECEIVE-CARD-RECORD-FIND-PAGE-LIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取商品分类
export function getProductClass(data) {
    return request({
        target:'PRODUCT-CATALOG-LIST-PROCESSOR',
        method: 'post',
        apiType: 'goods',
        data
    })
}
//获取sku商品分页列表
export function getSkuList(data) {
    return request({
        target:'PRODUCT-SKU-PAGE-LIST-PROCESSOR',
        method: 'post',
        apiType: 'goods',
        data
    })
}
//添加渠道
export function addChannel(data) {
    return request({
        target:'MEMBER-SOURCECHANNELADD-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//会员卡上传背景宣传图片
export function addCardBg(data) {
    return request({
        target:'MEMBERCARD-PIC-UPDATE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//查询会员卡宣传背景图片
export function checkCardBg(data) {
    return request({
        target:'MEMBERCARD-PIC-FIND-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//批量导入会员
export function importMemberFile(data) {
    return request({
        target:'MEMBERINFO-IMPORT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取积分列表
export function getPointList(data) {
    return request({
        target:'MEMBER-SCOREDETAIL-PAGELIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取余额列表
export function getBalanceLists(data) {
    return request({
        target:'MEMBER-BALANCEDETAIL-PAGELIST-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
// //保存积分通用规则
// export function saveCreditRule(data) {
//     return request({
//         target:'SHOP-API-102-PROCESSOR',
//         method: 'post',
//         apiType: 'manager',
//         data
//     })
// }
// //查询积分通用规则
// export function checkCreditRule(data) {
//     return request({
//         target:'SHOP-API-100-PROCESSOR',
//         method: 'post',
//         apiType: 'manager',
//         data
//     })
// }
//导出客户
export function exportToLocal(data) {
    return request({
        target:'MEMBERINFO-EXPORT-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//获取会员卡色卡地址
export function getColorUrl(data) {
    return request({
        target:'CARD-BG-IMG-PROCESSOR',
        method: 'post',
        apiType: 'goodsOperate',
        data
    })
}
//校验标签名是否重复
export function labelDoubleCheck(data) {
    return request({
        target:'MEMBER-LABLE-DUPLICATION-CHECK-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//检查当前会员等级条件值是否低于上一级
export function checkLevelValue(data) {
    return request({
        target:'LEVEL-CHECK-CONDITION-VALUE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//检查当前会员卡条件值是否低于上一级
export function checkCardValue(data) {
    return request({
        target:'CARD-LEVEL-INFO-CHECK-CONDITION-VALUE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//冻结优惠券
export function frozenCoupons(data) {
    return request({
        url: '/v1/b/app-coupon-member-get/activity/frozen',
        method: 'post',
        baseURL: process.env.SALE_API,
        data
    })
}
//批量冻结优惠券
export function batchFrozenCoupons(data) {
    return request({
        url: '/v1/b/app-coupon-member-get/activity/batch-frozen',
        method: 'post',
        baseURL: process.env.SALE_API,
        data
    })
}
//等级启用  优化相同的接口统一，测试通过可删除
// export function levelEnable(data) {
//     return request({
//         target:'LEVEL-ENABEL-PROCESSOR',
//         method: 'post',
//         apiType: 'member',
//         data
//     })
// }
//等级禁用
export function levelDisable(data) {
    return request({
        target:'LEVEL-DISABLE-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}
//用户最大启用等级
export function getLevelMax(data) {
    return request({
        target:'LEVEL-MAX-PROCESSER',
        method: 'post',
        apiType: 'member',
        data
    })
}
//用户最大启用卡等级
export function getCardMax(data) {
    return request({
        target:'CARD-LEVEL-MAX-PROCESSOR',
        method: 'post',
        apiType: 'member',
        data
    })
}