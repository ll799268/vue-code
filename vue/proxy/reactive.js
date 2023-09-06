import observe from './observe';

/**
 * 数据响应式拦截
 * @param {Object} data 源对象
 * @param {String} key 键
 * @param {Object | String} value 值
 */
function defineReactiveData(data, key, value) {
  // 递归数据观测
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      // console.log('数据响应式获取', value);
      return value;
    },
    set(newValue) {
      // console.log('数据响应式获设置', newValue);
      if (newValue === value) return;
      // 如果把基本数据类型改为引用类型，需重新观测
      observe(newValue);
      value = newValue;
    }
  })
}

export default defineReactiveData;