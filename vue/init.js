import proxyData from './proxy'

/**
 * 初始化状态
 * @param {Object} vm 实例对象
 */
function initState(vm) {
  var options = vm.$options;
  
  // 如果配置了data属性
  if (options.data) {
    initData(vm);
  }
}


/**
 * 初始化data
 * @param {Object} vm 实例对象
 */
function initData(vm) {
  var data = vm.$options.data;

  // 如果是个函数 ? 执行 : 返回源数据或者是空对象
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};

  // 遍历去代理对象
  for (var key in data) {
    // 代理对象
    proxyData(vm, '_data', key);
  }

}

export {
  initState
}