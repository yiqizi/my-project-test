import RichEditor from '../RichEditor/index.vue';

// const component = {
//     install:function(Vue){
//         Vue.component(RichEditor.name,RichEditor)
//     }  //'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法
// } 
// console.log('--公共组件---RichEditor------', RichEditor.name)
RichEditor.install = function(Vue) {
  Vue.component('RichEditor', RichEditor);
};

export default RichEditor;