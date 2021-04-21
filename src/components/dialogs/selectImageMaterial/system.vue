/* 系统素材 */
<template>
  <div class="imageMaterial">
    <div class="icon_head">
      <span class="title">图标分组</span>
      <div class="select">
        <el-select v-model="systemGroupId" placeholder="全部">
          <el-option value="">全部</el-option>
          <el-option
              v-for="item in systemGroupList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
        </el-select>
      </div>
      <el-button type="primary" @click="search">搜 索</el-button>
    </div>
    <div class="icon_wrapper" ref="wrapper" v-loading="loading">
      <template v-if="systemResultList.length">
          <div style="display:none">{{selectedItem}}</div>
          <ul v-if="!loading">
            <template v-for="(item,key) in systemResultList">
              <li v-if="isCheckbox" style="display: none;">{{JSON.stringify(selectedData).includes(item.address) ? item.checked = true : item.checked = false}}</li>
              <li class="cell-item" :key="key" :class="{'img_active': selectedItem && selectedItem.id === item.id, 'img-checked-active': item.checked, 'cell-item-checkbox': isCheckbox}" @click="selectImg(item)">
                <div>
                  <img :src="item.address" alt="加载错误"/>
                  <div class="item-checkbox" v-if="isCheckbox">
                    <el-checkbox :disabled="!item.checked && selectedData.length >= max - isHave ? true : false" v-model="item.checked" @change="checkboxChange(item)">{{item.checked ? '已选择' : '选择'}}</el-checkbox>
                  </div> 
                </div>
                <!-- <p class="item-desc">{{item.id}}</p> -->
              </li>
            </template>
          </ul>
      </template>
      <p class="empty" v-else>暂无数据</p>
    </div>
    <p class="pages" v-if="systemResultList.length">
        <el-pagination
        :background="true"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[48, 96, 144, 240, 480]"
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
  name: "system",
  mixins: [mixinBase],
  data() {
    return {
      /* 系统图库 */
      systemResultList: [], //系统图库列表图片数据
      pageSize:48,    //系统图库一页条数
      systemGroupId:'',  //系统图库分组id
      systemGroupList:[],  //系统图库分组列表

      imgSrcKey: 'address', //接口返回的图片地址路径的参数名称
    };
  },
  created() {
    this.getSystemIconGroups();
    this.fetch();
  },
  activated() {
    
  },
  methods: {

    /**************************** 列表数据拉取相关 *******************************/

    /* 查询系统图库 */
    fetch() {
      this.loading = true;
      this.imgNow = 0;
      this._apis.goodsOperate.getSystemIconByGroupId({
        groupId:this.systemGroupId || '',
        startIndex:this.currentPage,
        pageSize:this.pageSize,
      }).then((response)=>{
        this.systemResultList = response.list
        this.total = response.total
        this.preload(this.systemResultList, this.imgSrcKey);
      }).catch((error)=>{
        this.$message.error(error);
        this.loading = false;
      });
    },

    //查询系统图库分组
    getSystemIconGroups(){
      this._apis.goodsOperate.getSystemIconGroup({}).then((response)=>{
        this.systemGroupList = response
      }).catch((error)=>{
        this.$message.error(error);
      })
    }    
  }
};
</script>

<style lang="scss" scoped>


</style>