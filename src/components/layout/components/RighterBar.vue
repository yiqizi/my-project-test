<template>
  <div v-if="sidebarItems.length && $route.name !== 'profile'">
    <div class="righter-bar" :class="{'collapse': $store.getters.collapse}">
      <div class="righter-bar-content" v-calcHeight="60">
        <div v-if="!item.hidden" v-for="item in sidebarItems">
          <div v-if="item.children" class="item">
            <h2>{{item.name}}</h2>
            <div v-if="!child.hidden" v-for="child in item.children" class="item-child">
              <router-link :title="child.meta.title" class="ellipsis" active-class="active" :to="resolvePath(item.path, child.path)">{{child.meta.title}}</router-link>
            </div>
          </div>
          <div v-else>
            <div v-if="item.tabTitle">
              <!-- <div class="item" v-if="isPc || (item.tabTitle !== 'PC店铺' && item.tabTitle !== '资讯管理')">
                <h2>{{item.tabTitle}}</h2>
                <div v-if="!child.hidden" v-for="child in item.data" class="item-child">
                  <div>
                    <router-link :title="child.meta.title" class="ellipsis" active-class="active" :to="resolvePath(child.path)">{{child.meta.title}}</router-link>
                  </div>
                </div>
              </div> -->
              <div class="item" v-if="isOpenResell || (item.tabTitle !== '分销账目')">
          <h2 v-if="item.tabTitle == '分割线'" style="width: 56px;height: 1px;background: #D9DEE9;margin-left: 20px"></h2>
                  <h2 v-else>{{item.tabTitle}}</h2>
                  <div v-if="!child.hidden" v-for="child in item.data" class="item-child">
                    <!-- <div v-if="child.meta.title == '修改密码' && userType"></div> -->
            <div>
              <a @click="routerClick(child)" :title="child.meta.title" class="ellipsis"
                :class="{active: $route.path.includes(child.path)}">{{child.meta.title}}</a>
            </div>
                  </div>
              </div>
            </div>
            <div v-else class="item">
              <router-link :title="item.meta.title" class="ellipsis" active-class="active" :to="resolvePath(item.path)">{{item.meta.title}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RighterThridBar v-if="thridMenu.length !== 0"></RighterThridBar>
  </div>
</template>

<script>
import RighterThridBar from './RighterThridBar'
import { mapState, mapGetters } from 'vuex'
import path from 'path'
import appConfig from '@/system/appConfig.js'

var isExternal = function(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export default {
  data() {
    return {
      sidebarItems: [],
      basePath: '',
      //userType: false,
      current: '0',
      isPc: false,  //是否开通了pc和wap店铺
      isOpenResell:false, //是否开通了分销应用
      righterThridBarData: []
    }
  },
  components: {
    RighterThridBar
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'permission_routers_tree',
      'thridMenu'
    ]),
    userType(){
      let userInfo = JSON.parse(this.$store.getters.userInfo)

      if(userInfo && userInfo.type == "admin") {
        return true
      }
      return false
    }
  },
  created() {
    this._apis.data.openPcWap().then(response => {
      if(response == null){
        this.isPc = false
      }else if(response.onoff == 0){
        this.isPc = false
      }else{
        this.isPc = true
      }
    }).catch(error => {
      this.$message.error(error);
    });
    this.current = localStorage.getItem('siderBarCurrent') || '0'
    this.setSidebarItems()

    let name = this.$route.path.replace(/^(\/[^(?:\/|\?)]+)\/.*$/, '$1')
    //console.log('路由表', this.permission_routers_tree[1][15])
    let realCurrent = this.permission_routers_tree.findIndex(router => router.path == name)

    if(realCurrent != this.current) {
      this.current = realCurrent
      this.setSidebarItems()
    }
    this.getRebusinessTypes()
  },
  methods: {
    routerClick(child) {
      let path = this.resolvePath(child.path);
      //如果有三级菜单，则跳转至三级菜单第一个
      if(Array.isArray(child.children) && child.children.length !== 0) {
        path = this.resolvePath(child.path + '/' + child.children[0].path);
        this.righterThridBarData = [...child.children];
        //收起二级菜单
        this.$store.commit('SET_MENU_COLLAPSE', true);
      }else {
        this.righterThridBarData = [];
        //展开二级菜单
        this.$store.commit('SET_MENU_COLLAPSE', false);
      }
      //更新三级菜单
      this.$store.commit('SET_THRIDMENU', [...this.righterThridBarData]);
      //点击清除cms存储的路径
      localStorage.removeItem('cms_router_path');
      //如果是cms页面并且当前已经是跳转至的页面，则发送通知cms系统跳转
      if(this.$route.name.includes('cms') && this.$route.path === path) {
        this._globalEvent.$emit('cmsRouter', 'goRoute');
      }
      //跳转页面
      this.$router.push(path);
    },
    // setUserType() {
    //   let userInfo = JSON.parse(this.$store.getters.userInfo)

    //   if(userInfo && userInfo.type == 'admin') {
    //     this.userType = true
    //   } else {
    //     this.userType = false
    //   }
    // },
    getRebusinessTypes(){
      //  this.$store.dispatch('getShopInfo').then( data => {
          if(this.$store.getters.shopToolsStatus.commission){
            this.isOpenResell = true
          }else{
            this.isOpenResell = false
          }
      // }).catch((error) => {
      //     console.error(error);
      // });
    },

    handleTabTitle(arr) {
      var map = {},
          dest = [];
      for(var i = 0; i < arr.length; i++){
          var ai = arr[i];
          if(!map[ai.meta.tabTitle]){
            if (!ai.hidden) {
              dest.push({
              tabTitle: ai.meta.tabTitle,
                id: ai.id,
                name: ai.name,
                data: [ai]
              });
              map[ai.meta.tabTitle] = ai;
            }
          }else{
              for(var j = 0; j < dest.length; j++){
                  var dj = dest[j];
                  if(dj.tabTitle == ai.meta.tabTitle && !ai.hidden){
                      dj.data.push(ai);
                      break;
                  }
              }
          }
      }

      return dest
    },
    setSidebarItems() {
      let _permission_routers_tree = JSON.parse(JSON.stringify(this.permission_routers_tree))
      let _path = _permission_routers_tree[this.current].path
      let children = _permission_routers_tree[this.current].children
      this.righterThridBarData = [];

      if(_permission_routers_tree[this.current].iframe) {
        this.sidebarItems = []

        //更新三级菜单
        this.$store.commit('SET_THRIDMENU', [...this.righterThridBarData]);
      } else {
        children.forEach(val => {
          val.path = _path + '/' + val.path
        })
        // console.log('children',children)
        if(children.some(val => val.meta.tabTitle)) {
          children = this.handleTabTitle(children)
        }

        //如果是店铺下的二级菜单，则需要判断是否开通了移动H5
        //if(this.$route.path.includes('/shop/')) {
          //如果没有开通过，则直接去掉移动H5菜单
          const isH5CidWhiteList = this.$store.getters.shopInfos && appConfig.oldH5MallCidWhiteList.includes(Number(this.$store.getters.shopInfos.id))
          if(this.$store.getters.webPageStatus !== 1 && !isH5CidWhiteList) {
            for(let i = 0; i < children.length; i++) {
              for(let j = 0; j < children[i].data.length; j++) {
                if(children[i].data[j].name === 'm_h5ShopIndex') {
                  children[i].data.splice(j, 1);
                  break;
                }
              }
            }
          }
        //}

        this.sidebarItems = children

        //因一级菜单还未跳转成功，就触发了$store.state.menu.current的更新，这里需延迟执行
        setTimeout(() => {
          //判断是否有三级菜单
          for(let i = 0; i < children.length; i++) {
            for(let j = 0; j < children[i].data.length; j++) {
              if(this.$route.path.includes(children[i].data[j].path) && children[i].data[j].children) {
                this.righterThridBarData = [...children[i].data[j].children];
                //更新三级菜单
                this.$store.commit('SET_THRIDMENU', [...this.righterThridBarData]);
                return false;
              }
            }
          }
        }, 200)
      }
    },
    resolvePath(...routePath) {
      if (this.isExternalLink(routePath)) {
        return routePath
      }
      return path.resolve(this.basePath, ...routePath)
    },
    isExternalLink(routePath) {
      return isExternal(routePath)
    },
  },
  watch: {
    // current() {
    //   this.setSidebarItems()
    // }
    '$store.state.menu.current': function(index) {
      this.current = index
      this.setSidebarItems()
    },
    $route: function (to, from) {
      //如果当前页面是第三级(为了兼容浏览器后退操作)
      if(to.meta.navType === 3) {
        this.setSidebarItems()
      }else { //如果不是三级菜单页面，则清空三级菜单
        //更新三级菜单
        this.$store.commit('SET_THRIDMENU', []);
        this.$store.commit('SET_MENU_COLLAPSE', false);
      }
    }
    // "$store.getters.userInfo": function() {
    //   this.setUserType()
    // }
  }
}
</script>

<style lang="scss" scoped>
  .righter-bar {
    .righter-bar-content {
      height: calc(100% - 60px);
      overflow-y: scroll;
    }
    // border-right: 1px solid rgba(242,242,249,1);
    font-size: 14px;
    //border-top: 1px solid #f2f2f9;
    position: fixed;
    left: 120px;
    top: 60px;
    z-index: 1000;
    background-color: #fff;
    width: 122px;
    height: 100%;
    &.collapse {
      left: 0;
      transition: all 0.3s;
    }
    .item {
      position: static;
      border-top: 1px solid #f2f2f5;
      padding-top: 16px;
      padding-bottom: 10px;
      text-align: left;
      a {
        position: relative;
        width: 102px;
        height: 30px;
        margin-left: 10px;
        padding-right: 18px;
        line-height: 30px;
        text-indent: 10px;
        color: #92929B;
        border-radius: 15px;
        &:hover {
          background-color: #EFEEFF;
        }
        &.active {
          background-color: #f0efff;
          color: #7f79ff;
        }
        &.active:after{
          position: absolute;
          right: 10px;
          top: 11px;
          content: "";
          width: 5px;
          height: 8px;
          background: url('~@/assets/images/common/icon-right.png') no-repeat;
          background-size: 5px 8px;
        }
      }
      &:first-child {
        border: none;
      }
      &:last-child {
        // border-bottom: 1px solid #f2f2f5;
      }
      h2, .item-child {
        margin-bottom: 10px;
      }
      h2 {
        font-family:PingFangSC-Medium;
        font-weight:bold;
        color:#161617;
        line-height:20px;
        font-size: 14px;
        text-indent: 20px;
      }
    }
  }
  @media screen and (min-height: 900px) {
    .righter-bar .righter-bar-content {
      height: 800px;
    }
  }
  /deep/ .item a {
    max-width: 102px;
    display: inline-block;
  }
</style>

