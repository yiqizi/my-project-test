<template>
  <div class="wrapper">
    <div class="result">
      <div class="search">
        <el-input class="search-input"
          placeholder="地图搜索"
          clearable
          v-model="keyword">
        <el-button slot="append" class="btn" @click="handleKeyWordSearch" icon="el-icon-search"></el-button>
      </el-input>
        <div class="info-div" v-if="pois.length > 0">
          <ol :style="{height: height + 'px'}">
            <li v-for="(item, index) in pois" :class="[poi && poi.id === item.id ? 'curred' : '']" @click="handleClickPoi(item, index)"
              :key="index">
              <p v-if="item.title" ><span>{{ index + 1 }}.</span>{{ item.title }}</p>
              <p v-if="item.address">{{ item.address }}</p>
              <p v-if="item.tel"> {{ item.tel }}</p>
            </li>
          </ol>
          <el-pagination
            v-if="pois.length > 0"
            class="pagination"
            :background="true"
            small
            :pager-count="5"
            :total="totalNum" 
            layout="prev, pager, next, sizes"
            @current-change="handleCurrentChange"
            :current-page.sync="page"
            :page-size="pageSize"
          >
          </el-pagination>
        </div>
      </div>
      <div id="mapContainer" ref="mapContainer"></div>
    </div>
  </div>
</template>

<script>
import mapBase from "./MapBase.vue";
// import { debounce } from '@/utils/base.js'
export default {
  name: "mapSearch",
  extends: mapBase,
  props: {
    address: {
      type: String,
      default: ''
    },
    boundary: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 322
    }
  },
  data() {
    return {
      //搜索参数对象
      searchParams: {
        location: '北京',
        pageIndex:  1,
        pageCapacity: 10,
        autoExtend: true,
      },
      lng: null,
      lat: null,
      info: null,
      markers: [],
      pois: [],
      poi: null,
      page: 1,
      pageSize: 10,
      totalNum: 0,
      keyword: '',
      markerClusterer: null,
      isLoded: false,
      debounceSearch: null
    };
  },
  created() {
    console.log('------公共组件mapsearch-')
    console.log(this.utils.debounce)
    this.debounceSearch = this.utils.debounce(this.search)
  },
  methods: {
    getParentAreaCode(tencentCode) {
      return new Promise((resolve, reject) => {
        this._apis.map.getParentAreaCode({ tencentCode }).then(response =>{
          resolve(response)
        }).catch(error =>{
          resolve(reject)
        })
      })
    },
    getPoiDetail(poi) {
      // console.log(poi)
      this.poi = poi
      const tencentCode = poi && poi.ad_info && poi.ad_info.adcode
      const data = Object.assign({}, poi)
      if (tencentCode) {
        this.getParentAreaCode(tencentCode).then(response =>{
          // console.log('---response--',response)
          delete data.ad_info
          data.provinceCode = response.provinceCode
          data.cityCode = response.cityCode
          data.areaCode = response.areaCode
          data.provinceName = response.provinceName
          data.cityName = response.cityName
          data.areaName = response.areaName
          this.$emit('getMapClickPoi', data, tencentCode)
        }).catch(error =>{
          // reject(error)
          this.$emit('getMapClickPoi', data, tencentCode)
        })
      }
    },
    // 清空查询结果列表
    clearSearchResultList() {
      this.pois = []
    },
    // 清空关键词搜索
    clearKeyword() {
      this.keyword = ''
    },
    handleCurrentChange(val) {
      this.page = val
      this.debounceSearch()
      // this.search()
    },
    //实例初始化结束
    inited() {
      this.info = new qq.maps.InfoWindow({
        map: this.mapObj
      })
      // 初始化事件
      this.initEvent()
      this.mapObj.setOptions({
        scaleControlOptions: {
          position: qq.maps.ControlPosition.RIGHT_CENTER
        },
        zoomControlOptions: {
          position: qq.maps.ControlPosition.RIGHT_CENTER
        },
        panControlOptions: {
          position: qq.maps.ControlPosition.RIGHT_CENTER
        }
      })
    },
    //初始化事件
    initEvent() {
      const self = this
      this.eventList["click"] = qq.maps.event.addListener(
        this.mapObj,
        "click",
        function(event) {
          const currZoom = self.mapObj.getZoom()
          if (event && event.latLng && currZoom > 10 && !this.isLoded) {
            this.isLoded = true
            const latLng = event.latLng
            self.getGeocoder({ location: `${latLng.lat},${latLng.lng}` }).then((res) => {
              // console.log('--getGeocoder---',res)
              const poi = {
                address: `${res.result.address}${res.result.formatted_addresses.recommend}`,
                location:res.result.location,
                title: res.result.formatted_addresses.recommend,
                ad_info: res.result.ad_info
              }
              // console.log('----item----', poi)
              self.getPoiDetail(poi)
              self.openInfoWindow(self.info, null, self.mapObj, poi)
            }).catch((err) => {
              console.error(err)
            }).finally(() => {
              this.isLoded = false
            })
          }
        }
      );
    },
    getGeocoder(data) {
      return new Promise((resolve, reject) => {
        this._apis.map.getGeocoder(data).then(response =>{
          resolve(response)
        }).catch(error =>{
          reject(error)
        })
      })
    },
    // clear maker
    clearMarker(index) {
      if (index) {
        this.markers[index].setMap(null)
      }
    },
    clearAllMaker() {
      const markers = this.markers
      let len = markers.length
      if (len > 0) {
        for( let i = 0; i < len; i++) {
          this.clearMarker(i)
        }
      }
    },
    getSearch(data) {
      return new Promise((resolve, reject) => {
        this._apis.map.getSearch(data).then((response)=> {
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    getCities(address) {
      const reg = /.+?(市|自治区|自治州|县|区)/g
      const arr = address.match(reg)
      let city = ''
      if (arr && arr.length > 0) {
        city = arr[0]
      }
      return city
    },
    handleKeyWordSearch() {
      this.page = 1
      this.debounceSearch()
    },
    //执行搜索
    search() {
      // if (!this.keyword) {
      //   this.totalNum = 0
      //   this.pois = []
      //   return false
      // }
      this.clearAllMaker()
      if (this.info) {
        this.info.close();
      }
      let boundary = this.getCities(this.keyword)
      if (!boundary) {
        boundary = this.boundary || '北京市'
      }
      const data = {
        keyword: this.keyword,
        boundary: `region(${boundary},1)`,
        mapPageIndex: this.page,
        mapPageSize: this.pageSize
      }

      this.getSearch(data).then((response) => {
        if(response) { //修复监控报错
          this.totalNum = response.count >= 200 ? 200 : response.count
          this.pois = response.data || []
          if (this.pois.length > 0) {
            this.addMarkers(response)
          } else {
            this.$message.error('暂无查询结果')
            const lng = this.center[1] || 116.4071700000
            const lat = this.center[0] || 39.9046900000
            this.setPanTo(lng, lat, 4)
          }
        }else{
          this.$message.error('暂无查询结果')
          const lng = this.center[1] || 116.4071700000
          const lat = this.center[0] || 39.9046900000
          this.setPanTo(lng, lat, 4)
        }
      }).catch((err) => {
        console.error(err)
        this.$message.error('查询失败')
      })
    },
    handlePropSearch(keyword) {
      // console.log('----keyword---', keyword)
      this.keyword = keyword
      if (!keyword) {
        this.totalNum = 0
        this.pois = []
        return false
      }
      this.page = 1
      this.search()
    },
    openInfoWindow(info, marker, map, poi) {
      info.open();
      let html = ''
      if (poi.title) {
        html += `<p style="line-height:22px;">${poi.title}</p>`
      }
      if (poi.address) {
        html += `<p style="color:#ccc; line-height:22px;border-top:1px solid #ccc; ">${poi.address}</p>`
      }
      // self.$emit('getMapClickPoi', poi)
      info.setContent(html);
      let position = new qq.maps.LatLng(poi.location.lat, poi.location.lng);
      info.setPosition(position);
    },

    addMarkers(results) {
      const self = this
      const pois = results.data
      // console.log('--addMarkers--', pois)
      if (pois.length <= 0) return false
      // let latlngBounds = new qq.maps.LatLngBounds();
      for (var i = 0; i < pois.length; i++) {
        let poi = pois[i]
        // latlngBounds.extend(poi.location);
        let position = new qq.maps.LatLng(poi.location.lat, poi.location.lng);
        // let decoration = new qq.maps.MarkerDecoration(i, new qq.maps.Point(0, -5));
        let makerAdd = new qq.maps.Marker(({
          'position': position,
          // 'decoration': decoration,
          'map': self.mapObj
        }))
        // console.log('makerAdd', makerAdd)
        qq.maps.event.addListener(makerAdd, 'click', function(e) {
          self.info.close();
          // console.log('-----item-----', poi)

          const tencentCode = poi && poi.ad_info && poi.ad_info.adcode
          if (tencentCode) {
            self.openInfoWindow(self.info, makerAdd, self.mapObj, poi)
            self.getPoiDetail(poi)
          } else {
            self.getGeocoder({ location: `${poi.location.lat},${poi.location.lng}` }).then((res) => {
              // console.log('--getGeocoder---',res)
              const poi = {
                address: `${res.result.address}${res.result.formatted_addresses.recommend}`,
                location:res.result.location,
                title: res.result.formatted_addresses.recommend,
                ad_info: res.result.ad_info
              }
              self.openInfoWindow(self.info, makerAdd, self.mapObj, poi)
              // console.log('--------', poi)
              self.getPoiDetail(poi)
            }).catch((err) => {
              console.error(err)
            }).finally(() => {
            })
          }
          // self.getPoiDetail(poi)
          // self.$emit('getMapClickPoi', poiInfo)
        })
        this.markers.push(makerAdd)
      }
      this.setPanTo(pois[0].location.lng, pois[0].location.lat)
    },
    // 设置根据地区经纬度变化改变当前地图中心
    setPanTo(lng, lat, zoom = 17) {
      // console.log('-lng, lat---',lng, lat)
      const oLatLng = new qq.maps.LatLng(lat, lng)
      this.mapObj.panTo(oLatLng)
      this.mapObj.zoomTo(zoom)
    },
    // 通过address 获取经纬度
    getGeocoderByAddress() {
      // console.log('-----获取经纬度----')
      this._apis.map.getGeocoderAddress({ address: this.address }).then((res) => {
        const lng = res.result.location.lng
        const lat = res.result.location.lat
        this.setPanTo(lng, lat, 12)
      }).catch((err) => {
        console.error(err)
      })
    },
    handleClickPoi(item, index) {
      this.setPanTo(item.location.lng, item.location.lat)
      if (this.info) {
        this.info.close();
      }

      // this.openInfoWindow(this.info, this.markers[index], this.mapObj, item)
      // this.getPoiDetail(poi)
      const poi = item
      const tencentCode = poi && poi.ad_info && poi.ad_info.adcode
      if (tencentCode) {
        this.openInfoWindow(this.info, this.markers[index], this.mapObj, poi)
        this.getPoiDetail(poi)
      } else {
        this.getGeocoder({ location: `${poi.location.lat},${poi.location.lng}` }).then((res) => {
          // console.log('--getGeocoder---',res)
          const poi = {
            address: `${res.result.address}${res.result.formatted_addresses.recommend}`,
            location:res.result.location,
            title: res.result.formatted_addresses.recommend,
            ad_info: res.result.ad_info
          }
          this.openInfoWindow(this.info, this.markers[index], this.mapObj, poi)
          // console.log('--------', poi)
          this.getPoiDetail(poi)
        }).catch((err) => {
          console.error(err)
        }).finally(() => {
        })
      }
      // this.$emit('getMapClickPoi', item)
    }
  },
  watch: {
    address(curr) {
      // console.log('----watch---',curr)
      if (curr) {
        if(!this.mapLoaded) {
          this._globalEvent.$on('mapLoaded', ()=>{
             this.getGeocoderByAddress()
          });
        }else{
           this.getGeocoderByAddress()
        }
      }
    }
  }
};
</script>
<style lang="scss">
.wrapper {
  .result {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #mapContainer {
    width: 100%;
    height: 100%;
  }
  .search {
    position: absolute;
    width: 360px;
    padding:15px;
    z-index: 2;
    .btn {
      background: #655eff;
      color: #fff;
    }
  }
  .search /deep/ .el-input__inner {
    border:0;
  }
  .info-div{
    position: relative;
    text-align: left;
    font-size: 14px;
    padding: 10px;
    overflow: auto;
    margin-top: 10px;
    background: #fff;
    .temp{
      margin-left: 5px;
    }
    ol{
      overflow-y: auto;
    }
    /deep/ ol li {
      overflow: hidden;
      padding: 5px 5px 5px 20px;
      line-height: 16px;
      cursor: pointer;
      &:hover, &.curred {
        background: #f3f1f1;
      }

      p {
        color:#999999;font-size:12px;
      }
      p:first-child {
        position: relative;
        color:#655eff;
        span {
          position: absolute;
          top: 0;
          right: 100%;
          padding-right: 5px;
        }
      }
    }
    .pagination {
      text-align: center;
    }
  }
}
</style>
