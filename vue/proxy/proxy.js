
/**
 * 代理数据。将vm._data.xx 代理到vm.xx上
 * @param {Object} vm 代理对象
 * @param {String} target 目标对象
 * @param {String} key 键
 */
function proxyData(vm, target, key) {
  Object.defineProperty(vm, key, {
    get () {
      return vm[target][key];
    },
    set (newValue) {
      vm[target][key] = newValue;
    }
  })
}

export default proxyData