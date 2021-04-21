<template>
  <section class="app-main" :class="{'app-main-hide-left': $route.meta.hideLeft}">
    <div class="content-box">
      <div v-if="!$route.meta.hideLeft" class="content-menu" :class="{
        'content-menu-thrid': $store.getters.thridMenu.length !== 0, 
        'collapse': collapse
        }">
        <!-- <sidebar class="sidebar-righter" /> -->
        <righter-bar ref="righterBar"></righter-bar>
      </div>
      <div ref="contentMain" class="content-main content-info" :class="{'content-main-classify': $route.meta.classify, m_shopEditor: $route.meta.m_shopEditor}">
        <keep-alive :include="cachedViews">
          <router-view :key="key"/>
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script>
import Sidebar from './Sidebar'
import RighterBar from './RighterBar'

export default {
  name: 'AppMain',
  data() {
    return {

    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    },
    collapse() {
      return this.$store.getters.collapse;
    }
  },
  components: {
    Sidebar,
    RighterBar
  },
  watch:{
    $route(to, from){
      this.$refs.contentMain.scrollTop = 0;
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
    height: calc(100% - 60px);
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: 60px;
    &.app-main-hide-left {
      height: 100%;
      margin-top: 0;
    }
  .content-box {
    display: flex;
    height: 100%;
    .content-menu {
      position: relative;
      background-color: #fff;
      width: 122px;
      text-align: center;
      height: 100%;
      &.content-menu-thrid {
        width: 244px;
      }
      &.collapse{
        width: 122px;
        transition: all 0.3s;
      }
    }
    .content-main {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      overflow-x: auto;
      width: 0;
    }
  }
}
</style>
<style>
.el-card.is-always-shadow{
  margin-bottom:24px;
  box-shadow:5px 5px 10px 0px rgba(229,239,255,1) !important;
  border-radius:20px !important;
}
</style>


