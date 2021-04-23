<!--加载腾讯地图库,jsonp回调-->
<script type="es6">
import appConfig from "../../system/appConfig.js";
export default {
  name: "mapInit",

  data() {
    return {
    };
  },

  created() {
    this.initMap()
  },
  methods: {
      initMap() {
        /* 加载腾讯地图库,jsonp回调 */
        console.log('pppp', appConfig.map)
        this.$jsonp(appConfig.map.url,{
            key: appConfig.map.key
        }).then(()=>{
            console.log('-----------加载腾讯地图库')
            this.$store.commit('SET_MAP_STATE', true);
            this._globalEvent.$emit('mapLoaded');
        })
    }
  }
};
</script>