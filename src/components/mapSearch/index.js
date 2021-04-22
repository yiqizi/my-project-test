import mapSearch from '../mapSearch/index.vue';

// const component = {
//     install:function(Vue){
//         Vue.component(mapSearch.name,mapSearch)
//     }  //'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法
// } 
// console.log('--公共组件---mapSearch------', mapSearch.name)
mapSearch.install = function(Vue) {
  Vue.component('map-search', mapSearch);
};

export default mapSearch;