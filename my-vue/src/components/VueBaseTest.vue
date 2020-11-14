<template>
  <div>
    <br>
    <h1>Vue Base Router</h1>
    <br>
    <div v-bind:title="title">鼠标描上去看一下呗</div>
    <img src="http://39.97.130.168/file/201902/约吗.gif">
    <br>
    <br>

    <!-- v-bind:class :class 的使用 -->
    <div v-bind:class="{'red':flag}">我是一个div</div>
    <div :class="{'green':flag,'red':!flag}">我是另一个div</div>

    <!--绑定属性-->
    <img v-bind:src="url">
    <br>
    <img :src="url">
    <br>

    <!--绑定数据 方法1 {{}}-->
    <br>
    <h4>{{msg}}</h4>
    <!--绑定数据 方法2 -->
    <br>
    <div v-text="msg"></div>

    <!-- list 的使用1{{}}-->
    <br>
    <br>
    <h3>list的使用1</h3>
    <ul>
      <li v-for="(item,key) in list " :key="(item,key)">{{key}}----{{item}}</li>
    </ul>
    <br>
    <br>

    <!-- list 的使用2 {{}}-->
    <!-- 当index == 0 第一个item 高亮 -->
    <h3>list的使用2</h3>
    <ul>
      <li
        v-for="(item,index) in list "
        :key="(item,index)"
        :class="{'red':index == 0,'green':index == 1}"
      >{{index}}----{{item}}</li>
    </ul>
    <br>
    <br>

    <!-- list 的使用3 {{}}-->
    <h3>list的使用3</h3>
    <ul>
      <li v-for="item in list2" :key="item">
        {{item.cate}}
        <ol>
          <li v-for="childitem in item.list" :key="childitem">{{childitem.title}}</li>
        </ol>
      </li>
    </ul>
    <br>
    <hr>
    <!-- v-style:class :style的使用 -->
    <div class="box" v-bind:style="{width:boxWidth+'px'}">我是一个Box</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxWidth: 300,
      flag: false,
      title: "我就是一个Title",
      url: "http://39.97.130.168/file/201902/约吗.gif",
      html: "<h2>I‘m IRON MAN</h2>",
      msg: "你好呀，vue",
      obj: {
        name: "luke",
        age: "23"
      },
      list: ["1", "2", "3"],
      list1: [
        { title: "1111" },
        { title: "2222" },
        { title: "3333" },
        { title: "4444" }
      ],
      list2: [
        {
          cate: "国内新闻",
          list: [
            { title: "国内新闻1111" },
            { title: "国内新闻2222" },
            { title: "国内新闻3333" },
            { title: "国内新闻4444" }
          ]
        },
        {
          cate: "国外新闻",
          list: [
            { title: "国外新闻1111" },
            { title: "国外新闻2222" },
            { title: "国外新闻3333" },
            { title: "国外新闻4444" }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.red {
  color: red;
}

.green {
  color: green;
}

.box {
  height: 100px;
  width: 100px;
  background: red;
}

.finish{
  background: red;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
