<template>
  <div class="empty-page">
    <div>
      <i class="el-icon-warning"></i>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: '暂无信息'
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    color: #00617f;
    text-align: center;
    font-size: 14px;
    padding: 0.3rem 0;
    i {
      font-size: 26px;
      margin-bottom: 0.2rem;
    }
  }
}
</style>
