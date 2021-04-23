export default {
  //地图参数配置
  map: {
	  url: 'https://map.qq.com/api/js?v=2.exp',
	  key: (process.env.NODE_ENV === 'pre') || (process.env.NODE_ENV === 'prod')?'77SBZ-JYOKX-PKZ4Z-ZEIOR-G3JL7-JYFGA':'C4XBZ-P2HWS-5BGOP-64Z2O-FROKK-JEFA7',
	  defaultCenter: [39.9046900000,116.4071700000],
	  apiBaseUrl: 'https://apis.map.qq.com/ws/'
  }
}