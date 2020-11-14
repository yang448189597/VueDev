<template>
    <div id="auto">
        <h2>我是视频组件</h2>
        <br>
        <button @click="emitNews()">给News组件广播数据</button>
        <br>
    </div>
</template>

<script>

/*
    非父子组件传值
    1、新建一个js文件 引入Vue 新建实例 暴露实例
    2、在广播的地方引入实例
    3、通过VueEmit.$emit("名称","数据")
    4、在接收数据的地方 
        VueEmit.$on("名称",function(){

        })
 */
import VueEvent from '../model/VueEvent.js'

export default {
    data(){
        return {
            msg:"我是Auto组件的msg"
     
        }
    },
    methods:{
        emitNews(){
           VueEvent.$emit('to-news',this.msg)
        }
    },
    mounted(){
        VueEvent.$on('to-auto',function(data){
            alert(data)
        })
    }
}
</script>

