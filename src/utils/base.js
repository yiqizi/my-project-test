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
