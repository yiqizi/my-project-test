<!--地图组件基类 -->

<script type='es6'>
import Vue from 'vue';
import appConfig from '@/system/appConfig';
export default {
  name: "mapBase",
  props:{
    //地图宽度
    width:{  
      type: String,
      default: '100%'
    },

    //地图高度
    height:{
      type: String,  
      default: '100%'
    },

    //缩放
    zoom:{  
      type: Number,
      default: 12
    },

    //中心坐标
    center:{  
      type: Array,
      default: ()=>{
        return []
      }
    },
    scaleControl: {
      type: Boolean,
      default: true
    },
    scaleControlOptions: {
      type: Object,
      default(){
        return {
        }
      }
    },
    zoomControl: {
      type: Boolean,
      default: true
    },
    zoomControlOptions: {
      type: Object,
      default(){
        return {
        }
      }
    },
    panControl: {
      type: Boolean,
      default: true
    },
    PanControlOptions: {
      type: Object,
      default(){
        return {
        }
      }
    },
    isInitSearch: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      centerObj: null,  //中心经纬度对象
      mapObj: null,   //地图实例
      eventList: {},   //注册事件列表
      searchParams: {},    //搜索参数对象
      keyword: '',   //搜索关键词
      searchService: null  //搜索服务对象
    };
  },

  computed: {
    mapLoaded() {
      return this.$store.getters.mapLoaded;
    }
  },


  mounted(){
    if(!this.mapLoaded) {
      this._globalEvent.$on('mapLoaded', ()=>{
        // console.log(11111111111111111)
        this.init();
      });
    }else{
        // console.log(222222222222222222)
      this.init();
    }
  },
  methods: {

    //初始化
    init() {
      let Lat
      let lng
      if (this.center && this.center.length > 0) {   
        Lat = this.center[0]
        lng = this.center[1]
      } else {
        Lat = 39.9046900000
        lng = 116.4071700000
      }
      // console.log('-----init---', Lat, lng)
      this.centerObj = new qq.maps.LatLng(Lat, lng);
      // console.log('-----this.centerObj---', this.centerObj)
      this.mapObj = new qq.maps.Map(this.$refs.mapContainer, {
        zoom: this.zoom,
        center: this.centerObj,
        mapTypeId: qq.maps.MapTypeId.ROADMAP,
        scaleControl: this.scaleControl,
        zoomControl: this.zoomControl,
        panControl: this.panControl,
        PanControlOptions: this.PanControlOptions,
        zoomControlOptions: this.zoomControlOptions,
        scaleControlOptions:this.scaleControlOptions
      });

      //初始化事件
      this.inited();

      //初始化搜索
      if (this.isInitSearch) {
        this.initSearch();
      }
    },

    /* 初始化搜索 */
    initSearch() {
      const _self = this;
      this.searchService = new qq.maps.SearchService({
        //设置搜索范围为北京
        location: this.searchParams.location || '北京',
        //设置搜索页码为1
        pageIndex: this.searchParams.pageIndex || 1,
        //设置每页的结果数为5
        pageCapacity: this.searchParams.pageCapacity || 5,
        //设置展现查询结构到infoDIV上
        panel: this.$refs.infoDiv || null,
        //设置动扩大检索区域。默认值true，会自动检索指定城市以外区域。
        autoExtend: this.searchParams.autoExtend || true,
        //检索成功的回调函数
        complete: function(results) {
          _self.searchCompleted(results);
        },
        //若服务请求失败，则运行以下函数
        error: function() {
          _self.$message.error('搜索出错');
        }
      });
    }

  },
  components: {}
};
</script>

