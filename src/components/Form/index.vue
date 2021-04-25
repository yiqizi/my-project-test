<template>
    <el-form :model="ruleForm" ref="ruleForm" class="ruleForm" v-bind="$attrs">
        <el-form-item v-for="(item, index) in formItems" :label="item.label + ':'" :prop="item.prop" :key="index">
            <template v-if="item.type == 'slot'">
                <slot :name="item.prop"></slot>
            </template>
            <template v-else-if="item.type == 'input'">
                <el-input v-model="ruleForm[item.prop]" :placeholder="item.placeholder"></el-input>
            </template>
            <template v-else-if="item.type == 'span'">
                <span>{{ruleForm[item.prop]}}</span>
            </template>
            <template v-else-if="item.type == 'select'">
                <el-select v-model="ruleForm[item.prop]" :placeholder="item.placeholder">
                    <el-option v-for="(option, index) in data[item.optionsName]" :label="option.label" :value="option.value" :key="index"></el-option>
                </el-select>
            </template>
        </el-form-item>
        <el-form-item v-if="$attrs.inline">
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <div v-if="showFooter" class="dialog-footer fcc">
            <el-button type="primary" @click="footerSubmit">确 认</el-button>
            <el-button @click="$parent.$emit('update:visible', false)">取 消</el-button>
        </div>
    </el-form>
</template>
<script>
export default {
	name:'form',
    data() {
        return {

        }
    },
    created() {
        // console.log(this.data)
    },
    methods: {
        onSubmit() {
            this.$emit('submit', this.ruleForm)
        },
        footerSubmit() {
            this.$refs.ruleForm.validate((valid) => {
            if (valid) {
                this.$refs.ruleForm.resetFields();
                this.$parent.$emit('update:visible', false)
                this.$emit('submit', this.ruleForm)
            } else {
                return false;
            }
            });
        }
    },
    props: {
        ruleForm: {
            type: Object
        },
        formItems: {
            type: Array
        },
        data: {
            type: Object,
            required: true
        },
        showFooter: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .dialog-footer {
        margin-top: 57px;
    }
</style>



