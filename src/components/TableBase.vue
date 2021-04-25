<!-- 表格基础组件，所有分页表格都继承自此页面 -->

<script>
import utils from '@/utils';
export default {
  name: 'tableBase',
  data() {
    return {
      startIndex: 1,
      pageSize: 10,
      total: 0,
      totalPages: 0,
      loading:false,
      ruleForm: {
        startIndex: 1,
        pageSize: 10,
      },
      tableData: [],
      multipleSelection: [],
      currentPage: null,
      date: [utils.calcDate(new Date(), '-', 30), new Date()],
      selectStatus: false,
      isIndeterminate: false, //全选状态
    }
  },

  created() {
    this.ruleForm.pageSize = this.pageSize;
    this.fetch();
  },

  mounted() {
  },

  methods: {
    fetch(){},

    //分页大小改变
    handleSizeChange(val) {
      this.pageSize = val || this.pageSize;
      this.ruleForm.pageSize = val || this.pageSize;
      this.fetch();
    },

    //当前页码改变
    handleCurrentChange(pIndex=1) {
      this.loading = true
      this.startIndex = pIndex
      this.ruleForm.startIndex = pIndex
      this.fetch()
    },

    //切换选中状态
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    //选择改变
    handleSelectionChange(val) {
      this.multipleSelection = val;
      if(val.length !=0 && val.length == this.tableData.length ){
        this.selectStatus = true;
        this.isIndeterminate = false; 
      }else{
        this.selectStatus = false;
        if(val.length !=0){
					this.isIndeterminate = true;
				}else{
					this.isIndeterminate = false;
				}
      }
    },

    //检查当前列是否可以多选
    checkSelection(row, index) {
      return true;
    },

     // 全选
    selectAll(val){
      if(val && this.tableData.length > 0){
        this.tableData.forEach((row)=>{
          let key = this.disableKey || 'status'
          if(!this.disableStatus || !this.disableStatus.includes(row[key])) {
           this.$refs.multipleTable.toggleRowSelection(row,true);
          }
        })
      }else{
        this.$refs.multipleTable.clearSelection();
      }
      this.isIndeterminate = false;
    },
  }
}
</script>
<style lang="scss">
.table_empty{
  height: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:20px auto;
  img{
    width:50px;
    height:63px;
    object-fit: contain;
    margin-bottom:22px;
  }
  .tips{
    font-size:14px;
    color:rgba(182,181,200,1);
    line-height: 1;
    span{
      margin-left:5px;
      color:rgba(101,94,255,1);
      cursor: pointer;
    }
    i{
      font-style: initial;
      font-size:12px;
    }
  }
}
</style>
