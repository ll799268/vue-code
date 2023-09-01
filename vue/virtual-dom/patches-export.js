// 补丁格式
const patches = {
  0: [
    {
      "type": "ATTR",
      "attrs": {
        "class": "list-warp"
      }
    }
  ],
  2: [
    {
      "type": "ATTR",
      "attrs": {
        "class": "title"
      }
    }
  ],
  3: [
    {
      "type": "TEXT",
      "text": "特殊列表项"
    }
  ],
  6: [
    {
      "type": "REMOVE",
      "index": 6
    }
  ],
  7: [
    {
      "type": "REPLACE",
      "newDode": {
        "type": "div",
        "props": {
          "class": "item",
          "data-index": 2
        },
        "children": [
          "第三个列表项"
        ]
      }
    }
  ]
}