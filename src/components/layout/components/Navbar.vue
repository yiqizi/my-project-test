<template>
  <div>
    <div class="navbar" :class="{'navbar-hide-left': $route.meta.hideLeft}">
      <div class="navbar-item">
        <i class="el-icon-arrow-left" @click="backToPre" v-if="$route.path === '/shop/m_templateEdit'"></i>
        <span class="shop_name">{{shopName1}}</span>
        <span class="edition" v-show="guideType!=''">{{guideType}}</span>
        <el-button class="border_btn guide" v-if="isNotCompleteGuide" @click="goShopGulde">开店引导</el-button>
      </div>
      <!-- <div class="navbar-item"></div> -->
      <div class="right-menu">
        <span class="set_meal" @click="upgrade">套餐升级</span>
        <!-- <router-link to="/profile/upgrade" class="set_meal">套餐升级</router-link> -->
        <a
          :href="zxLink + helpLink"
          target="_blank"
          :underline="false"
          class="set_meal"
          @click="onHelp"
        >帮助中心</a>
        <el-input v-model="searchName" placeholder="请输入需要帮助的内容" class="search_int">
          <el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
        </el-input>

        <!-- <el-button  icon="el-icon-search" size="small"  class="mr20">搜索</el-button>| -->
        <el-dropdown class="avatar-container right-menu-item" trigger="click">
          <div class="avatar-wrapper">
            <i class="el-icon-user-solid" />
            {{(userInfo && userInfo.userName) || '用户名称' }}
            <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>
                <!-- {{ $t('navbar.dashboard') }} -->
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item @click.native="init">
              <span>
                <i class="el-icon-s-operation"></i>
                切换店铺
              </span>
            </el-dropdown-item>
            <!-- <el-dropdown-item divided>
              <router-link to="/profile/accountInfo">
                <i class="el-icon-s-order"></i>
                账号信息
              </router-link>
            </el-dropdown-item> -->
            <el-dropdown-item divided v-if="!userType">
              <router-link to="/profile/passwordChange">
                <i class="el-icon-lock"></i>
                修改密码
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">
                <i class="el-icon-setting"></i>
                退出登录
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <shopsDialog
      :showShopsDialog="showShopsDialog"
      @handleClose="handleClose"
      :shopList="shopList"
      :route="route"
    ></shopsDialog>
  </div>
</template>

<script>
import { mapGetters, Store } from "vuex";
import { getToken } from '@/system/auth'
import Hamburger from "@/components/Hamburger";
import shopsDialog from "@/views/login/shopsDialog";
import $ from "jquery";
// import { userInfo } from 'os';

export default {
  data() {
    return {
      showShopsDialog: false,
      shopList: [],
      route: "index",
      // shopName: "",
      searchName: "", //搜索名称
      helpLink: "",
      zxLink: `${process.env.ZX_HELP}`, //链接
      guideType:'',//版本类型
      shopName1: localStorage.getItem("shopInfos") && JSON.parse(localStorage.getItem('shopInfos')).shopName//解決同一浏览器下不同标签页切换店铺后原标签页店铺名不更新的问题
      // isCompleteGuide: false // 是否完成开店引导
    };
  },
  components: {
    Hamburger,
    shopsDialog
  },
  computed: {
    ...mapGetters(["sidebar", "device", "shopName","userInfo","shopInfos"]),
    cid() {
      return this.shopInfos.id;
    },
    userType() {
      const {type} = this.userInfo
      return type == 'admin'
    },
    storeGuide() {
      return this.$store.state.shop.storeGuide
    },
    isNotCompleteGuide() {
      return this.userType && this.storeGuide !== 1
    }
  },
  created() {
    // this.getShopName();
    this.getGuide();
    // this.getShopInfo()
  },
  methods: {
    //套餐升级
    upgrade(){
      if(this.userInfo.type==="user"){
        const msfList = this.shopInfos.data.functions[0].children.find(item=>item.name==='概况')
        if(msfList){
          if(!(msfList.children && msfList.children.find(item=>item.name==='套餐升级'))){
            this.$message.error('您暂无权限查看套餐升级内容');
            return
          }
        }else{
          this.$message.error('您暂无权限查看套餐升级内容');
          return;
        }
      }
      this.$router.push({ path: '/profile/upgrade'})
    },
    goShopGulde() {
      this.$router.push({ path: '/profile/shopGuide'})
    },
    // getShopInfo() {
    //   let id = this.cid;
    //   this._apis.shopInfo
    //     .getShopInfo({ id: id })
    //     .then(response => {
    //       console.log('21212',  response.storeGuide, response)

    //       this.isCompleteGuide = this.userType && response && response.storeGuide !== 1
    //     })
    // },
    onHelp() {
      let link =
          `/cms/search?type=service&dept=${process.env.BASE_DOMAIN}&cat=yidongshangcheng`,
        tag =
          document.querySelector(".sidebar-lefter .active span") ||
          document.querySelector(".sidebar-lefter .active a");
      if (tag) {
        const text = tag.innerText;
        if (text && text == "概况") {
          this.helpLink = `/cms?type=service&dept=${process.env.BASE_DOMAIN}&cat=yidongshangcheng`;
          return;
        }
        link += `&wd=${text}`;
        this.helpLink = link;
      }
    },

    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
      this.$store.dispatch("getShopInfo");
    },
    //推出登录
    logout() {
      const shopInfos = localStorage.getItem('shopInfos');
      const userInfo = localStorage.getItem('userInfo');
      const token = getToken('authToken');
      // if (!shopInfos || !userInfo || !token) {
      //   this.$router.replace({ path: '/oldlogin' })
      //   return false
      // }
      if(process.env.NODE_ENV === 'dev'){
        this.$router.replace({ path: '/oldlogin' })
      }else{
        this.$store.dispatch("LogOut").then(() => {
        this.$store.commit('setCmsToken', null)
          this.logoutHref()
        });
      }
    },
    logoutHref(){
      const encryptUrl = `${window.location.protocol+process.env.DATA_API}/bp-subsys/denglu/login`
      window.location.href = encryptUrl
    },
    //监听弹窗关闭
    handleClose() {
      this.showShopsDialog = false;
      // this.getShopName();
      this.getGuide();
    },

    //获取店铺名称
    getShopName() {
      let shopInfo = this.shopInfos;
      this.shopName = shopInfo && shopInfo.shopName;
    },

    //切换店铺
    init() {
      let info = this.userInfo;
      // let arr = Object.keys(info.shopInfoMap);
      let data = info.shopInfoMap
      if(data && Object.keys(data).length > 0){
        for(let key in data){
          let shopObj = data[key]
          this.shopList.push(shopObj)
        }
      }
      this.showShopsDialog = true
    },
    //帮助中心搜索
    onSearch() {
      window.open(
        `${this.zxLink}/cms/search?type=service&wd=${this.searchName}&dept=${process.env.BASE_DOMAIN}&cat=yidongshangcheng`
      );
    },
    //返回到上一个页面
    backToPre() {
        this.$router.go(-1)
    },

    //获取版本类型
     getGuide(){
       this.$store.dispatch('getShopInfo').then( data => {
          if(data.bossProductId === 100){
            this.guideType = '移动商城-专业版'
          }else if(data.bossProductId === 3){
            this.guideType = '移动商城-基础版'
          }else if(data.bossProductId === 101){
            this.guideType = '全网商城-基础版'
          }else if(data.bossProductId === 102){
            this.guideType = '全网商城-专业版'
          }
      }).catch((error) => {
          console.error(error);
      });
      this.shopName1 = localStorage.getItem("shopInfos") && JSON.parse(localStorage.getItem('shopInfos')).shopName
    },
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 60px;
  width: calc(100% - 120px);
  line-height: 60px;
  border-radius: 0px !important;
  background: #fff;
  color: #92929b;
  padding: 0px 20px;
  font-size: 14px;
  position: fixed;
  left: 120px;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f9;
  &.navbar-hide-left {
    display: none;
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    // display: none;
    // float: right;
    height: 100%;
    margin-right: 20px;
    &:focus {
      outline: none;
    }
    .set_meal {
      margin-right: 20px;
      font-size: 14px;
      color: #44434b;
      cursor: pointer;
    }
    .search_int {
      width: 175px;
      height: 22px;
      border-radius: 2px;
      font-size: 10px;
      .el-input-group__append {
        background: #666666;
      }
    }
    .mr20 {
      margin-right: 20px;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .international {
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 60px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 24px;
          font-size: 12px;
        }
      }
    }
  }
}
.navbar-item {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-weight: bold;
	.el-icon-arrow-left {
		font-size: 20px;
		margin-right: 10px;
		cursor: pointer;
	}
}
.search_int /deep/.el-input-group__append {
  background: #666666;
  color: #fff;
  border: 1px solid #666666;
  width: 23px;
  padding: 0;
  text-align: center;
}
.search_int /deep/ .el-input__inner {
  line-height: 22px;
  height: 22px;
}
.shop_name{
  font-size: 14px;
  color: #161617;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
}
.edition{
  padding: 0 5px;
  height: 26px;
  line-height: 26px;
  border-radius: 4px;
  border:1px solid rgba(151,151,151,1);
  color:#979797;
  font-size: 12px;
  text-align: center;
  margin-left: 15px;
}
.guide{
  width: 80px;
  height: 26px;
  line-height: 26px;
  border-radius:4px;
  border:1px solid rgba(101,94,255,1);
  margin-left: 15px;
  padding: 0;
}
</style>
