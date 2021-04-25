/* 概况模块常量 */
export default {
    //概况首页-实时概况
    realTimeData: [
        {   
            id: "001",
            url: require("@/assets/images/profile/t_01.png"),
            color: "#F05654",
            text: "支付金额",
            price: 0
        },
        {   
            id: "002",
            url: require("@/assets/images/profile/t_02.png"),
            color: "#C18F08",
            text: "支付订单",
            price: 0
        },
        {   
            id: "003",
            url: require("@/assets/images/profile/t_03.png"),
            color: "#2F88EE",
            text: "退款金额",
            price: 0
        },
        {   
            id: "004",
            url: require("@/assets/images/profile/t_04.png"),
            color: "#21AC58",
            text: "退款订单数",
            price: 0
        },
        {   
            id: "005",
            url: require("@/assets/images/profile/t_05.png"),
            color: "#FF9A54",
            text: "支付用户数",
            price: 0
        },
        {   
            id: "006",
            url: require("@/assets/images/profile/t_06.png"),
            color: "#a666ec",
            text: "客单价",
            price: 0
        },
        {   
            id: "007",
            url: require("@/assets/images/profile/t_07.png"),
            color: "#FA658F",
            text: "支付会员数",
            price: 0
        }
    ],
    //概况首页-常用功能
    commonData: [
        {   
            id: "01",
            url:'/goods/addGoods',
            img: require("@/assets/images/profile/l_01.png"),
            text: "发布商品"
        },
        {   
            id: "02",
            url:'/goods/import',
            img: require("@/assets/images/profile/l_02.png"),
            text: "商品导入"
        },
        {   
            id: "03",
            url:'/goods/batchPriceChange',
            img: require("@/assets/images/profile/l_03.png"),
            text: "批量改价"
        },
        {   
            id: "04",
            url:'/shop/m_templateManageIndex',
            img: require("@/assets/images/profile/l_04.png"),
            text: "店铺模板"
        },
        {   
            id: "05",
            url:'/shop/m_shopNavIndex',
            img: require("@/assets/images/profile/l_05.png"),
            text: "店铺导航"
        },
        {   
            id: "06",
            url:'/apply',
            img: require("@/assets/images/profile/l_06.png"),
            text: "公众号管理"
        },
        {   
            id: "07",
            url:'/apply',
            img: require("@/assets/images/profile/l_07.png"),
            text: "小程序管理"
        },
        {   
            id: "08",
            url:'/client/allClient',
            img: require("@/assets/images/profile/l_08.png"),
            text: "用户导入"
        }
    ],
    //概况首页-营销活动
    activeData: [
        {
            id: "01",
            url:'/apply',
            img: require("@/assets/images/profile/m_01.png"),
            title: "优惠券",
            sub: "向用户发放店铺优惠"
        },
        {
            id: "02",
            url:'/apply',
            img: require("@/assets/images/profile/m_02.png"),
            title: "优惠码",
            sub: "向用户发放店铺优惠码"
        },
        {
            id: "03",
            url:'/apply',
            img: require("@/assets/images/profile/m_03.png"),
            title: "限时折扣",
            sub: "限时抢购，促销成单"
        },
        {
            id: "04",
            url:'/apply',
            img: require("@/assets/images/profile/m_04.png"),
            title: "优惠套装",
            sub: "给我N元，这里商品..."
        },
        {
            id: "05",
            url:'/apply',
            img: require("@/assets/images/profile/m_05.png"),
            title: "满减/满折/满送",
            sub: "满足门槛即优惠"
        },
        {
            id: "06",
            url:'/apply',
            img: require("@/assets/images/profile/m_06.png"),
            title: "满包邮",
            sub: "达到门槛就包邮"
        },
        {
            id: "07",
            url:'/apply',
            img: require("@/assets/images/profile/m_07.png"),
            title: "赠品管理",
            sub: "管理用户赠品"
        },
        {
            id: "08",
            url:'/apply',
            img: require("@/assets/images/profile/m_08.png"),
            title: "限时秒杀",
            sub: "描述"
        },
        {
            id: "09",
            url:'/apply',
            img: require("@/assets/images/profile/m_09.png"),
            title: "多人拼团",
            sub: "描述"
        },
        // {
        //     id: "11",
        //     url:'',
        //     img: require("@/assets/images/profile/m_10.png"),
        //     title: "积分商城",
        //     sub: "描述"
        // }
    ]
}