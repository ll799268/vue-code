import {
  ATTR,
  TEXT,
  REPLACE,
  REMOVE
} from './patches-type'

let patches = {}, // 补丁对象
  vnIndex = 0 // 补丁索引(节点使用)

/**
 * 新旧节点比较
 * @param {Object} oldVDom 旧节点
 * @param {Object} newVDom 新节点
 * @returns 补丁
 */
function domDiff(oldVDom, newVDom) {
  let index = 0;
  // 节点比较
  vNodeWalk(oldVDom, newVDom, index);
  return patches
}

/**
 * 节点比较
 * @param {Object} oldNode 旧节点
 * @param {Object} newNode 新节点
 * @param {Number} index patch序号
 */
function vNodeWalk(oldNode, newNode, index) {
  // 节点补丁
  let vnPatch = []

  // 删除旧节点
  if (!newNode) {
    vnPatch.push({
      type: REMOVE,
      index
    })
  }
  // 文本内容替换
  else if (typeof oldNode === 'string' && typeof newNode === 'string') {
    if (oldNode !== newNode) {
      vnPatch.push({
        type: TEXT,
        text: newNode
      })
    }
  }
  // 节点类型相同
  else if (oldNode.type === newNode.type) {
    // 比较属性
    const attrPatch = attrsWalk(oldNode.props, newNode.props)

    // 如果属性修改了
    if(Object.keys(attrPatch).length) {
      vnPatch.push({
        type: ATTR,
        attrs: attrPatch 
      })
    }

    // 比较子节点
    childrenWalk(oldNode.children, newNode.children)
  }
  // 替换节点
  else {
    vnPatch.push({
      type: REPLACE,
      newNode
    })
  }

  // 如果有补丁
  if (vnPatch.length) {
    // 加入总补丁树
    patches[index] = vnPatch
  }
}

/**
 * 属性对比
 * @param {Object} oldAttrs 旧节点属性
 * @param {Object} newAttrs 新节点属性
 * @returns 节点补丁集合
 */
function attrsWalk(oldAttrs, newAttrs) {
  let attrPatch = {}

  for (let key in oldAttrs) {
    // 修改属性
    if (oldAttrs[key] !== newAttrs[key]) {
      attrPatch[key] = newAttrs[key]
    }
  }

  for (let key in newAttrs) {
    // 新增属性
    if (!oldAttrs.hasOwnProperty(key)) {
      attrPatch[key] = newAttrs[key]
    }
  }

  return attrPatch
}

/**
 * 子节点比较
 * @param {Object} oldChildren 旧子节点
 * @param {Object} newChildren 新子节点
 */
function childrenWalk(oldChildren, newChildren) {
  oldChildren.forEach((c, idx) => {
    // 递归节点比较
    vNodeWalk(c, newChildren[idx], ++vnIndex)
  })
}


export default domDiff