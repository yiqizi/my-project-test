/*导出弹窗提示 */
<template>
    <DialogBase :visible.sync="visible" @submit="submit" title="提示" :hasCancel="hasCancel">
        <div class="c_container">
            <div class="c_cont">
                <img src="../../assets/images/finance/icon_error.png" alt="">
                <span>导出数据量超过1000条，建议分时间段导出。<br/>点击确定导出当前筛选下的前1000条数据，点击取消请重新筛选。</span>
            </div>
        </div>
    </DialogBase>
</template>
<script>
import clientApi from '@/api/client';
import DialogBase from '@/components/DialogBase'
export default {
    name: "exportTipDialog",
    props: ['data'],
    data() {
        return {
            hasCancel: true
        }
    },
    methods: {
        submit() {
        let exportApi = this.data.api.split('.');
        let query = this.data.query;
        let flag = 0;
        let apiModule = exportApi[0];
        let apiName = exportApi[1];
        switch(apiName){
            case 'smsExport':
            flag = 1;
            break;
            case 'exportTa':
            flag = 1;
            break;
        }
        this._apis[apiModule][apiName](query).then((response)=>{
            if(flag == 1 && apiModule == 'finance'){
                window.location.href = response.url
            }else if(flag == 0 && apiModule == 'finance'){
                window.location.href = response
            }else if(flag == 0 && apiModule == 'data'){
                window.location.href = response
            }
        }).catch((error)=>{
          this.$message.error(error);
        })
        }
    },
    computed: {
        visible: {
            get() {
                return this.dialogVisible
            },
            set(val) {
                this.$emit('update:dialogVisible', val)
            }
        }
    },
    mounted() {
        
    },
    props: {
        data: {

        },
        dialogVisible: {
            type: Boolean,
            required: true
        },
    },
    components: {
        DialogBase
    }
}
</script>
<style lang="scss" scoped>
.c_container{
    .c_cont{
        display: flex;
        img{
            width: 30px;
            height: 30px;
            flex: 0 0 30px;
        }
        span{
            flex: 1;
            padding-left: 18px;
            font-size: 16px;
            font-weight: 500;
            color: #44434B;
            line-height: 22px;
        }
    }
}
</style>


