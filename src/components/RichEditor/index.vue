<!-- 富文本编辑器组件 -->

<template>
  <div>
    <vue-ueditor-wrap mode="observer" :observerDebounceTime="100" v-if="config" ref="editor" v-model="newRichValue" :config="config" @ready="ready" :init="init"></vue-ueditor-wrap>
     <!-- 动态弹窗 -->
    <component v-if="dialogVisible" :is="currentDialog" :dialogVisible.sync="dialogVisible" @imageSelected="imageSelected" :imageMax="6" @videoSelected="videoSelected"></component>
  </div>
</template>
<script>
// import Vue from 'vue'
// debugger
// import VueUeditorWrap1 from 'vue-ueditor-wrap' // ES6 Module
// console.log('VueUeditorWrap1', VueUeditorWrap1)
// // const Vue = require('vue')
const VueUeditorWrap = require('vue-ueditor-wrap') // ES6 Module
console.log('VueUeditorWrap', VueUeditorWrap)
// Vue.component('vue-ueditor-wrap', VueUeditorWrap)
// import utils from '@/utils';
import dialogSelectImageMaterial from '../dialogs/selectImageMaterial/index.vue';
import dialogSelectVideo from '../dialogs/selectVideo/index.vue';
export default {
  name: 'RichEditor',
  props: ['richValue', 'myConfig'],
  components: {VueUeditorWrap, dialogSelectVideo, dialogSelectImageMaterial},
  inject:['provideEditor'],
  data() {
    return {
      editor:null,//编辑器实例,
      defaultConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: '100%',
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: `${this.provideEditor.processDATA_API}/web-file/file-server/api_file_remote_upload.do`,
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
		    UEDITOR_HOME_URL: this.provideEditor.processNODE_ENV !== 'dev' ? this.provideEditor.processDOMAIN + '/common-static/UEditor/' : '/static/UEditor/'
      },
      config: null,
      dialogVisible: false,
      currentDialog: '',
    }
  },
  computed:{
    newRichValue:{
      get(){
        return this.richValue
      },
      set(val){
        const target = 'https://statics.xiumi.us/stc/';
        const convertData = val.replace(new RegExp(target,'g'),"https://statics.xiumi.us/stc/");
        this.$emit('editorValueUpdate', convertData);
      }
    }
  },
  created() {
    console.log('公共组件富文本richedtir--555-')
    this.config = Object.assign(this.defaultConfig, this.myConfig);
  },
  mounted() {
  },

  methods: {

    init() {
      const _self = this;
       //注册秀米编辑器按钮和弹窗
      // UE.registerUI('dialog', function (editor, uiName) {
      //   var btn = new UE.ui.Button({
      //     name   : 'xiumi-connect',
      //     title  : '秀米',
      //     cssRules : "background-image: url('" + _self.config.UEDITOR_HOME_URL + "themes/default/images/xiumi_logo.png') !important;background-size: cover;",
      //     onclick: function () {
      //           var dialog = new UE.ui.Dialog({
      //               iframeUrl: _self.config.UEDITOR_HOME_URL + 'dialogs/xiumi/xiumi-ue-dialog-v5.html',
      //               editor   : editor,
      //               name     : 'xiumi-connect',
      //               title    : "秀米图文消息助手",
      //               cssRules : "width: " + (window.innerWidth - 60) + "px;" + "height: " + (window.innerHeight - 60) + "px;",
      //           });
      //           dialog.render();
      //           dialog.open();
      //       }
      //   });

      //   return btn;
      // });

      UE.registerUI('seletedImage', function(editor, uiName) {
          //创建一个button
          var btn = new UE.ui.Button({
              //按钮的名字
              name: uiName,
              //提示
              title: '选择图片',
              //添加额外样式，指定icon图标，这里默认使用一个重复的icon
              cssRules: 'background-position: -380px 0;',
              //点击时执行的命令
              onclick: function() {
                _self.dialogVisible = true;
                _self.currentDialog = 'dialogSelectImageMaterial';
              }
          });
          //因为你是添加button,所以需要返回这个button
          return btn;
      });

      UE.registerUI('seletedVideo', function(editor, uiName) {
          //创建一个button
          var btn = new UE.ui.Button({
              //按钮的名字
              name: uiName,
              //提示
              title: '选择视频',
              //添加额外样式，指定icon图标，这里默认使用一个重复的icon
              cssRules: 'background-position: -320px -20px;',
              //点击时执行的命令
              onclick: function() {
                _self.dialogVisible = true;
                _self.currentDialog = 'dialogSelectVideo';
              }
          });
          //因为你是添加button,所以需要返回这个button
          return btn;
      });
    },

     ready (editorInstance) {
      const _self = this;
      this.$emit('ready');
      this.editor = editorInstance;
      const iframe = editorInstance.iframe;
      const document = iframe.contentDocument;
      this.utils.asyncLoadCss(document, this.config.UEDITOR_HOME_URL + 'dialogs/xiumi/xiumi-ue-v5.css').then(()=>{
        // console.log('秀米编辑器样式加载成功！')
      }).catch(()=>{
        console.error('秀米编辑器样式加载失败！')
      });

      this.editor.addListener('fullscreenchanged',(event,isFullScreen)=>{
        const container = this.editor.container;
        if(isFullScreen) {
          container.style.cssText = 'border: 0px; position: absolute; left: 0px; top: 0px; width: 1920px; height: 938px; z-index: 2099!important; zoom: 1;'
        }else{
          container.style.zIndex = 'initial'
        }
      })
    },

    /* 弹框选中图片 */
    imageSelected(dialogData) {
      let html = dialogData.reduce((pre,next)=>pre+`<img _src="${ next.filePath}" src="${ next.filePath}" style="max-width:100%"/>`,'')
      this.editor.execCommand('insertHtml', html);
    },


    /* 弹框选中视频 */
    videoSelected(dialogData) {
      let html = `<iframe src="${this.config.UEDITOR_HOME_URL}dialogs/myVideo/myVideo.html" data-video="${dialogData.filePath}" style="border:none;"></iframe>`;
      this.editor.execCommand('insertHtml', html);
      if(this.editor) {//修复监控报错
        if(this.editor.body) {
          let value = this.editor.body.innerHTML;
          const target = 'https://statics.xiumi.us/stc/';
          const convertData = value.replace(new RegExp(target,'g'),"https://statics.xiumi.us/stc/");
          this.$emit('editorValueUpdate', convertData);
        }
      }
    }
  }
}
</script>
<style lang="scss">
#editor{
  text-align:left;
}
iframe{
  width:99%;
}
.edui-box.edui-button.edui-for-map.edui-default {
  display: none;
  opacity: 0;
  width: 0;
  pointer-events: none;
}
</style>
