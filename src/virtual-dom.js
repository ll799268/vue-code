import { createElement, render, renderDom } from 'vue/virtual-dom'

const vDom = createElement('ul', {
  class: 'list',
  style: 'width: 300px; height: 300px; background-color: orange; padding-top: 20px'
}, [
  createElement('li', {
    class: 'item',
    'data-index': 0,
  }, [
    createElement('p', { 
      class: 'text' 
    }, [
      '第一个列表项'
    ])
  ]),
  createElement('li', {
    class: 'item',
    'data-index': 1,
  }, [
    createElement('p', { 
      class: 'text' 
    }, [
      createElement('span', 
        { class: 'title' }
        , ['第二个列表项'])
    ])
  ]),
  createElement('li', {
    class: 'item',
    'data-index': 2,
  }, [
    '第三个列表项'
  ]),
])

const rDom = render(vDom)
renderDom(
  rDom,
  document.getElementById('app')
)
console.log(rDom);
console.log(vDom);