<template>
  <div>
    <br>
    <h1>TodoList Router</h1>
    <br>
    <!-- @keydown 绑定键盘的监听事件 -->
    <!-- <v-header></v-header> -->
    <input type="text" v-model="todo" @keydown="doAdd($event)">
    <!-- <button @click="doAdd()">+增加</button> -->
    <br>
    <br>

    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in todoList" v-if="!item.checked" :key="(item,key)">
        <input type="checkbox" v-model="item.checked" @change="saveList()">
        {{item.title}} - - - -
        <button @click="doDelete(key)">删除</button>
      </li>
    </ul>

    <br>
    <h2>已完成</h2>
    <ul>
      <li class="finish" v-for="(item,key) in todoList" v-if="item.checked" :key="(item,key)">
        <input type="checkbox" v-model="item.checked" @change="saveList()">
        {{item.title}} - - - -
        <button @click="doDelete(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from "../model/storage.js";
// import Header from './Header.vue'

export default {
  data() {
    return {
      todo: "",
      todoList: []
    };
  },

  methods: {
    doAdd(e) {
      // 获取文本框输入的值
      // 将值push入Todolist
      console.log(e.keyCode);
      if (e.keyCode == 13) {
        this.todoList.push({
          title: this.todo,
          checked: false
        });

        this.todo = "";

        storage.set("todoList", this.todoList);
      }
    },

    doDelete(key) {
      this.todoList.splice(key, 1);
      storage.set("todoList", this.todoList);
    },

    saveList() {
      storage.set("todoList", this.todoList);
    }
  },

  // 生命周期函数 vue 页面刷新触发的方法
  mounted() {
    var list = storage.get("todoList");
    if (list) {
      this.todoList = list;
    }
  },

  components: {
    // 'v-header':Header
  }
};
</script>

