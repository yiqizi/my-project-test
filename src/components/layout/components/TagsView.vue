<template>
  <div class="tags-view-container">
    <div class="location">当前位置：</div>
    <breadcrumb class="breadcrumb-container"/>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: { Breadcrumb},
  data() {
    return {

    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view-container {
  height: 60px;
  width: 100%;
  line-height: 60px;
  padding:0px 20px;
  }

.location{
  height: 30px;
  width: 80px;
  font-size: 14px;
  line-height: 30px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: middle;
}
.app-breadcrumb.el-breadcrumb{
  line-height: 30px !important;
  display: inline-block;
  vertical-align: middle;
}

</style>

