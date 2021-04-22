import DialogBase from '../DialogBase/index.vue';

// const component = {
//     install:function(Vue){
//         Vue.component('DialogBase',DialogBase)
//     }  //'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法
// } 
// console.log('--公共组件---DialogBase------', DialogBase.name)
DialogBase.install = function(Vue) {
  Vue.component('DialogBase', DialogBase);
};

export default DialogBase;