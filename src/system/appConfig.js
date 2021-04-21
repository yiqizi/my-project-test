export default {
	head: {
	  VERSION: "vsesion-2.0.0.1", // 版本号
	  CHANNEL: "页面测试", // 渠道
	  KEY:"133C9CB27DA0", // 公钥，由Leader平台系统进行分配
	  VALUE:"FD4007DB87B245EEACA7DAD5D4A1CECD", // 私钥
	  CLIENT:"3" //客户端
  },
  //地图参数配置
  map: {
	  url: 'https://map.qq.com/api/js?v=2.exp',
	  key: 'C4XBZ-P2HWS-5BGOP-64Z2O-FROKK-JEFA7',
	  defaultCenter: [39.9046900000,116.4071700000],
	  apiBaseUrl: 'https://apis.map.qq.com/ws/'
  },
  realmName: 'http://172.22.146.118',
  oldH5MallCidWhiteList: []  //老的h5商城cid白名单
}