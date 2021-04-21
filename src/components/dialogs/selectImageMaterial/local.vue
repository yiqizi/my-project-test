/* 本地上传 */
<template>
  <div class="imageMaterial">
    <!-- 本地上传 -->
    <div class="material_wrapper material_wrapper_2" ref="wrapper" :style="{'overflow-y': loading ? 'hidden' : 'auto'}">
      <el-upload
        v-if="uploadAble"
        :multiple="multipleUpload"
        accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG"
        class="avatar-uploader"
        :title="loading ? '请加载完成后重试' : '点击上传'"
        :disabled="loading"
        :action="uploadUrl"
        :show-file-list="false"
        :data="{json: JSON.stringify({cid: cid})}"
        :on-error="handleError"
        :before-upload="beforeUpload" 
        :on-success="handleSuccess"
        :on-change="handleChange"
        :limit="100"
        :on-exceed="uploadLimit">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div v-loading="loading">
        <waterfall :col='3' :width="245" :gutterWidth="10" v-if="!loading" :data="fileList" :isTransition="false" >
          <template v-for="(item,key) in fileList">
            <div class="cell-item" :key="key" :class="{'img_active': selectedItem && selectedItem.title === item.title, 'img-checked-active': item.checked, 'cell-item-checkbox': isCheckbox}" @click="selectImg(item)">
              <img :src="item.url" alt="加载错误"/> 
              <div class="item-body">
                  <div class="item-desc">{{item.original}}</div>
              </div>
              <div class="item-checkbox" v-if="isCheckbox">
                <el-checkbox :disabled="!item.checked && selectedData.length >= max - isHave ? true : false" v-model="item.checked" @change="checkboxChange(item)">{{item.checked ? '已选择' : '选择'}}</el-checkbox>
              </div>
            </div>
          </template>
        </waterfall>
      </div>
  </div>
  <p class="note" style="color: #d3d8df;margin-top:10px;height: 16px;line-height:16px;">仅支持jpg,jpeg,png格式，大小不超过3.0MB <span v-if="!loading && fileList.length" type="text" style="margin-left:10px;font-size:14px;color:rgb(101,94,255);cursor:pointer;" @click="clearTempSave">清除上传记录</span></p>
  </div>
</template>

<script>

import utils from "@/utils";
import mixinBase from './mixinBase';
export default {
  name: "local",
  mixins: [mixinBase],
  props: ['multipleUpload'],
  data() {
    return {
      uploadAble: true,  //上传是否可用(用来清上传器缓存)

      /* 本地上传 */
      uploadUrl:`${process.env.DATA_API}/web-file/file-server/api_file_remote_upload.do`,
      fileList: [],  //最终用来显示的文件列表
      addList: [],  //添加的文件列表（上传前）
      successList: [],  //上传成功的文件列表(上传后)
      failedList: [],  //上传失败的文件列表（上传后）

      imgSrcKey: 'url', //接口返回的图片地址路径的参数名称
    };
  },
  created() {
    const tempSaveFile = localStorage.getItem('localUploadFile');
    if (tempSaveFile) {
      if(tempSaveFile=="[null]"){
        this.fileList = [];
      }else{
        this.fileList = JSON.parse(tempSaveFile);
      }
    }else{
      this.fileList = [];
    }
    this.preload(this.fileList, this.imgSrcKey);
  },
  activated() {
    
  },
  methods: {

    /**************************** 上传相关 *******************************/

    /* 上传前钩子 */
    beforeUpload(file) {

      const isJPG = file.type === 'image/jpg';
      const isJPEG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 3;
      const isNameRight = /\.jpg|\.jpeg|\.png|\.JPG|\.JPEG|\.PNG$/.test(file.name);
      if (!(isJPG || isJPEG || isPNG) || !isLt2M || !isNameRight) {
        this.$message.error('上传图片仅支持jpg,jpeg,png格式! 且上传图片大小不能超过 3MB!');
        this.failedList.push(file);
        this.loading = false;
      }
      if(this.successList.length + this.failedList.length === this.addList.length) {
        this.preload(this.fileList, this.imgSrcKey);
        this.addList = [];
        this.successList = [];
        this.failedList = [];
      }
      return (isJPG || isJPEG || isPNG) && isLt2M && isNameRight;
    },

    /* 上传成功钩子 */
    handleSuccess(response, file, fileList) {
      this.uploadAble = false;
      this.$nextTick(()=>{
        this.uploadAble = true;
      })
      let list = [];
      for(let item of fileList) {
        if(item.status == 'success') {
          list.push(item.response.data);
        }
      }

      if(this.isCheckbox){
        let copyList = utils.deepClone(list);
        const num = this.max - this.isHave - this.selectedData.length;
        copyList.forEach((item, index) => {
          if(index + 1 <= num){
            item.checked = true;
          }
        })
        this.fileList = copyList;
        //如果是最后一次触发，则在去更新selectedData
        if(fileList.length == copyList.length){
          copyList.forEach((item, index) => {
            if(item.checked){
              this.$emit('selectedItemUpdate', item, this.imgSrcKey, true);
            }
          })
        }
      }else{
        this.fileList = list;
      }

      localStorage.setItem('localUploadFile', JSON.stringify(list));

    },

    /* 上传失败 */
    handleError(err, file, fileList) {
      this.loading = true;
      if(file.status === 'fail') {
        this.failedList.push(file);
      }
      if(fileList.length == 0){
        this.$message.warning('上传失败，请稍候重试!');
      }
    },

    /* 上传文件改变 */
    handleChange(file, fileList) {
      this.loading = true;
      this.imgNow = 0;
      if(file.status === 'ready') {
        this.addList.push(file);
      }
      if(file.status === 'success') {
        this.successList.push(file);
      }

      if(this.successList.length + this.failedList.length === this.addList.length) {
        this.preload(this.fileList, this.imgSrcKey);
        this.addList = [];
        this.successList = [];
        this.failedList = [];
      }
    },

    /* 上传超过个数的处理 */
    uploadLimit() {
      this.$message.warning('最多支持上传100张！');
    },

    //删除已选择的本地上传数据
    removeCheckedData() {
      this.fileList.forEach((item) => {
        if(item.checked){
          this.$emit('selectedItemUpdate', item, this.imgSrcKey, false);
        }
      })
    },

      /* 清除缓存 */
    clearTempSave() {
      if(this.isCheckbox){
        this.removeCheckedData();
      }
      localStorage.removeItem('localUploadFile');
      this.fileList = [];
      this.imgNow = 0;
    },
    

  }
};
</script>

<style lang="scss" scoped>
/* *******************************本地上传样式*********************************** */
/deep/ .avatar-uploader{
  width: 80px;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  margin-bottom:20px;
  // margin-top:20px;
}
/deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
/deep/ .avatar-uploader .el-upload:hover {
    border-color: #655EFF;
  }
/deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: absolute;
    top:10px;
    left:10px;
    z-index: 10;
  }
/deep/ .avatar {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: middle;
/deep/ img{
      width: 80px;
      height: 80px;
      object-fit:fill;
      display: inline-block;
    }
  }
.txt_center{
  width: 100%;
  text-align: center;
  margin-top:20px;
}
</style>