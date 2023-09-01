import Element from './element'

/**
 * 创建节点
 * @param {String} type 类型
 * @param {Object} props 节点信息
 * @param {Array} clidren 子项
 * @returns 节点对象
 */
function createElement(type, props, clidren) {
  return new Element(type, props, clidren);
}

/**
 * 渲染函数
 * @param {Element} vDom 虚拟dom
 * @returns 真实DOM节点
 */
function render(vDom) {
  const { type, props, children } = vDom,
    el = document.createElement(type)

  for (const key in props) {
    setAttrs(el, key, props[key]);
  }

  children.map(c => {
    // 子类是不是非文本节点 ？渲染 ：创建文本节点
    c = c instanceof Element
      ?
      render(c)
      :
      document.createTextNode(c);

    el.appendChild(c);
  })

  return el;
}

/**
 * 设置节点属性
 * @param {Element} node 节点
 * @param {Object} prop 属性
 * @param {String} value 值
 */
function setAttrs(node, prop, value) {
  switch (prop) {
    // 值
    case 'value':
      // 如果是input和textarea节点
      if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
        node.value = value;
        return;
      }
      node.setAttribute(prop, value);
      break;
    // 样式
    case 'style':
      node.style.cssText = value;
      break;
    // 节点属性
    default:
      node.setAttribute(prop, value);
      break;
  }
}

// 渲染dom到页面上
function renderDom(rDom, rootEl) {
  rootEl.appendChild(rDom);
}

export {
  createElement,
  render,
  setAttrs,
  renderDom
}