
/**
 * 节点类
 * @param {String} type 类型
 * @param {Object} props 属性
 * @param {Array} children 自己节点
 */
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

export default Element