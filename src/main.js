// // import Breadcrumb from "./src/components/Breadcrumb";
// import DialogBase from "./src/components/DialogBase";
// import mapSearch from "./src/components/mapSearch";
// // import RichEditor from "./src/components/RichEditor";

// export {
//   // Breadcrumb,
//   DialogBase,
//   mapSearch,
//   // RichEditor
// }


/* Automatically generated by './build/bin/build-entry.js' */

// import Tag from '../packages/tag/index.js';

import Breadcrumb from "./components/Breadcrumb/index.vue";
import DialogBase from "./components/DialogBase/index.vue";
import mapSearch from "./components/mapSearch/index.vue";
import RichEditor from "./components/RichEditor/index.vue";

import Pagination from "./components/Pagination/index.vue";
import dialogPrintList from "./components/printListDialog/index.vue";
import Empty from "./components/Empty.vue";

const components = [
  // Tag,
  Breadcrumb,
  DialogBase,
  mapSearch,
  RichEditor,
  Pagination,
  dialogPrintList,
  Empty
];

// const install = function(Vue, opts = {}) {
//   console.log('----------', Vue)
//   // locale.use(opts.locale);
//   // locale.i18n(opts.i18n);

//   components.forEach(component => {
//     Vue.component(component.name, component);
//   });

//   // 3. 注入组件选项
//   // Vue.mixin({
//   //   created: function () {
//   //     console.log('3333333')
//   //     components.forEach(component => {
//   //       console.log('component', component)
//   //       Vue.component(component.name, component);
//   //       // Vue.use(component)
//   //     });
//   //   }
//   // })

//   // Vue.use(InfiniteScroll);
//   // Vue.use(Loading.directive);

//   // Vue.prototype.$ELEMENT = {
//   //   size: opts.size || '',
//   //   zIndex: opts.zIndex || 2000
//   // };

//   // Vue.prototype.$loading = Loading.service;
//   // Vue.prototype.$msgbox = MessageBox;
//   // Vue.prototype.$alert = MessageBox.alert;
//   // Vue.prototype.$confirm = MessageBox.confirm;
//   // Vue.prototype.$prompt = MessageBox.prompt;
//   // Vue.prototype.$notify = Notification;
//   // Vue.prototype.$message = Message;

// };

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

const install = (Vue) => {
  // const utils = Vue.prototype.utils
  // Object.keys(utils).forEach(key => {
  //   Vue.filter(key, utils[key])
  // })
  components.forEach(component => {
    const whiteList = ['utils', '_routeTo', '_globalEvent', '_apis', 'confirm', 'invokeType', '$pcaa']
    for(let key in Vue.prototype) {
      if(whiteList.includes(key)) {
        component[key] = Vue.prototype[key]
      }
    }
    console.log('component.prototype.utils--', component.utils, component._apis)
    Vue.component(component.name, component);
  });
  // Vue.component(Breadcrumb.name, Breadcrumb)
}

export default {
  // install: Vue => {
  //     components.forEach(component => {
  //         component.utils = Vue.prototype.utils
  //         console.log('component.prototype.utils--', component.utils)
  //         Vue.component(component.name, component);

  //     });
  //     // Vue.component(Breadcrumb.name, Breadcrumb)
  // }
  install
}
