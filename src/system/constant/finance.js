/* 财务模块常量 */
export default {
    //收支明细---流水号类型-------------------------
    revenueExpenditureTerms:[
        { value: 'tradeDetailSn', label: '交易流水号' },
        { value: 'relationSn', label: '关联单据编号' },
        { value: 'wechatTradeSn', label: '第三方流水号' },
    ],
    //收支明细---业务类型
    rebusinessTypes:[
        { value: 0, label: '全部'},
        { value: 1, label: '订单收款' },
        { value: 2, label: '售后退款' },
        { value: 3, label: '退还奖励' },
        { value: 4, label: '提现成功' },
        { value: 5, label: '红包发放' },
    ],
    //收支明细---支付方式
    payTypes:[
        { value: -1, label: '全部' },
        { value: 0, label: '微信支付' },
        { value: 1, label: '线下支付-货到付款' },
        { value: 2, label: '余额支付' },
        { value: 3, label: '红包支付' },
        { value: 4, label: '支付宝支付' },
        { value: 5, label: '线下支付-确认收款' }
    ],
    //收支明细---收支类型
    tradeTypes:[
        { value: -1, label: '全部' },
        { value: 0, label: '收入' },
        { value: 1, label: '支出' }
    ],
    //提现明细---提现方式--------------------
    presentations:[
        { value: 'cashoutSn', label: '提现编号' },
        { value: 'tradeDetailSn', label: '交易流水号' },
    ],
    //提现明细---提现状态
    presentationStatus:[
        { value: -1, label: '全部' },
        { value: 0, label: '待审核' },
        { value: 1, label: '处理中' },
        { value: 2, label: '成功' },
        { value: 3, label: '失败' }
    ],
   //提现明细---同意或拒绝-------------------
    cashoutAuditStatus:[
        { value: 0, label: '同意申请' },
        { value: 1, label: '拒绝申请' }
    ],
    //买家余额明细---交易类型
    transactionTypes:[
        { value: -1, label: '全部' },
        { value: 1, label: '订单付款' },
        { value: 2, label: '售后退款' },
        { value: 3, label: '申请提现' },
        { value: 4, label: '红包到账' },
        { value: 5, label: '提现失败' },
        { value: 6, label: '手动调整' },
        { value: 7, label: '会员升级奖励' },
        { value: 8, label: '会员卡升级奖励' }
    ],
    //积分明细---业务类型
    idbusinessTypes:[
        { value: -1, label: '全部' },
        { value: 1, label: '登录' },
        { value: 2, label: '购买' },
        { value: 3, label: '复购' },
        { value: 4, label: '超级海报' },
        { value: 5, label: '满减赠' },
        { value: 6, label: '评价' },
        { value: 7, label: '签到' },
        { value: 8, label: '节日有礼' },
        { value: 9, label: '积分兑换' },
        { value: 10, label: '手动调整' },
        { value: 11, label: '清空' },
        { value: 12, label: '会员升级奖励' },
        { value: 13, label: '会员卡升级奖励' },
        { value: 14, label: '退货退款' },
        { value: 15, label: '冻结积分' },
        { value: 16, label: '解冻积分' }
    ],
    //推客奖励---奖励方式??????
    rewards:[
        { value: 0, label: '全部' },
        { value: 1, label: '优惠券' },
        { value: 2, label: '优惠码' },
        { value: 3, label: '积分' },
        { value: 4, label: '赠品' },
        { value: 5, label: '红包' },
    ],
    //推客奖励---概况分析??????
    surveyStatus:[
        { value: 1, label: '近一周' },
        { value: 2, label: '近一个月' },
        { value: 3, label: '近三个月' },
        { value: 4, label: '开店以来' }
    ],
    //物流对账---电子面单（含第二个标签页的物流查询）---单号类型---------------
    fsTerms:[
        { value:'relationSn', label: '订单编号' },
        { value:'expressSn', label: '快递单号' },
    ],
    //物流对账---电子面单---业务类型
    fsTypes:[
        { value: -1, label: '全部' },
        { value: 0, label: '订单发货' },
        { value: 1, label: '售后发货' },
    ],
    //短信群---状态??????
    smsStatus:[
        { value: 0, label: '全部' },
        { value: 1, label: '成功' },
        { value: 2, label: '失败' },
    ],
    //分销明细 --- 分销员类型
    commissionClerkStatus:[
        { value: 'resellerSn', label: '分销员ID' },
        { value: 'resellerName', label: '姓名' },
        { value: 'resellerPhone', label: '手机号码' },
    ],
    //分销明细---流水号类型-------------------------
    serialNumberType:[
        { value: 'tradeDetailSn', label: '交易流水号' },
        { value: 'relationSn', label: '关联单据编号' },
        // { value: 'thirdPartySn', label: '第三方流水号' },
    ],
    //分销明细---业务类型-------------------------
    businessTypeList:[
        { value: 0, label: '全部' },
        { value: 1, label: '分销结算' },
        { value: 2, label: '申请提现' },
        { value: 3, label: '提现失败' }
    ],
}