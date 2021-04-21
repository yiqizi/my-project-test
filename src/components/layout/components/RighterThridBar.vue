<template>
  <div class="righter-bar" :class="{'collapse': $store.getters.collapse}">
    <div class="righter-bar-content" v-calcHeight="60">
      <div class="item">
        <template v-for="(item, index) in $store.getters.thridMenu">
          <div class="item-child" :key="item.path" v-if="!item.hidden">
            <h2 v-if="index === 0">{{item.meta.tabTitle}}</h2>
            <div>
              <a @click="routerClick(item.name)" :title="item.meta.title" class="ellipsis"
                :class="{active: $route.path.includes(item.path)}">{{item.meta.title}}</a>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="switch_btn" :class="{'collapse': collapse}" @click="switchMenu">
      <i :class="{'open': !collapse, 'close': collapse}"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    collapse() {
      return this.$store.getters.collapse;
    }
  },
  methods: {
    routerClick(name) {
      //点击清除cms存储的路径
      localStorage.removeItem('cms_router_path');
      //如果是cms页面并且当前已经是跳转至的页面，则发送通知cms系统跳转
      if(this.$route.name.includes('cms') && this.$route.name === name) {
        this._globalEvent.$emit('cmsRouter', 'goRoute');
      }
      //收起二级菜单
      this.$store.commit('SET_MENU_COLLAPSE', true);
      //跳转页面
      this.$router.push({
        name
      });
    },
    switchMenu () {
      this.$store.commit('SET_MENU_COLLAPSE', !this.$store.getters.collapse)
    },
  }
}
</script>

<style lang="scss" scoped>
  .righter-bar {
    .righter-bar-content {
      height: calc(100% - 60px);
      overflow-y: scroll;
    }
    border-left: 1px solid rgba(242,242,249,1);
    font-size: 14px;
    position: fixed;
    left: 242px;
    top: 60px;
    z-index: 1000;
    background-color: #fff;
    width: 122px;
    height: 100%;
    &.collapse {
      left: 120px;
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
  .switch_btn{
      z-index: 9999;
      position: absolute;
      left: -17px;
      top: 12px;
      color: #bbb;
      cursor: pointer;
      width:16px;
      height:28px;
      i{
        width:100%;
        height:100%;
        display:block;
        &.open{
          background: url('~@/assets/images/common/icon_shouqi.png') no-repeat 0 0;
        }
        &.close{
          background: url('~@/assets/images/common/icon_zhankai.png') no-repeat 0 0;
        }
      }
      &.collapse{
        left: 0px;
        transition: all 0.3s;
      }
    }
</style>

