<template>
  <div>
    <br>
    <h1>ModelBind Router</h1>
    <br>
    <!-- 双向数据绑定 -->
    <h1>{{inputMsg}}</h1>
    <input type="text" v-model="inputMsg" placeholder="请输入">
    <!-- v-on 点击事件的绑定 -->
    <button v-on:click="getInputMsg()">get表单数据</button>
    <button v-on:click="setInputMsg()">set表单数据</button>
    <!-- 绑定点击事件的两种方式 <v-oc:clic></v-oc:clic> || @click -->
    <button @click="getInputMsg()">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMsg: "我是输入框"
    };
  },
  methods: {
    getInputMsg() {
      // alert('点击了button,执行getInputMsg');
      alert(this.inputMsg);
    },

    setInputMsg() {
      // alert('点击了button,执行getInputMsg');
      this.inputMsg = "我是改变后的数据";
    }
  }
};
</script>

