import Vue from 'vue';

let vm = new Vue({
  el: '#app',
  data() {
    return {
      title: '学生列表',
      info: {
        a: {
          b: 1
        }
      },
      teacher: ['张三', '李四'],
      students: [
        {
          id: 0,
          name: '小明'
        },
        {
          id: 1,
          name: '小红'
        }
      ]
    }
  }
});

console.log(vm.students.splice(0, 1, {
  id: 3,
  name: "小白"
}));