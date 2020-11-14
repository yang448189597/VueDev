<template>
  <div>
    <h2 class="header">这是一个头部组件-----{{title}}-----{{homemsg}}</h2>
    <button @click="runTest()">执行父组件传过来的方法</button>
    <br/>
    <button @click="getParentData()">获取父组件的数据或者方法</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'头部'
        }
    },
    methods:{
        childRun(){
            alert("父组件执行子组件中的Function")
        },

        getParentData(){
            alert(this.$parent.parentMsg)
         
        }
    },
    props:['title','homemsg','runTest' ]
}
</script>


/* css scoped 局部作用域*/ 
<style scoped>
    h2{
        color: goldenrod
    }

    .header{
        background: #000;
        color: #fff;
    }
</style>


