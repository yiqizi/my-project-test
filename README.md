## 电商前端pc端框架

http://test-omo.aiyouyi.cn/xiaoyaoji/doc/2ShuYz40m这个是接口地址

名：admin-mdl  密码：nBEtNs*Q53avSg6^ 

### 项目运行


```bash
git clone http://git.300.cn/NRCP/nrcp-web/bms.git    //项目克隆

cd bms  //进入根目录
 
npm install  //安装依赖包

npm run dev   //启动开发服务器

npm run build:dev   //本地开发打包

npm run build:test+n   //测试环境打包(n表示对应的环境)

npm run build:prod   //正式环境打包

```

### 项目详情

```
.
├── build                                       // webpack配置文件和服务启动文件
├── config                                      // 环境变量配置，本地调试时需要改环境可在proxyTable.js中修改代理
├── dist                                        // 打包后的静态文件
├── src                                          
│   ├── api                                     // 接口api（其中index.js是聚合索引文件）
│   ├── assets                                  // 静态文件目录
│   ├── components                              // 公共组件目录（很多页面级的功能组件继承自此目录下的base组件）
│   ├── config                                  // 项目配置目录
│   ├── router                                  // 路由目录（其中index.js是聚合索引文件，按需模块化的添加你的路由文件）
│   ├── store                                   // 状态管理目录
│   ├── styles                                  // 样式目录
│   ├── directives                              // directive目录
│   ├── mixins                                  // mixin目录
│   ├── system                                  
│   │  ├── appConfig.js                         // 系统配置
│   │  ├── auth.js                              // 系统认证token管理
│   │  ├── permission.js                        // 系统权限验证
│   │  ├── request.js                           // 接口请求方法封装
│   │  ├── constant.js                          // 常量配置
│   ├── utils                                   // 工具箱集合（其中index.js是聚合索引文件,使用时在页面中导入utils模块，然后用.运算符直接取到对应的方法名即可使用）
│   ├── views                                   // 页面目录
│   ├── App.vue                                 // vue主文件
│   ├── main.js                                 // 项目主文件
.
```

## 添加一个第三方插件
先npm install 该插件，然后在main.js中引入

```js
//添加时间轴demo
import LightTimeline from 'vue-light-timeline';
Vue.use(LightTimeline);
```


## 添加一个api接口
目录路径： \src\api
* 在目录下新建一个模块文件（例如订单模块order, 商品模块goods）
* 在api文件里的index.js里添加此模块

```js
// 添加api模块
import * as demo from "./demo"; 
export default {
	demo
};

```

* 在新建的文件里面添加api接口，写法如下：(注：url即接口相对地址，target即接口唯一标识号，baseURL:基础url, data： post请求时传入的业务参数，params: get请求时传入的业务参数，apiType: system/request.js中setApiAddress方法对应的apiType)

```js
// get请求
export function getAllCoupons(data) {
    return request({
        url: '/v1/b/app-coupon/activity/page-list',
        method: 'get',
        baseURL: process.env.SALE_API,
        params:data
    })
}
// post请求
export function getList(data) {
    return request({
      target:'CARD-LEVEL-INFO-FIND-PAGE-LIST-PROCESSOR',
      method: 'post',
      apiType: 'member',
      data
    })
}
```


## 页面中使用api接口获取数据
目录路径： 你的vue页面文件

备注：
* 所有的api接口都挂载在this._apis上
* _apis后面接api模块名（即你起的文件名字）
* 模块名后面接你的具体api名
* 示例： this._apis.模块名.api名

```js
//获取列表demo
this._apis.demo.getList({}).then((response)=>{
      this.data = response;
}).catch((error)=>{
      this.$message.error(error);
})
```


## 添加一个websocket接口

目录路径： \src\api
* 在目录下新建一个模块文件（例如订单模块order, 商品模块goods）
* 在api文件里的index.js里添加此模块

```js
// 添加api模块
import * as demo2 from "./demo2"; 
export default {
	demo2
};

```

* 在新建的文件里面添加websocket接口，写法如下：(注：url即接口相对地址，baseURL:基础url, data： 传入的业务参数， methods: 传入的业务回调函数，包含onopen、onmessage、onclose、onerror方法)

```js
// 获取数据
export function getData(data, methods) {
  return websocket({
    url: '/sockjs-node/873/euznsvbv/websocket',
    method: 'get',
    baseURL: process.env.WEBSOCKET_server,
    data,
    methods
  })
}
```

## 在页面中获取websocket发来的数据
目录路径： 你的vue页面文件
备注：
* 所有的websocket接口都挂载在this._apis上
* _apis后面接websocket模块名（即你起的文件名字）
* 模块名后面接你的具体websocket接口名
* 示例： this._apis.模块名.websocket名

```js
//长连接demo
this._apis.websocketDemo.getData({aaa:1}, {
      onopen: () => {
      console.log('opened');
      },
      onmessage: (res) => {
      _self.socketValue = res;
      console.log(res);
      },
      onclose: (onclose) => {
      console.log('closed原因：' + onclose);
      },
      onerror: (error) => {
      console.error(error);
      }
});
```

## 添加你的路由
目录路径： \src\router
* 在目录中添加一个路由模块文件

```js

import Layout from '@/components/layout/Layout'

export default [
  {
		path: '/demo',
    component: Layout,
    redirect: {
      name: 'helloWorld'
    },
    name: 'demoPage',
    meta: {
      roles: ['shop'],
      title: 'demo展示',
      icon: 'shop'
    },
    children: [
    	{
        path: 'helloWorld',
        component: () => import('@/views/demo/helloWorld'),
        name: 'helloWorld',
        meta: { title: 'elementUi', noCache: true }
      },
    	{
        path: 'helloWorld2',
        component: () => import('@/views/demo/helloWorld2'),
        name: 'helloWorld2',
        meta: { title: '过滤器使用demo', noCache: true }
      },
    	{
        path: 'helloWorl3',
        component: () => import('@/views/demo/helloWorld3'),
        name: 'helloWorld3',
        meta: { title: '腾讯地图demo', noCache: true }
      },
    	{
        path: 'helloWorld4',
        component: () => import('@/views/demo/helloWorld4'),
        name: 'helloWorld4',
        meta: { title: '页面组件demo', noCache: true }
      },
    	{
        path: 'helloWorld5',
        component: () => import('@/views/demo/helloWorld5'),
        name: 'helloWorld5',
        meta: { title: '图表demo', noCache: true }
      },
    	{
        path: 'helloWorld6',
        component: () => import('@/views/demo/helloWorld6'),
        name: 'helloWorld6',
        meta: { title: '富文本和弹窗demo', noCache: true }
      },
    	{
        path: 'helloWorld7',
        component: () => import('@/views/demo/helloWorld7'),
        name: 'helloWorld7',
        meta: { title: '数据请求demo', noCache: true }
      },
    ]
	}
]

```

* 在目录中的index.js中添加此路由模块

```js

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
Vue.use(Router)
import demoRouter from './demoRouter';
 
export const asyncRouterMap = [  //异步路由表
	...demoRouter
]

export default new Router({
  mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes: syncRouterMap
})

```


## 添加公共功能组件并使用
目录路径： \src\components
* Decorate是装修需要的组件
* dialogs是系统所用的公共弹窗，如选择图片弹窗
* errorPage是放的404页面
* Form 表单组件
* layout 组件是布局基础组件，部分页面骨架基于此布局组件
* mapSearch 带搜索功能的腾讯地图组件
* mapSearchDialog 地图弹窗
* Pagination 分页组件
* 带base的组件是基础功能组件，使用此类功能的业务组件可从此类文件继承以获得基本能力，在各视图目录中的业务组件中去做具体的实现
* static目录是导入第三方组件的入口，需求的话可以去添加

```js
<script type='es6'>
import mapBase from "@/components/MapBase";
export default {
  name: "demoMap2",
  extends: mapBase,
  data() {
    return {};
  },
  methods: {

    //实例初始化结束
    inited() {
      this.initEvent();
      var marker = new qq.maps.Marker({
          position: this.centerObj,
          map: this.mapObj
      });

      var marker2 = new qq.maps.Label({
          position: this.centerObj,
          map: this.mapObj,
          content:'数码庄园'
      });
    },

    //初始化事件
    initEvent() {}
  },
  components: {}
};
```


## 添加业务组件
路径：你的视图目录
* 新建一个components文件夹
* 新建你的业务子组件
* 在你的页面vue里面引用即可使用

```html
<template>
  <demoMap1 :width="'600px'" :height="'300px'" :zoom="11" :center="[39.9046900000,116.4071700000]"></demoMap1>
</template>
```

```js
<script>
import utils from '@/utils';
import demoMap1 from './components/demoMap1';
export default {
  name: 'HelloWorld3',
  components: {demoMap1},
  data () {
    return {}
  }
}
</script>
```

## 添加系统配置项
文件路径： \src\system\appConfig.js

```js
export default {
      head: {
		VERSION: "vsesion-2.0.0.1", // 版本号
		CHANNEL: "页面测试", // 渠道
		KEY:"133C9CB27DA0", // 公钥，由Leader平台系统进行分配
		VALUE:"FD4007DB87B245EEACA7DAD5D4A1CECD", // 私钥
		CLIENT:"3" //客户端
	},
	//地图参数配置
	map: {
		url: 'https://map.qq.com/api/js?v=2.exp',
		key: 'C4XBZ-P2HWS-5BGOP-64Z2O-FROKK-JEFA7',
		defaultCenter: [39.9046900000,116.4071700000],
		apiBaseUrl: 'https://apis.map.qq.com/ws/'
	},
	realmName: 'http://172.22.146.118'
}
```

## 添加常量
文件路径： \src\system\constant.js

```js
/* 常量 */
export default {
  AAA: '阿实际不符',
  BBB: '奥术飞镖束带结发',
};

```

## 添加工具方法
目录路径： \src\utils
* 对于单独的工具方法，可放在base.js中，使用时可直接在utils上调用添加的方法
* 对于需要一个文件来承载的工具类，可添加对应的js文件，然后在index.js中注册此文件，使用时也可直接在utils上调用添加的方法（需注意名称对应）

```js
base.js
/**
 * 数值百分比转换
 * @param value 
 * @param fmt string , 转换格式
 * demo ->  {{data | percent(2)}}
 */
export function percent(value, fmt) {
  return `${((value || 0) * 100).toFixed(fmt || 2)}%`;
}
```

```js
index.js
import * as utils from "./base"; //基础工具方法
import * as eventHub from "./eventHub"; //全局事件中心
import * as validate from "./validate"; //验证工具箱
import * as listManager from "./listManager"; //列表管理器
import * as confirm from "./confirm"; //重新封装确认弹窗
import * as dateTime from "./dateTime"; //日期时间相关
import * as security from "./security"; //安全加解密转码相关
import * as transform from "./transform"; //数据转换相关
import * as ruleValidator from "./ruleValidator"; //element-ui 表单验证rules自定义的验证规则validator

export default Object.assign(utils, dateTime, security, transform, {
	eventHub,
	validate,
	listManager,
	confirm,
	ruleValidator
});

```

## 在页面中使用工具方法
路径：你的页面文件或js文件

```js
import utils from "@/utils";
let date = utils.formatDate(new Date(), "yyyy-MM-dd hh:mm:ss")
let value = utils.percent(0.34546757, 3)
```

## 使用全局快捷公共方法
* 路由快捷跳转

```html
  <button  @click="_routeTo('page1')">按钮</button>
  <button  @click="_routeTo('page2', {id: 123, name: 'hahaha'})">按钮</button>
```

* 获取上面的路由参数

```js
console.log(this.$route.params)  //{id:123, name: 'hahaha'}
```

* 全局事件中心(观察者模式跨作用域消息通讯)

```js
  注册事件： this._globalEvent.$on('mapLoaded', ()=>{
                  this.init();
            });

  发送事件： this._globalEvent.$emit('mapLoaded');
```

## 使用地图（以腾讯地图为例）
编写路径： 你的视图业务组件目录
* 创建一个业务地图组件文件，放到对应的views组件中
* 继承公共组件中的mapBase组件，获取基本能力

```js
import mapBase from "@/components/MapBase";
export default {
  name: "demoMap2",
  extends: mapBase,
};
</script>
```

* 编写inited的处理函数

```js
//实例初始化结束
inited() {
      this.initEvent();
      //以下是其他处理，比如标记点和标签等
      var marker = new qq.maps.Marker({
            position: this.centerObj,
            map: this.mapObj
      });

      var marker2 = new qq.maps.Label({
            position: this.centerObj,
            map: this.mapObj,
            content:'数码庄园'
      });
},
```

* 编写initEvent的处理函数(如有)

```js
//初始化事件
    initEvent() {
       
    }
```

* 编写search和searchCompleted方法的处理函数(如需要)

```js
 //执行搜索
search() {
      this.searchService.search(this.keyword);
},

//搜索结束
searchCompleted(results) {
      let latlngBounds = new qq.maps.LatLngBounds();
      let markers = [];
      let pois = results.detail.pois;
      for (let i = 0, l = pois.length; i < l; i++) {
            let poi = pois[i];
            //扩展边界范围，用来包含搜索到的Poi点
            latlngBounds.extend(poi.latLng);
            let marker = new qq.maps.Marker({
            map: this.mapObj,
            position: poi.latLng
            });

            marker.setTitle(i + 1);

            markers.push(marker);
      }
      //调整地图视野
      this.mapObj.fitBounds(latlngBounds);
}
```

组件调用路径： 你的页面

```html
<template>
  <demoMap1 :width="'600px'" :height="'300px'" :zoom="11" :center="[39.9046900000,116.4071700000]"></demoMap1>
</template>
```

```js
<script>
import utils from '@/utils';
import demoMap1 from './components/demoMap1';
export default {
  name: 'HelloWorld3',
  components: {demoMap1},
  data () {
    return {}
  }
}
</script>
```

## 使用图表（以echarts的折线图为例）

方法同地图使用


## 使用富文本编辑器（以ckeditor为例）

```html
组件调用
<CKEditor></CKEditor>
```

```js
组件引入
import CKEditor from '@/components/CKEditor';
export default {
  name: 'HelloWorld6',
  components: {CKEditor}
}
</script>
```

## 过滤器添加和使用
添加方法同工具方法，utils工具方法可和过滤器共用

页面中使用：

```html
<button>日期事件过滤器（{{new Date() | formatDate('yyyy-MM-dd hh:mm:ss')}}）</button>
<button>颜色转换过滤器（{{'rgb(45,123,67)' | colorRGB2Hex()}}）</button>
<button>数字格式化过滤器（{{3453478565 | formatNumber()}}）</button>
<button>百分比格式化过滤器（{{0.2398 | percent(2)}}）</button>
```

## 页面中多个弹窗使用
* 在你的views视图目录中新建dialogs文件夹
* 新建你的弹窗组件文件
* 继承公共组件中的dialogBase, 获取基本能力, 并编写你的具体业务

```js
<script>
demoDialog.vue

import dialogBase from '@/components/DialogBase';
export default {
  name: 'demoDialog',
  extends: dialogBase,
  props: ['data'],
  data() {
    return {}
  },
  methods: {}
}
</script>
```

* 在你的业务页面中调用动态组件，并动态设置弹窗组件名称以实现区分打开不同的弹窗，并添加你的props和methods

```html
helloWorld.vue

 <!-- 动态弹窗 -->
<component :is="currentDialog" :data="editorData" @dialogClose="dialogClose" :refresh="fetch"></component>
```

## auth

```js
// 新增
{
  name: '设置',
  navType: 1,
  children: [
   {
    name: '普通快递',
    navType: 2,
    children: [
      {
        name: '快递设置',
        navType: 3
      },
      {
        name: '运费模版',
        navType: 3,
        children: [
          {
            name:'查看',
            navType: 5
          },
          {
            name:'复制',
            navType: 5
          },
          {
            name:'修改',
            navType: 5
          },
          {
            name:'删除',
            navType: 5
          },
          {
            name:'新建模板',
            navType: 5
          }
        ]        ]
      },
      {
        name: '电子面单',
        navType: 3,
        children: [
          {
            name:'查看',
            navType: 5
          },
          {
            name:'修改',
            navType: 5
          },
          {
            name:'删除',
            navType: 5
          },
          {
            name:'新建',
            navType: 5
          }
        ]
      }
    ]
   },
   {
    name: '商家配送',
    navType: 2
   }
 ]
}
 
// 去掉
[
  {
    name: '商家配送',
    navType: 2
  }
]
```boom_merge_com1.2boom_merge_com1.2boom_merge_com1.2

```

## 文件命名规范

* 文件夹名<br/>
小写或者小驼峰 如：goods, login, errorPage

* 页面<br/>
同文件夹

* 组件<br/>
基础组件以大驼峰命名 如：DialogBase.vue

* 样式<br/>
样式名单词之间用下划线拼接 如：first_one

* class类<br/>
采用大驼峰法命名 如: class FirstOne() {}

* 常量<br/>
常量就是不能更改的变量，为了醒目所以都遵循全大写的蛇形命名法则，如：const FIRST_ONE = 3

* 变量<br/>
小写或者小驼峰

* 根据类型定义变量，类型的首字母作为变量首字母

```js
let aApple; //array
let nApple; //number
let sApple; //string
let oApple; //object
let fnApple; //function
let bApple; //boolean
```

* 函数专有的动词前辍<br/>
has 有没有某个东西 <br/>
is  是不是<br/>
get 获取<br/>
set 设置<br/>

## JS规范

### 引用

  使用const定义你的所有引用，避免使用let。这样能确保你不能重新赋值你的引用，否则可能导致错误或者产生难以理解的代码。
  如果必须重新赋值你的引用，可以使用let。
<br/>
* let和const都是块级范围的

  ```js

  {
    let a = 1;
    const b = 1;
  }
  console.log(a); //ReferenceError
  console.log(b); //ReferenceError

  ```
### 对象
定义一个空对象

```js
//bad
const item = new Object();

//good
const item = {}
```

* 使用对象方法的缩写

```js
//bad
const atom = {
  value: 1,
  addValue: function(value) {
    return atom.value + value;
  }
};
//good
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  }
};
```

* 用对象扩展操作符代替Object.assign进行浅拷贝

```js
//very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // 变异的 `original` ಠ_ಠ
delete copy.a; // 这....

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

### 数组

* 使用数组展开方法 ... 来拷贝数组。

```js
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

* 将一个类数组对象转换成一个数组， 使用展开方法 ... 代替 Array.from

```js
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

### 解构
* 在访问和使用对象的多个属性的时候使用对象的解构。

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

* 使用数组解构

```js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

### 方法
* ECMA-262 将 block 定义为语句列表。 函数声明不是语句。

```js
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```

* 不要使用 arguments, 选择使用 rest 语法 ... 代替。... 明确了你想要拉取什么参数。 更甚, rest 参数是一个真正的数组，而不仅仅是类数组的 arguments 

```js
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

* 使用默认的参数语法，而不是改变函数参数。

```js
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

* 总是把默认参数放在最后

```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

* 函数签名中的间距

```js
// bad
const f = function(){};
const g = function (){};
const h = function() {};

// good
const x = function () {};
const y = function a() {};
```

* 不要再赋值参数

```js
// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}
```

* 如果函数体包含一个单独的语句，返回一个没有副作用的 expression ， 省略括号并使用隐式返回。否则，保留括号并使用 return 语句。

```js
// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// 没有副作用的隐式返回
function foo(callback) {
  const val = callback();
  if (val === true) {
    // 如果回调返回 true 执行
  }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
  bool = true;
});
```

* 方法返回了 this 来供其内部方法调用。

```js
// bad
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```

### 迭代器和发生器
* 不要使用迭代器。 你应该使用 JavaScript 的高阶函数代替 for-in 或者 for-of。
 拥有返回值的纯函数比这个更容易解释。
 使用 map() / every() / filter() / find() / findIndex() / reduce() / some() / ... 遍历数组， 和使用 Object.keys() / Object.values() / Object.entries() 迭代你的对象生成数组。

 ```js
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne = numbers.map(num => num + 1);
 ```

### 比较运算符和等号
* 使用 === 和 !== 而不是 == 和 !=
* 条件语句，例如 if 语句使用 ToBoolean 的抽象方法来计算表达式的结果，并始终遵循以下简单的规则<br/>
  **Objects 的取值为： true**<br/>
  **Undefined 的取值为： false**<br/>
  **Null 的取值为： false**<br/>
  **Booleans 的取值为： 布尔值的取值**<br/>
  **Numbers 的取值为：如果为 +0, -0, or NaN 值为 false 否则为 true**<br/>
  **Strings 的取值为: 如果是一个空字符串 '' 值为 false 否则为 true**<br/>
* 对于布尔值使用简写，但是对于字符串和数字进行显式比较。

```js
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}
```

* 避免不必要的三目表达式

```js
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

* 不要使用选择操作符代替控制语句。

```js
// bad
!isRunning && startRunning();

// good
if (!isRunning) {
  startRunning();
}
```

### 注释 
* 使用 /** ... */ 来进行多行注释

```js
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```

* 使用 // 进行单行注释。 将单行注释放在需要注释的行的上方新行。 在注释之前放一个空行，除非它在块的第一行。

```js
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
```

* 用一个空格开始所有的注释，使它更容易阅读。

```js
// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```

### 类型转换和强制类型转换
* 在语句开始前进行类型转换。
* 字符类型转换

```js
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);
```

* 数字类型：使用 Number 进行类型铸造和 parseInt 总是通过一个基数来解析一个字符串。

```js
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);
```

* 布尔类型

```js
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;
```














