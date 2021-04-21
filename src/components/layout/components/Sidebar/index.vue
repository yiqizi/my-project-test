  <template>
  <div>
    <!-- <div class="logo-con">
      <img :src="require('@/assets/images/logo.png')" class="logo">
    </div> -->
    <!-- <div class="shopName">商户名称</div> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        mode="vertical"
        :unique-opened="uniqueOpened"
        background-color="#fff"
        text-color="#3a4048"
        active-text-color="#fff"
      >
        <!-- background-color="#304156" text-color="#bfcbd9"
        active-text-color="#655EFF"-->
        <sidebar-item v-for="route in sidebarItems" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  data() {
    return {
      uniqueOpened: true,
      sidebarItems: []
    }
  },
  components: { SidebarItem },
  computed: {
    // ...mapState({
    //   current: state => state.menu.current,
    // }),
    current() {
      return localStorage.getItem('siderBarCurrent') || '0'
    },
    ...mapGetters([
      'permission_routers',
      'permission_routers_tree',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
  },
  created() {
    this.setSidebarItems()
  },
  methods: {
    setSidebarItems() {
      let _permission_routers_tree = JSON.parse(JSON.stringify(this.permission_routers_tree))
      if(!!_permission_routers_tree[this.current]) { //修复监控报错
        let _path = _permission_routers_tree[this.current].path
        let children = _permission_routers_tree[this.current].children

        if(_permission_routers_tree[this.current].iframe) {
          this.sidebarItems = []
        } else {
          children.forEach(val => {
            val.path = _path + '/' + val.path
          })
          this.sidebarItems = children
        }
      }
    }
  },
  watch: {
    current() {
      this.setSidebarItems()
    }
  }
}
</script>

<style scoped>
.logo-con{
  width:100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.logo{
  width: 110px;
  margin-top: 22px;
  display: inline-block;
}
.shopName{
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-bottom:30px;
}
</style>

