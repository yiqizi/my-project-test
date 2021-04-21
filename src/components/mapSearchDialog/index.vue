<template>
  <span class="mapSearch">
    <!-- <el-button type="text" class="search-map" @click="handleOpen">{{btnTxt}}<i class="el-icon-search"></i></el-button> -->
    <el-button type="text" class="search-map" @click="handleOpen">{{btnTxt}}<img class="i_map_search" src="../../assets/images/profile/i_map_search.png"  alt="" /></el-button>

    <el-dialog
      title="搜索地图"
      :visible.sync="centerDialogVisible"
      width="60%"
      :close-on-click-modal="false"
      custom-class="dialog">
      <div style="height: 480px;">
        <map-search
        class="map"
        ref="shopInfoMap"
        :scaleControl="mapStyle.scaleControl"
        :zoom="mapStyle.zoom"
        :zoomControl="mapStyle.zoomControl"
        :panControl="mapStyle.panControl"
        :center="[36.67489963858812, 102.76171874999999]"
        @getMapClickPoi="getMapClickPoi"
        :isInitSearch="false"></map-search>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        
      </span>
    </el-dialog>
  </span>
</template>

<script>
import mapSearch from '@/components/mapSearch'
  export default {
    components: {
      mapSearch
    },
    props: {
      btnTxt: {
        type: String,
        default: '搜索地图'
      },
      address: {
        type: String,
        default: ''
      },
      boundary: {
        type: String,
        default: ''
      },
      sendAddress: {
        type: String,
        default: ''
      }
    },
    computed: {
      mapLoaded() {
        return this.$store.getters.mapLoaded;
      }
    },
    data() {
      return {
        centerDialogVisible: false,
        mapStyle: {
          zoom: 4,
          zoomControl: true,
          panControl: true,
          scaleControl: true
        },
        poi: null
      };
    },
    methods: {
      handleOpen() {
        this.centerDialogVisible = true
        // this.$nextTick(()=> {
        // console.log('------',this.$refs.shopInfoMap)
        //   this.$refs.shopInfoMap.handlePropSearch(this.sendAddress)
        // })
        if(!this.mapLoaded) {
          this._globalEvent.$on('mapLoaded', ()=>{
            this.$nextTick(()=> {
              this.$refs.shopInfoMap.handlePropSearch(this.sendAddress)
            })
          });
        }else{
          this.$nextTick(()=> {
            this.$refs.shopInfoMap.handlePropSearch(this.sendAddress)
          })
        }
      },
      handleSubmit() {
        this.$refs.shopInfoMap.clearSearchResultList()
        this.$refs.shopInfoMap.clearKeyword()
        this.centerDialogVisible = false
        this.$emit("getMapClickPoi", this.poi)
      },
      getMapClickPoi(poi) {
        this.poi = poi
        // this.$emit('getMapClickPoi', poi)
      }
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mapSearch {
  // /deep/ .dialog {
  //   border-top-left-radius: 10px;
  //   border-top-right-radius: 10px;
  //   overflow: hidden;
  //   .el-dialog__header {
  //     height: 60px;
  //     box-sizing: border-box;
  //     padding: 15px 20px;
  //     background-color: #F1F0FF;
  //     text-align: left;
  //     .el-dialog__title {
  //       font-size: 22px;
  //       line-height: 30px;
  //       color:#44434B;
  //     }
  //   }
  // }
}
.search-map {
    margin-left: 17px;
    width:106px;
    height:32px;
    font-size: 14px;
    border: 0;
    padding: 5px 12px 7px;
    background:rgba(240,239,255,1);
    border-radius:4px;
    color:rgba(101,94,255,1);
    cursor: pointer;
    i {
      padding-left: 6px;
      font-weight: bold;
    }
    &:hover {
    background:rgba(240,239,255,1);
    border-radius:4px;
    color:rgba(101,94,255,1);
    }
  }
  .map {
    width: 100%;
    height: 100%;
    // border-left: 1px solid #ccc;
  }
  
  .i_map_search {
    width: 18px;
    height: 18px;
    vertical-align: text-bottom;
    margin-left: 6px;
  }
  /deep/ .el-dialog__footer{
    text-align: center;
  }
  /deep/ .el-input-group__append{
  border: none;
  background: #655eff;
 }
</style>
