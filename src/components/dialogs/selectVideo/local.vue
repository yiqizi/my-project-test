/* 本地上传 */
<template>
  <div class="videoMaterial">
    <!-- 本地上传 -->
    <div class="material_wrapper material_wrapper_2" ref="wrapper" :style="{'overflow-y': loading ? 'hidden' : 'auto'}">
      <el-upload
        v-if="uploadAble"
        :multiple="multipleUpload"
        accept=".mp4,.MP4"
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
        :on-progress="uploadVideoProcess"
        :limit="6"
        :on-exceed="uploadLimit">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <p class="note" style="color: #d3d8df;margin: 8px 0;height: 16px;line-height:16px;">大小不超过10mb，支持mp4格式 <span v-if="!loading && fileList.length" type="text" style="margin-left:10px;font-size:14px;color:rgb(101,94,255);cursor:pointer;" @click="clearTempSave">清除上传记录</span></p>
      <div v-loading="loading">
          <ul class="tile-list n3 video_list" v-if="fileList.length">
            <li v-for="(item, key) of fileList" :key="key" class="cell-item" :class="{'video_active': selectedItem && selectedItem.title === item.title, 'video-checked-active': item.checked, 'cell-item-checkbox': isCheckbox}" @click="selectVideo(item)">
              <div class="video_head">
                <span>{{item.createTime}}</span>
                <span>{{item.size ? Math.floor(item.size / 1024 / 1024 * 100) / 100 + 'MB' : '-- MB'}}</span>
              </div>
              <div class="video_body"> 
                <p>{{item.original}}</p>
                <video
                  :src="item.url"
                  controls="controls"
                  class="video"
                  :poster="item.frameUrl"
                >您的浏览器不支持 video 标签。</video>
              </div>
              <div class="item-checkbox" v-if="isCheckbox">
                <el-checkbox :disabled="!item.checked && selectedData.length >= max - isHave ? true : false" v-model="item.checked" @change="checkboxChange(item)">{{item.checked ? '已选择' : '选择'}}</el-checkbox>
              </div>
            </li>
          </ul>
      </div>
    </div>
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

      keyObj: { //接口返回的视频地址路径和封面图片路径的参数名称
        pathKey: 'url',
        coverKey: 'frameUrl'
      }, 
    };
  },
  created() {
    const tempSaveFile = localStorage.getItem('localUploadVideoFile');
    if(tempSaveFile) {
      this.fileList = JSON.parse(tempSaveFile);
    }
  },
  activated() {
    
  },
  methods: {

    /**************************** 上传相关 *******************************/

    /* 上传前钩子 */
    beforeUpload(file) {
      const isLt10M = file.size / 1024 / 1024 < 10;
      // if (!['video/mp4', 'video/mov', 'video/m4v', 'video/flv', 'video/x-flv', 'video/mkv', 'video/wmv', 'video/avi', 'video/rmvb', 'video/3gp'].includes(file.type) || !isLt10M) {
      if (!['video/mp4'].includes(file.type) || !isLt10M) {
        this.$message.error('请上传正确的视频格式! 且上传视频大小不能超过 10MB!');
        this.failedList.push(file);
        this.loading = false;
        return false;
      }
      return true;
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
              this.$emit('selectedItemUpdate', item, this.keyObj, true);
            }
          })
        }
      }else{
        this.fileList = list;
      }
      localStorage.setItem('localUploadVideoFile', JSON.stringify(list));
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
      if(file.status === 'ready') {
        this.addList.push(file);
      }
      if(file.status === 'success') {
        this.successList.push(file);
      }

      if(this.successList.length + this.failedList.length === this.addList.length) {
        this.loading = false;
        this.addList = [];
        this.successList = [];
        this.failedList = [];
      }
    },

    /* 上传超过个数的处理 */
    uploadLimit() {
      this.$message.warning('最多支持上传6个视频！');
    },

    //进度条
	  uploadVideoProcess (event, file, fileList) {
        // this.videoFlag = true;
        // this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },

    //删除已选择的本地上传数据
    removeCheckedData() {
      this.fileList.forEach((item) => {
        if(item.checked){
          this.$emit('selectedItemUpdate', item, this.keyObj, false);
        }
      })
    },

      /* 清除缓存 */
    clearTempSave() {
      if(this.isCheckbox){
        this.removeCheckedData();
      }
      
      localStorage.removeItem('localUploadVideoFile');
      this.fileList = [];
    }

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