<template>
  <section class="container">
    <!--最外层容器-->
    <section class="menu">
      <!--左边的容器-->
      <v-menu></v-menu>
    </section>
    <section class="content-container">
      <!--右边的容器-->
      <v-todo></v-todo>
    </section>
  </section>
</template>

<script>
import Menu from "./Menu.vue";
import Todo from "./Todo.vue";
export default {
  data() {
    return {};
  },
  components: {
    //挂载组件
    "v-menu": Menu,
    "v-todo": Todo
  }
};
</script>

<style lang="less">
@import "../../common/style/layouts.less";
</style>