<template>
  <div>
    <br>
    <h1>Home Router</h1>
    <br>
    <v-header :title="title" :homemsg="homemsg" :runTest="runTest"></v-header>
    <v-header ref="header"></v-header>
    <hr>
    <el-button type="danger" @click="getChildData()">获取子组件的数据和方法</el-button>

    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <br>
    <hr>

    <!-- 所有的内容要被根节点所包含 -->
    <h2>这是一个首页 -----{{msg}}</h2>

    <v-life></v-life>
    <button @click="run()">按钮，点一下啊</button>
    <br>
    <br>
    <br>
    <button @click="getData()">请求数据</button>
    <hr>
    <br>

    <ul>
      <li v-for="item in dataList" :key="item">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
/*
父组件给子组件传值
    1.父组件调用子组件的时候 绑定动态属性
        <v-header :title="title "></v-header>
    2.在子组件里面通过 props接收父组件传递过来的值

父组件主动获取子组件的数据和方法
    1.调用子组件的时候定义一个ref
    <v-header ref="header"></v-header>
    2.在父组件里面通过
    this.$ref.header.属性
    this.$ref.header.方法

子组件主动获取父组件的数据和方法
    this.$parent.数据
    this.$parent.方法
*/

import Header from "./Header.vue";
import Life from "./Life.vue";
export default {
  data() {
    return {
      parentMsg: "我是父组件的数据,子组件来获取我呀",
      title: "首页(传值给子组件)",
      homemsg: "home传递过来的",
      msg: "我是一个首页啊",
      dataList: []
    };
  },
  methods: {
    runTest() {
      alert("我是Home组件的run方法");
    },
    // 请求网络数据
    getData() {
      var api = "https://www.apiopen.top/journalismApi";
      // 箭头函数
      this.$http.get(api).then(
        response => {
          console.log(response);
          //注意this的指向
          this.dataList = response.body.data.dy;
          console.log(response.body.data.dy);
        },
        function() {
          console.log(err);
        }
      );
    },
    getChildData() {
      // alert(this.$refs.header.msg)
      this.$refs.header.childRun();
    }
  },

  components: {
    "v-header": Header,
    "v-life": Life
  },

  mounted() {
    this.getData();
  }
};
</script>


/* css scoped 局部作用域*/ 
<style scoped>
h2 {
  color: rebeccapurple;
}
</style>


