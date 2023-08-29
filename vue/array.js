import { ARRAY_METHODS } from './config'
import observeArr from './observeArr'

var originArrMethods = Array.prototype, // array内置API
  arrayMethods = Object.create(originArrMethods) // 创建继承内置API对象

ARRAY_METHODS.map(function (m) {
  arrayMethods[m] = function () {
    var args = Array.prototype.slice.call(arguments), // 伪数组转换为数组
      rt = originArrMethods[m].apply(this, args);

    console.log('数组新方法', args);
    
    var newArr;

    switch (m) {
      case 'push':
      case 'unshift':
        newArr = args;
        break;
      case 'splice':
        newArr = args.slice(2);
        break;
      default:
        break;
    }

    // 有新参数交给观测
    newArr && observeArr(newArr);
    return rt;
  }

});

export default arrayMethods
