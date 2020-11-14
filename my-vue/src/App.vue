<template>
  <div id="app">

    <header>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <router-link to="/Home">Home</router-link>
    <router-link to="/ElementTable">ElementTableDemo</router-link>   
    <router-link to="/NewsDemo">NewsDemo</router-link>   
    <router-link to="/VuexTest/vuexhome">VuexDemo</router-link>   
    <router-link to="/User/adduser">User</router-link>
    <router-link to="/TodoList">TodoList</router-link>
    <router-link to="/RequestData">RequestData</router-link>
    <router-link to="/VueEmit">VueEmit</router-link>
    <router-link to="/TwoWayBindModel">TwoWayBindModel</router-link>
    <router-link to="/VueBaseTest">VueBaseTest</router-link>

    </header>


    <br>
    <hr>
    <h2>-------------router start-------------</h2>
    <router-view></router-view>
    <br>  
    <h2>-------------router end-------------</h2>
    <hr>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
};
</script>

<style>

.header{
  height: 4.4rem;
  background: #000;
  color: red;
  line-height: 4.4rem;
  text-align:center;


}


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
