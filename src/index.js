import Vue from 'vue';

const vm = new Vue({
  el: '#app',
  data() {
    return {
      title: '学生列表'
    }
  }
});

console.log(vm._data.title);
console.log(vm.title);