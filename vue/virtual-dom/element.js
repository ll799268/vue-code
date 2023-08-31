
/**
 * 节点类
 * @param {String} type 类型
 * @param {Object} props 属性
 * @param {Array} clidren 自己节点
 */
class Element {
  constructor(type, props, clidren) {
    this.type = type;
    this.props = props;
    this.clidren = clidren;
  }
}

export default Element