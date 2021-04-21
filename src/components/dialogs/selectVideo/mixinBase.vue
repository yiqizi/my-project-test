<script>
import '@/styles/video-material.scss'
export default {
  name: "mixinBase",
  props: ['max', 'isHave', 'isCheckbox', 'cid', 'selectedData'],
  data() {
    return {
      scrollTop: 0, //记录滚动条位置
      loading: false,  //获取图片列表的loading
      currentPage:1,  //当前页
      total:0,  //素材库总条数

      selectedItem: null, //选中的视频对象（最终发送给调用页面的结果）
    }
  },
  activated() {
    //保持滚动到的位置
    this.$refs.wrapper.scrollTop = this.scrollTop;

    //如果是单选，则每次切换后当前选中的数据变为当前tab下的
    if(!this.isCheckbox){
      this.$emit('selectedItemUpdate', this.selectedItem, this.keyObj);
    }
  },
  methods: {
    /**************************** 选择相关 *******************************/

    //选择切换
    checkboxChange(item) {
      this.$emit('selectedItemUpdate', item, this.keyObj, item.checked);
    },

    /* 选中视频 */
    selectVideo(item) {
      //如果是多选，则不可选中视频，只能通过checkbox选择
      if(this.isCheckbox){
        return;
      }
      this.selectedItem = item;
      this.$emit('selectedItemUpdate', item, this.keyObj);
    },

    /*************************** 分页相关  ****************************/

    /* 分页大小改变 */
    handleSizeChange(val){
      this.pageSize = val || this.pageSize;
      this.fetch();
    },

    /* 当前页改变 */
    handleCurrentChange(pIndex){
      this.currentPage = pIndex || this.currentPage;
      this.fetch();
    },

    //搜索
    search() {
      this.currentPage = 1;
      this.fetch();
    }
  }
}
</script>