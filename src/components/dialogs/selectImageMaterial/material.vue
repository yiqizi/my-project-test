/* 图片素材 */
<template>
      <div class="imageMaterial">
        <div class="material_head">
          <div class="select">
            <el-cascader :props="cascaderProps" @change="cascaderChange" placeholder="全部"></el-cascader>
          </div>
          <el-input v-model="materialName" placeholder="请输入图片名称" clearable></el-input>
          <el-button type="primary" @click="search">搜 索</el-button>
        </div>
        <div class="material_wrapper" ref="wrapper" v-loading="loading" :style="{'overflow-y': loading ? 'hidden' : 'auto'}">
            <template v-if="materialResultList.length">
              <waterfall :col='3' :width="245" :gutterWidth="10" :data="materialResultList" :isTransition="false" v-if="!loading">
                <template v-for="(item,key) in materialResultList">
                  <div v-if="isCheckbox" style="display: none;">{{JSON.stringify(selectedData).includes(item.id) ? item.checked = true : item.checked = false}}</div>
                  <div class="cell-item" :key="key" :class="{'img_active':  selectedItem && selectedItem.id === item.id, 'img-checked-active': item.checked, 'cell-item-checkbox': isCheckbox}" @click="selectImg(item)">
                    <img :src="item.filePath" alt="加载错误"/> 
                    <div class="item-body">
                        <div class="item-desc">{{item.fileName}}</div>
                    </div>
                    <div class="item-checkbox" v-if="isCheckbox">
                      <el-checkbox :disabled="!item.checked && selectedData.length >= max - isHave ? true : false" v-model="item.checked" @change="checkboxChange(item)">{{item.checked ? '已选择' : '选择'}}</el-checkbox>
                    </div>
                  </div>
                </template>
              </waterfall>
            </template>
            <p class="empty" v-else>暂无数据</p>
        </div>
        <p class="pages" v-if="materialResultList.length">
            <el-pagination
            :background="true"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50, 100]"
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
      pageSize:10,   //一页条数
      materialName: '',  //素材库文件名称，用于检索
      materialGroupId:'0',  //素材库分组id
      cascaderProps: {  //级联选择器属性
        lazy: true,  //是否懒加载
        checkStrictly: true,  //是否严格的遵守父子节点不互相关联
        lazyLoad: this.cascaderLazyload
      },

      imgSrcKey: 'filePath', //接口返回的图片地址路径的参数名称
    };
  },
  
  created() {
    this.fetch();
  },
  activated() {
    
  },
  methods: {

    /**************************** 列表数据拉取相关 *******************************/

    /* 查询素材库图片 */
    fetch() {
      this.loading = true;
      this.imgNow = 0;
      this._apis.file.getMaterialList({
        fileGroupInfoId:this.materialGroupId == '0'?'':this.materialGroupId || '',
        startIndex: this.currentPage,
        pageSize: this.pageSize,
        sourceMaterialType:"0",
        fileName: this.materialName
      }).then((response)=>{
        this.materialResultList = response.list;
        this.preload(response.list, this.imgSrcKey);
        this.total = response.total;
      }).catch((error)=>{
        this.$message.error(error);
        this.loading = false;
      });
    },

    //查询素材库分组
    getMaterialGroups(parentId, callback){
      this._apis.file.getGroup({
        type:'0',
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
      this.materialGroupId = value[val];
    },

    /* 级联选择器懒加载回调 */
    cascaderLazyload(node, resolve) {
      const { level } = node;
      const { data } = node;
      let parentId = data ? data.value : '0';
      this.materialGroupId = data ? data.value: '0';
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