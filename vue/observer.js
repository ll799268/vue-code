import defineReactiveData from './reactive';

/**
 * 观察者实例
 * @param {Object} data 
 */
function Observer (data) {
  // 如果是数组
  if (Array.isArray(data)) {

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
    
    // 响应式数据转换
    defineReactiveData(data, key, value);
  }
};

export default Observer;