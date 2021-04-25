<template>
  <el-input v-bind="$attrs" :value="value" :placeholder="placeholder" :disabled="disabled" @input="inputHandler" @blur="blurHandler"></el-input>
</template>

<script>
/*
** @type {integer:正整数   float:两位小数     intLength：限制可输入的整数长度}
*/
export default {
  props: {
    value: {
        type: [String, Number]
    },
    type: {
        type: String,
        default: 'float'
    },
    max: {
        type: Number
    },
    disabled:{
        type:Boolean,
        default:false
    },
    placeholder:{
        type:String,
        default:''
    },
    intLength: {
        type: Number
    }
  },
  methods: {
      inputHandler(val) {
          let value = val + '';
          if(this.type === 'integer'){
            value = value.replace(/[^\d]/g,'');
          }else if(this.type === 'float'){
            value = value.replace(/[^\d.]/g,"");
            value = value.replace(/\.{2,}/g,".");
            value = value.replace(/^\./g,"");
            value = value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
            value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
          }

          //限制整数可输入的长度
        if(this.intLength && !!value){
            const arr = value.split('.');
            if(arr[0].length > this.intLength){
                arr[0] = arr[0].substring(0, this.intLength);
                value = arr.join('.')
            }
        }
          
          //最大值
          if(this.max && !!value){
              if(parseFloat(value) > this.max){
                  value = this.max;
              }
          }
          this.$emit('input', value);
      },
      blurHandler() {
          if(!!this.value){
              this.$emit('input', parseFloat(this.value));
          }
      }
  }
}
</script>