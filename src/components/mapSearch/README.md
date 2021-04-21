# mapSearch 组件使用

```vue
<template>
  <label>
    省
    <input type="text" v-model="province">
  </label>
  <label>
    市
    <input type="text" v-model="city">
  </label>
  <label>
    区
    <input type="text" v-model="area">
  </label>
  <label>
    详细地址
    <input type="text" v-model="address">
  </label>
  <el-button @click="search">搜索地图</el-button>
  <map-search
    ref="mapSearch" 
    :address="getAddress"
    :boundary="boundary"
    :scaleControl="mapStyle.scaleControl"
    :zoom="mapStyle.zoom"
    :zoomControl="mapStyle.zoomControl"
    :panControl="mapStyle.panControl"
    :center="center"
    @getMapClickPoi="getMapClickPoi"
    :isInitSearch="false"
  >
  </map-search>
</template>
<script>
import mapSearch from '@/components/mapSearch/'
export default {
  components: {
    mapSearch
  },
  data() {
    return {
      address: '北京市大兴区亦庄经济开发区地盛北街1号',
      province: '',
      city: '',
      area: '',
      center: [39.9046900000,116.4071700000],
      mapStyle: {
        zoom: 12,
        zoomControl: false,
        panControl: false,
        scaleControl: false
      },
      boundary: ''
    }
  },
  computed: {
    getAddress() {
      return `${this.province}${this.city}${this.area}`
    }
  },
  methods: {
    getMapClickPoi(poi) {
      // console.log(poi)
    },
    search() {
      this.$refs.mapSearch.handlePropSearch(this.address)
      this.$refs.mapSearch.isShowMap = true 
    }
  }
}
</script>
```

## 属性

| 名称 | 类型 | 说明 |
| :----- | :---- | :---- |
| address | String | 省市区拼接的字符串。如：北京市东城区。省市区改变后，地图显示区域跟着改变。若存在此属性则显示地图，否则不显示，需要修改组件的isShowMap=true来显示 |
| boundary | String | 指定地区搜索范围名称，默认为城市，如果不传会首先从address中匹配城市如果无法匹配则默认为“北京市” |
| scaleControl | Boolean | 见 qq.maps.Map 参数 [MapOptions](https://lbs.qq.com/javascript_v2/doc/mapoptions.html) 配置 |
| scaleControlOptions | Boolean |  qq.maps.Map 参数 [MapOptions](https://lbs.qq.com/javascript_v2/doc/mapoptions.html) 配置 |
| zoom | Number | qq.maps.Map 参数 [MapOptions](https://lbs.qq.com/javascript_v2/doc/mapoptions.html) 配置 |
| zoomControl | Boolean |  qq.maps.Map 参数 [MapOptions](https://lbs.qq.com/javascript_v2/doc/mapoptions.html) 配置 |
| zoomControlOptions | Boolean |  qq.maps.Map 参数 [MapOptions](https://lbs.qq.com/javascript_v2/doc/mapoptions.html) 配置 |
| panControl | Boolean |  qq.maps.Map 参数 [MapOptions](https://lbs.qq.com/javascript_v2/doc/mapoptions.html) 配置|
| PanControlOptions | Boolean |  qq.maps.Map 参数 [MapOptions](https://lbs.qq.com/javascript_v2/doc/mapoptions.html) 配置 |

## 方法

| 名称 | 参数 | 说明 |
| :-----| :---- | :---- |
| getMapClickPoi | Object | 当前地图选中的位置的相关信息 |