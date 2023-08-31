import Observer from './observer';

/**
 * data数据观测
 * @param {Object} data 要观察的数据
 * @returns 
 */
function observe(data) {
  if (typeof data !== 'object' || data === null) return;

  // 创建观察者观察
  new Observer(data);
}

export default observe