<template>
  <div>
    <el-dialog
      title="请选择您要打印配送单类型"
      :visible.sync="printDialogVisible"
      width="500px"
      top="calc((100vh - 300px) / 2)"
      center
      :close-on-click-modal="false"
      :before-close="handleCloseDialog"
      >
      <div class="printBody">
        <el-radio v-model="printRadio" :label="1">小票配送单</el-radio>
        <el-radio v-model="printRadio" :label="2">配送单（A4纸）</el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" class="dialogBtn" size="medium" :disabled="disabledSure" :loading="false" @click="handleSubmit">确 定</el-button>
        <el-button size="medium" class="dialogBtn" @click="handleCancel">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "DialogPrintList",
    props: ["printDialogVisible","printPath","printQuery"],
    computed: {
      disabledSure() {
        if(this.printRadio == null){return true}
      }
    },
    data() {
      return {
        printRadio:null,
      };
    },
    methods: {
      handleSubmit() {
        //小票配送单
        if(this.printRadio==1){
          this._apis.order.getPrinterSetDetail().then(res => {
            // 选择小票配送单，点击确定，未设置过小票打印机的，原页面打开连接打印机页面，已经设置过小票打印机的，页面直接打开下票预览页；
            if(!!res){
              //printType 0：最后一次发货(入口:从发货后打印配送单)；1：所有发货(入口:批量打印配送单)
              // status 连接状态 0离线，1在线，2异常（缺纸）
              // this.printQuery.status=res.status
              this.$router.push({path: '/order/printPreview', query: this.printQuery})
            } else {
              // 陈静，改为新标签页面打开，周优化2021-02-01期
              let routeData = this.$router.resolve({path: '/order/printerSeting', query: this.printQuery});
              window.open(routeData.href, '_blank');
            }
          })
            .catch(error => {
              this.$message.error(error)
            });
          //
        }
        //A4纸配送单
        if(this.printRadio==2){
          this.$router.push({
            path: this.printPath,
            query: this.printQuery
          })
        }
        this.$emit("closeDialogVisible")
        setTimeout(()=>{this.printRadio=null},1000)
      },
      handleCancel(){
        this.printRadio = null;
        this.$emit("closeDialogVisible")
      },
      handleCloseDialog(){
        this.$emit("closeDialogVisible")
      }
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
/deep/ .el-dialog{
  height: 300px;
  box-shadow:0px 5px 20px 0px rgba(0,0,0,0.1);
  border-radius:10px;
  border:1px solid #CCCCCC;
}
/deep/ .el-dialog__header{
  height: 60px;
  padding: 0 24px 0 20px;
  background: #F1F0FF;
  border-radius:10px 10px 0px 0px;
  text-align: left;
}
/deep/ .el-dialog__title{
  line-height: 60px;
  font-size: 22px;
  color: #44434B;
  font-weight: 400;
}
/deep/ .el-icon-close:before{
  content:'';
  background: url('../../assets/images/icon_delete_@2x.png') no-repeat center center;
  background-size: cover;
  width: 18px;
  height: 18px;
  display: block;
}
/deep/ .el-dialog--center .el-dialog__body{
   padding: 70px 0px 86px;
}
.printBody{
  display: flex;
  justify-content: space-around;
}
.dialogBtn{
  padding: 9px 15px;
}
/deep/ .el-dialog__footer {
    padding: 1px 0px 35px;
}
/deep/ .el-dialog__header{
  background: #F6F7FA;
  .el-dialog__title{
    font-size: 16px;
    padding-left: 0;
    font-weight: 500;
    color: #44434B;
  }
}
/deep/ .el-icon-close:before{
  width: 11px;
  height: 11px;
}
</style>
