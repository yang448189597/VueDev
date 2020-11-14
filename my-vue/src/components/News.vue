<template>
    <div id="news">
        <h2>我是新闻组件</h2>
        <br>
        <button @click="emitAuto()">给Auto组件广播数据</button>
    </div>
</template>

<script>
import VueEvent from '../model/VueEvent'


export default {
    data(){
        return {
            msg:'我是News中的msg'
        }
    },
    methods:{
    emitAuto(){
           VueEvent.$emit('to-auto',this.msg)
        }
    },

    mounted(){
        VueEvent.$on('to-news',function(data){
            alert(data)
        })
    }
}
</script>

