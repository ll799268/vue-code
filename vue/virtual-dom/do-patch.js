

import {
  ATTR,
  TEXT,
  REPLACE,
  REMOVE
} from './patches-type'

import { setAttrs, render } from './index'
import Element from './element'

let finalPatches = {},
  rnIndex = 0

/**
 * 构建打补丁操作
 * @param {Element} rDom 真实节点
 * @param {Object} patches 补丁
 */
function doPatch(rDom, patches) {
  finalPatches = patches
  rNodeWalk(rDom)
}

/**
 * 真实节点观测
 * @param {Element} rNode 真实节点
 */
function rNodeWalk(rNode) {
  const rnPatch = finalPatches[rnIndex++],
    childNodes = rNode.childNodes;

    // 子节点递归观测
    [...childNodes].map(c => {
      rNodeWalk(c)
    })

    // 如果有补丁
    if (rnPatch) {
      patchAction(rNode, rnPatch)
    }
}

/**
 * 打补丁
 * @param {Element} rNode 真实节点
 * @param {Object} rnPatch 补丁
 */
function patchAction(rNode, rnPatch) {
  rnPatch.map(p => {
    switch (p.type) {
      // 属性修改
      case ATTR:
        for(let key in p.attrs) {
          const value = p.attrs[key]
          // 如果是属性新增或者是修改
          if(value) {
            setAttrs(rNode, key, value)
          }
          // 删除
          else {
            rNode.removeAttribute(key)
          }
        }
        break;
      // 文本节点内容修改
      case TEXT:
        rNode.textContent = p.text
        break;
      // 替换节点
      case REPLACE:
                      // 如果替换节点非文本节点 ? 渲染 ：文本节点
        const newNode = (p.newNode instanceof Element)
                        ?
                        render(p.newNode)
                        :
                        document.createTextNode(p.newNode)

        rNode.parentNode.replaceChild(newNode, rNode)
        break;
      // 删除节点
      case REMOVE:
        rNode.parentNode.removeChild(rNode)
        break;
      default:
        break;
    }
  })
}

export default doPatch