<template>
  <div class="errPage-container">
        <h2>抱歉！您没有权限去该页面</h2>
        <!-- <h6>如有不满请联系你领导</h6> -->
        <p>您可以:</p>
        <p class="link-type">
          <router-link to="/profile/profile">点击回到首页</router-link>
        </p>
  </div>
</template>

<script>
import errGif from '@/assets/images/401_images/401.gif'

export default {
  name: 'Page401',
  data() {
    return { }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/profile/profile' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .errPage-container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    h2{
      width: 100%;
      line-height: 50px;
    }
    p{
      width: 100%;
      line-height: 30px;
    }
  }
  .link-type{
    color:#655eff;
  }
</style>
