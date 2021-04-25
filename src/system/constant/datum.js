/* 客户模块常量 */
export default {
    //商品交易-商品总况
    goodsTotleData: [
        {   
            id: "001",
            url: require("@/assets/images/datum/c_01.png"),
            color: "#FE5E7A",
            text: "在售/上架商品数",
            num: 0
        },
        {
            id: "002",
            url: require("@/assets/images/datum/c_02.png"),
            color: "#AB47BC",
            text: "被访问商品数",
            num: 0
        },
        {
            id: "003",
            url: require("@/assets/images/datum/c_03.png"),
            color: "#13A5E2",
            text: "加购商品数",
            num: 0
        },
        {
            id: "004",
            url: require("@/assets/images/datum/c_04.png"),
            color: "#FE5E7A",
            text: "下单商品数",
            num: 0
        },
        {
            id: "005",
            url: require("@/assets/images/datum/c_05.png"),
            color: "#00D166",
            text: "维权商品数",
            num: 0
        },
        {
            id: "006",
            url: require("@/assets/images/datum/c_06.png"),
            color: "#FE506E",
            text: "售罄商品数",
            num: 0
        },
        {
            id: "007",
            url: require("@/assets/images/datum/c_07.png"),
            color: "#FFBF0E",
            text: "支付商品数",
            num: 0
        },
        {
            id: "008",
            url: require("@/assets/images/datum/c_08.png"),
            color: "#655EFF",
            text: "复购商品数",
            num: 0
        }
    ],
    //订单交易-交易总况（下单）
    placeOrderData: [
        {
            id: "01",
            text: "下单人数",
            num: 0,
            unit: "人"
        },
        {
            id: "02",
            text: "下单订单数",
            num: 0,
            unit: "单"
        },
        {
            id: "03",
            text: "下单（总）金额",
            num: 0,
            unit: "元"
        },
        {
            id: "04",
            text: "访问下单转化率",
            num: 0,
            unit: "%"
        }
    ],
    //订单交易-交易总况（未支付）
    nonPaymentData: [
        {
            id: "02",
            text: "未支付订单数",
            num: 0,
            unit: "单"
        },
        {
            id: "03",
            text: "未支付订单总金额",
            num: 0,
            unit: "元"
        },
        {
            id: "04",
            text: "",
            num: '',
            unit: ""
        },
        {
            id: "05",
            text: "",
            num: "",
            unit: ""
        },
    ],
    //订单交易-交易总况（支付）
    paymentData: [
        {
            id: "01",
            text: "支付人数",
            num: 0,
            unit: "人"
        },
        {
            id: "02",
            text: "支付订单数",
            num: 0,
            unit: "单"
        },
        {
            id: "03",
            text: "订单支付（总）金额",
            num: 0,
            unit: "元"
        },
        {
            id: "04",
            text: "下单支付转化率",
            num: 0,
            unit: "%"
        }
    ],
    //订单交易-复购率及转化率
    orderProbabilityData: [
        {   
            id: "001",
            url: require("@/assets/images/datum/c_09.png"),
            color: "#FFBF0E",
            text: "店铺复购率",
            num: 0
        },
        {
            id: "002",
            url: require("@/assets/images/datum/c_10.png"),
            color: "#FF7777",
            text: "店铺支付转化率",
            num: 0
        }
    ],
    //模拟订单交易 交易总况
    apiTransactionOverview: {
        code: 0,
        data: {
            c_uv_n_pay_ch_rt: 2, 
            c_uv_pay_ch_rt: 3,
            c_uv_pt_or_ch_rt: 4, 
            channel: "",
            cid: "",
            nearDay: "",
            oq_n_pay_ch_rt: 5,
            oq_pay_ch_rt: 6,
            oq_pt_or_ch_rt: 7,
            or_am_n_pay_ch_rt: 8,
            or_am_pay_ch_rt: 9,
            or_am_pt_or_ch_rt: 10,
            pt_or_nu_tt_co_ch: 11,
            pt_or_pay_nu_co_ch_rt: 12,
            rr_tt_ch: 13,
            v_pt_or_nu_co_ch_rt: 14,
            x_array: ["2020-12-14", "2020-12-15", "2020-12-16", "2020-12-17", "2020-12-18", "2020-12-19", "2020-12-20"],
            y_array: [[22, 29, 9, 5, 21, 49, 0],[13, 15, 6, 2, 3, 11, 0],["75.00", "76.92", "71.43", "66.67", "37.50", "64.29", "0.00"]]
        },
        msg: "",
        status: ""
    },
    //模拟商品交易 实时交易
    apiTradingGoods: {
        code: 0,
	    data: {
	    	qc_ap_tt: "1",
	    	qc_fs_rt: "2",
	    	qc_pay_ch_rt: "3",
	    	qc_pi_rt: "4",
	    	qc_pt_or_ch_rt: "5",
	    	qc_pu_rt: "6",
	    	qc_so_rt: "7",
	    	qc_v_ch_rt: "8"
	    },
	    msg: "",
	    status: ""
    }
}