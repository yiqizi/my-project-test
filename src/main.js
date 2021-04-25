import Breadcrumb from "./components/Breadcrumb/index.vue";
import DialogBase from "./components/DialogBase/index.vue";
import mapSearch from "./components/mapSearch/index.vue";
import RichEditor from "./components/RichEditor/index.vue";
import mapSearchDialog from "./components/mapSearchDialog/index.vue";
import mapInit from "./components/mapInit/index.vue";
import Pagination from "./components/Pagination/index.vue";
import dialogPrintList from "./components/printListDialog/index.vue";
import Empty from "./components/Empty/index.vue";
import Page401 from "./components/errorPage/401.vue";
import Page404 from "./components/errorPage/404.vue";
import Hamburger from "./components/Hamburger/index.vue";
import SvgIcon from "./components/SvgIcon/index.vue";
import wxColor from "./components/Wxcolor/index.vue";






const components = [
  Breadcrumb,
  DialogBase,
  mapSearch,
  RichEditor,
  mapSearchDialog,
  mapInit,
  Pagination,
  dialogPrintList,
  Empty,
  Page401,
  Page404,
  Hamburger,
  SvgIcon,
  wxColor
];

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
    // console.log('component.prototype.utils--', component.utils, component._apis)
    Vue.component(component.name, component);
  });
  // Vue.component(Breadcrumb.name, Breadcrumb)
}

export default {
  install
}
