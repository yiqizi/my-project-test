import { getToken } from "@/system/auth.js";
import store from '@/store'
/**
 * 合并对象
 * 
 */
export function objectMerge(target, source) {

  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}


/**
 * 深克隆
 * 
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
*系统内部跳转
*
* @export
* @param {*} pathName
*/
export function routeTo(pathName, query = {}) {
  this.$router.push({
    name: pathName,
    query
  })
}


/**
 * 动态加载css文件
 *
 * @export
 * @param {*} doc
 * @param {*} path
 */
export function asyncLoadCss(doc, path) {
  return new Promise((resolve, reject) => {
    let node = doc.createElement('link');
    node.rel = 'stylesheet';
    node.href = path;
    doc.getElementsByTagName('head')[0].appendChild(node);
    node.onload = function () {
      resolve();
    };
    node.onerror = function () {
      reject();
    };
  })
}

/**
 * 动态加载js文件
 *
 * @export
 * @param {*} doc
 * @param {*} path
 */
export function asyncLoadJs(doc, path) {
  return new Promise((resolve, reject) => {
    let script = doc.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.src = path;
    doc.body.appendChild(script);
    script.onload = function () {
      resolve();
    };
    script.onerror = function () {
      reject();
    };
  })
}

/**
 * 根据value值获取label
 *
 * @export
 * @param {*} obj 
 * @param {*} group
 * @param {*} value
 */
export function getDictLabel(obj, group, value) {
  const dictList = obj
  const dict = dictList[group]
  let rst = ''
  if (dict && Array.isArray(dict)) {
    for (let i = 0; i < dict.length; i++) {
      if (dict[i].value === value) {
        rst = dict[i].label
        break
      }
    }
  }
  return rst
}

//订单状态过滤器   
export function orderStatusFilter(status) {
  switch (status) {
    case 0:
      return '待付款'
    case 1:
      return '待成团'
    case 2:
      return '已取消'
    case 3:
      return '待发货'
    case 4:
      return '部分发货'
    case 5:
      return '待收货'
    case 6:
      return '已完成'
    case 7:
      return '取消待审核'
    case 8:
      return '待发货'


  }
}

//售后单状态过滤器   
export function orderAfterSaleStatusFilter(status) {
  switch (status) {
    case 0:
      return '待审核'
    case 1:
      return '待退货'
    case 2:
      return '待处理'
    case 3:
      return '待收货'
    case 4:
      return '已完成'
    case 5:
      return '已关闭'
    case 6:
    case 7:
      return '处理中'
  }
}

//售后单类型过滤器
export function orderAfterSaleType(code) {
  if(code == 1) {
      return '退货退款'
  } else if(code == 2) {
      return '换货'
  } else if(code == 3) {
      return '仅退款'
  }
}

// 配送方式过滤器 
export function deliveryWayFilter(order) {
  switch(order.deliveryWay) {
      case 1:
          return '普通快递'
      case 2:
          return '商家配送'
      case 3:
          if(order.status==5||order.status == 6){
              if(order.thirdType == 1) {
                return '第三方配送-达达'
              } else {
                return '第三方配送'
              }
          }else{
              return '第三方配送'
          }
      case 4:
          return '上门自提'
  }
}

//商品规格过滤器
export function goodsSpecsFilter(value) {
  let _value
  if(!value) return ''
  if(typeof value == 'string') {
      _value = JSON.parse(value)
  }
  let str = ''
  for(let i in _value) {
      if(_value.hasOwnProperty(i)) {
          str += i + ':'
          str += _value[i] + ','
      }
  }
  str = str.replace(/(^.*)\,$/, '$1')
  return str
}

// 获取url中的bp或者bp2
export function GetBpType(name) {
  var pathN = location.pathname
  var tr = pathN.split('/')[1]
  if (tr) return '/'+tr;
	return '';
}

// 获取url中的参数
export function GetQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

//删除指定链接url中的参数
export function deleteQueryString(names, loca) {
  if(typeof(names)=='string'){
      names = [names];
  }
  var obj = {}
  var arr = loca.split('?')[1].split("&");
  //获取参数转换为object
  for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
  };
  //删除指定参数
  for(var i = 0; i < names.length; i++) {
      delete obj[names[i]];
  }
  //重新拼接url
  var url = loca.split('?')[0];
  if(Object.keys(obj).length !== 0) {
      url = loca.split('?')[0] + "?" + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
  }
  return url;
}

/* 添加新营销活动 */
export function addNewApply(path, access) {
  let token = getToken('authToken')
  let shopInfo = store.getters.shopInfos

  let userName = store.getters.userInfo && encodeURI(store.getters.userInfo.userName)
  let tenantId = store.getters.userInfo && encodeURI(store.getters.userInfo.tenantInfoId)
  let cid = shopInfo && shopInfo.id || ''
  let newUrl = `${process.env.NODE_ENV === 'dev' ? '//127.0.0.1:8080' : process.env.DATA_API}/vue/marketing${path}?access=${access}&token=${token}&businessId=1&loginUserId=1&tenantId=${tenantId}&cid=${cid}&userName=${userName}`
  let newWindow = window.open("about:blank");
  newWindow.location.href = newUrl;
}
/**
 * 判断此类型是否是Object类型
 * @param {Object} {}
 */
export function isObject(obj){
  return Object.prototype.toString.call(obj)==='[object Object]';
};
/**
 * 判断此类型是否是Array类型
 * @param {Array} arr 
 */
export  function isArray(arr){
  return Object.prototype.toString.call(arr)==='[object Array]';
};
export function equalsObj(oldData,newData){
  // function  isObject(obj){
  //     return Object.prototype.toString.call(obj)==='[object Object]';
  // };
  /**
   * 判断此类型是否是Array类型
   * @param {Array} arr 
   */
  // function isArray(arr){
  //     return Object.prototype.toString.call(arr)==='[object Array]';
  // };
  // 类型为基本类型时,如果相同,则返回true
  if(oldData === newData) return true;
  if(isObject(oldData)&&isObject(newData)&&Object.keys(oldData).length === Object.keys(newData).length){
      // 类型为对象并且元素个数相同

      // 遍历所有对象中所有属性,判断元素是否相同
      for (const key in oldData) {
          if (oldData.hasOwnProperty(key)) {
              if(!equalsObj(oldData[key],newData[key]))
                  // 对象中具有不相同属性 返回false
                  return false;
          }
      }
  }else if(isArray(oldData)&&isArray(oldData)&&oldData.length===newData.length){
      // 类型为数组并且数组长度相同

      for (let i = 0,length=oldData.length; i <length; i++) {
          if(!equalsObj(oldData[i],newData[i]))
          // 如果数组元素中具有不相同元素,返回false
          return false;
      }
  }else{
      // 其它类型,均返回false
      return false;
  }
  
  // 走到这里,说明数组或者对象中所有元素都相同,返回true
  return true;
};

export function isIE() {
    if(!!window.ActiveXObject || "ActiveXObject" in window){
      return true;
    }else{
      return false;
　　 }
}


// 函数防抖
export function debounce(func, wait = 500, isImmediate = false) {
  let timeout;

  if(isImmediate){
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if (timeout) clearTimeout(timeout);
      if(flag){
        flag = false;
        func.apply(context, args)
      }
      timeout = setTimeout(() => {
        flag = true;
      }, wait);
    }
  }
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    
    timeout = setTimeout(() => {
        func.apply(context, args)
    }, wait);
  }
}

// 函数节流
export function throttle(func, wait = 500, isImmediate = false) {
  let timeout;
  if(isImmediate){
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;

      if(flag) {
        func.apply(context, args);
        flag = false;
        timeout = setTimeout(() => {
          flag = true
        },wait)
      }
    }
  }

  return function () {
    let context = this;
    let args = arguments;
    if (timeout) {
      return;
    }
    timeout = setTimeout(() => {
        func.apply(context, args)
        clearTimeout(timeout);
				timeout = null;
    }, wait);
  }

}



// is safari
export function isSafariBrowser() {
  const ua = navigator.userAgent;
  const isSafariBrowser = /Safari\/([\d.]+)/.test(ua) && !/Chrome\/([\d.]+)/.test(ua);
  return isSafariBrowser
}

export function unique(arr) {
  return Array.from(new Set(arr))
}


//列表操作列宽度动态计算
export function getOperationColumnW() {
  const numArr = []; //存放每一行中宽度
  const w = 15; //单个文字宽度
  const btnsBox = document.querySelectorAll('.table-operate'); //所有操作列中的行
  if(btnsBox&&btnsBox.length>0){
  btnsBox.forEach((item) => {
      const spans = item.querySelectorAll('span'); //对应下的按钮
      let num =  (spans.length - 1) * 11 + 42; //按钮间有10px间距+1px边线，所以是11  最后一个按钮没有， 40为外框左右padding, 2是宽裕出来的
      item.querySelectorAll('span').forEach((tag) => {
          num += tag.innerHTML.trim().length * w;
        })
      numArr.push(num);
  })
  }
  return Math.max(...numArr, 72)
}
//按照创建时间正序排序
export function sortCreateTime(arr){
  arr.sort((a, b) => {
    const thisTimeA = a.createTime.replace(/-/g, '/')
    const thisTimeB = b.createTime.replace(/-/g, '/')
    let timeA = new Date(thisTimeA).getTime()
    let timeB = new Date(thisTimeB).getTime()

    if(timeA > timeB) {
      return 1
    } else if(timeA < timeB) {
      return -1
    } else if(timeA == timeB) {
      return 0
    } 
  })
  return arr

}

// 判断是否为json字符串
export function isJsonStr(str) {
  if (typeof str == 'string') {
    try {
      const obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      window.webMonitor.emit({
        type:'tryCatchError', 
        error: e
      })
      return false;
    }
  }
  return false;
}

/* 数组项对比是否相同 */
export function isIdsUpdate(newValue, oldValue) {
  if(!newValue || !oldValue){
    return newValue === oldValue;
  }
  if(Array.isArray(newValue)) {
    return newValue.length==oldValue.length && newValue.every(function(v,i) { return JSON.stringify(v) === JSON.stringify(oldValue[i])});
  }
  return JSON.stringify(newValue) === JSON.stringify(oldValue)
}