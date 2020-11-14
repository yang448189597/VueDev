<template>
    <div id="vuexHome">
       VuexHome Page ----------- {{this.$store.state.count}}
       <br>
       <el-button type="danger" @click="incCount()">
           增加Count数量
       </el-button>
    </div>
</template>

<script>
//引入

import store from "../../vuex/store.js"
//注册
export default {
    data(){
        return {
            
        }
    },
    store,
    methods:{
        incCount(){
            // 改变vuex store 中的数据
            // 触发 state 里中的书数据
            this.$store.commit('incCount');
        }
    }
}
</script>
