<template>
  <div id="request">
    <br>
    <h1>RequestData Router</h1>
    <br>
    <button @click="requestData()">请求数据</button>
    <hr>
    <ul>
      <li v-for="(item,key) in requestList" :key="(item,key)">{{key}}----{{item}}</li>
    </ul>
    <hr>
    <br>
    <br>

    <button @click="deleteData('111')">执行方法传值111</button>
    <button @click="deleteData('222')">执行方法传值222</button>
    <br>
    <br>

    <button @click="eventFun($event)">事件对象</button>
    <button data-aid="123" @click="eventFun($event)">自定义属性aid</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      requestList: []
    };
  },
  methods: {
    requestData() {
      for (var i = 0; i < 10; i++) {
        this.requestList.push("我是第" + i + "条数据");
      }
    },

    deleteData(val) {
      alert(val);
    },

    eventFun(e) {
      console.log(e);
      // e.srcElement 获取dom节点
      e.srcElement.style.background = "red";
      console.log(e.srcElement.dataset.aid);
      console.log(e.srcElement.dataset);
    }
  }
};
</script>


<style>
.red {
  color: red;
}
</style>
