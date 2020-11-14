<template>
    <div id="content">
        我是商品详情页面

    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"数据"
        }
    },
    mounted(){
        //获取get传值
        console.log(this.$route.query) // 获取动态路由传值
        
    }
}
</script>
