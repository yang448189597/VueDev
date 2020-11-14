<template>
  <div>
    <br>
    <h1>VueEmit Router</h1>
    <br>
    <!-- 非父子组件之间的通信 -->
    <h1>非父子组件之间的通信</h1>
    <hr>
    <br>
    <v-auto></v-auto>
    <hr>
    <v-news></v-news>
    <hr>
    <br>
  </div>
</template>

<script>

import News from './News.vue'
import Auto from './Auto.vue'

export default {
    data(){
        return {


        }
    },

    components:{
    //挂载组件
    'v-news':News,
    'v-auto':Auto
  },
}
</script>

