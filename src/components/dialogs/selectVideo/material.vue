/* 素材视频 */
<template>
      <div class="videoMaterial">
        <div class="material_head">
          <div class="select">
            <el-cascader :props="cascaderProps" @change="cascaderChange" placeholder="全部"></el-cascader>
          </div>
          <el-input v-model="materialName" placeholder="请输入视频名称" clearable></el-input>
          <el-button type="primary" @click="search">搜 索</el-button>
        </div>
        <div class="material_wrapper" ref="wrapper" v-loading="loading" :style="{'overflow-y': loading ? 'hidden' : 'auto'}">
            <template v-if="materialResultList.length">
              <ul class="tile-list n3 video_list" v-if="materialResultList.length">
                <template v-for="(item, key) of materialResultList">  
                  <li v-if="isCheckbox" style="display: none;">{{JSON.stringify(selectedData).includes(item.id) ? item.checked = true : item.checked = false}}</li>
                  <li :key="key" class="cell-item" :class="{'video_active': selectedItem && selectedItem.id === item.id, 'video-checked-active': item.checked, 'cell-item-checkbox': isCheckbox}" @click="selectVideo(item)">
                    <div class="video_head">
                      <span>{{item.createTime}}</span>
                      <span>{{(item.fileSize ? Math.floor(item.fileSize / 1024 / 1024 * 100) / 100 + 'MB' : '-- MB')}}</span>
                    </div>
                    <div class="video_body">
                      <p>{{item.name}}</p>
                      <video
                        :src="item.filePath"
                        controls="controls"
                        class="video"
                        :poster="item.fileCover"
                      >您的浏览器不支持 video 标签。</video>
                    </div>
                    <div class="item-checkbox" v-if="isCheckbox">
                      <el-checkbox :disabled="!item.checked && selectedData.length >= max - isHave ? true : false" v-model="item.checked" @change="checkboxChange(item)">{{item.checked ? '已选择' : '选择'}}</el-checkbox>
                    </div>
                  </li>
                </template>
              </ul>
            </template>
            <p class="empty" v-else>暂无数据</p>
        </div>
        <p class="pages" v-if="materialResultList.length">
            <el-pagination
            :background="true"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[9, 18, 27, 45, 90, 100]"
            :page-size="pageSize"
            layout="prev, pager, next, sizes"
            :total="total*1"
            class="page_nav">
            </el-pagination>
        </p>
      </div>
</template>

<script>
import utils from "@/utils";
import mixinBase from './mixinBase';
export default {
  name: "material",
  mixins: [mixinBase],
  data() {
    return {
      /* 素材库 */
      materialResultList: [], //素材库列表数据
      pageSize:9,   //一页条数
      materialName: '',  //素材库文件名称，用于检索
      materialGroupId:'',  //素材库分组id
      cascaderProps: {  //级联选择器属性
        lazy: true,  //是否懒加载
        checkStrictly: true,  //是否严格的遵守父子节点不互相关联
        lazyLoad: this.cascaderLazyload
      },

      keyObj: { //接口返回的视频地址路径和封面图片路径的参数名称
        pathKey: 'filePath',
        coverKey: 'fileCover'
      }, 
    };
  },
  
  created() {
    this.fetch();
  },
  activated() {
    
  },
  methods: {

    /**************************** 列表数据拉取相关 *******************************/

    /* 查询素材库视频 */
    fetch() {
      this.loading = true;
      this._apis.file.getMaterialList({
        fileGroupInfoId:this.materialGroupId || '',
        startIndex: this.currentPage,
        pageSize: this.pageSize,
        sourceMaterialType:"2",
        fileName: this.materialName
      }).then((response)=>{
        this.materialResultList = response.list;
        this.total = response.total;
        this.loading = false;
      }).catch((error)=>{
        this.$message.error(error);
        this.loading = false;
      });
    },

    //查询素材库分组
    getMaterialGroups(parentId, callback){
      this._apis.file.getGroup({
        type:'1',
        parentId
      }).then((response)=>{
        callback && callback(response);
      }).catch((error)=>{
        this.$message.error(error);
      })
    },

    


    /************************ 素材库分组，级联选择器分相关   **********************/

    /* 级联选择器选中改变，赋值给分组id，用于获取图片列表 */
    cascaderChange(value) {
      let val=value.length-1;
      this.materialGroupId = value[val] === '0' ? '' : value[val];
    },

    /* 级联选择器懒加载回调 */
    cascaderLazyload(node, resolve) {
      const { level } = node;
      const { data } = node;
      let parentId = data ? data.value : '0';
      this.materialGroupId = data ? data.value: '';
      this.getMaterialGroups(parentId, (response)=>{
        let nodes = level === 0 ?[{
          value: '0',
          label: '全部',
          leaf: true
        }] : [];
        if(response && Array.isArray(response)) {
          for(let item of response) {
            nodes.push({
              value: item.id,
              label: item.name
            })
          }
        }
        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
        resolve(nodes);
      });
    }
  }
};
</script>