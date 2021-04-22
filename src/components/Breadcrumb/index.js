import Breadcrumb from '../Breadcrumb/index.vue';

// console.log('--公共组件---Breadcrumb------', Breadcrumb.name)

// const component = {
//      //'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法
// }

// const install = function (Vue) {
//     console.log('4444444')
//     Vue.component('breadcrumb',Breadcrumb)
// } 
Breadcrumb.install = function(Vue) {
  Vue.component('breadcrumb', Breadcrumb);
};

export default Breadcrumb;