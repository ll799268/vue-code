
import observe from './observe'

/**
 * 数组观测
 * @param {*} arr 
 */
function observeArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    observe(arr[i]);
  }
}

export default observeArr