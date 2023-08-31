import defineReactiveData from './reactive';

import arrayMethods from './array';
import observeArr from './observe-arr';

/**
 * 观察者实例
 * @param {Object} data 
 */
function Observer (data) {
  // 如果是数组
  if (Array.isArray(data)) {
    data.__proto__ = arrayMethods;
    // 防止多维数组
    observeArr(data);
  } else {
    this.walk(data)
  }
}

/**
 * 对象观测
 * @param {Object} data 
 */
Observer.prototype.walk = function (data) {
  var keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
      value = data[key];
    
    // 响应式数据拦截
    defineReactiveData(data, key, value);
  }
};

export default Observer;