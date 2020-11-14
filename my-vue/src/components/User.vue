<template>
  <div id="user">
    <div class="user">
      <div class="left">
        <ul>
          <li>
            <router-link to="/User/adduser">增加用户</router-link>
          </li>

          <li>
            <router-link to="/User/userlist">用户列表</router-link>
          </li>
        </ul>
      </div>

      <div class="right">
        <br>
        <hr>
        <h2>-------------child router start-------------</h2>
        <router-view></router-view>
        <br>
        <h2>-------------child router end-------------</h2>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是user组件"
    };
  }
};
</script>

<style lang='scss' scoped>
.user {
  display: flex;
  .left {
    width: 200px;
    min-height: 400px;
    border-right: 1px solid #eee;
    li {
      line-height: 2;
    }
  }

  .right {
    flex: 1;
  }
}
</style>
