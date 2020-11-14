<template>
    <div id="life">
       Study 生命周期吖 ---- {{msg}}
    <br>
    <button @click="setMsg()">执行方法改变msg</button>

    </div>

</template>

<script>
export default {
    data(){
        return {
            msg:'msg'
        }
    },
    methods:{
        setMsg(){
            this.msg = "我是改变后的数据呀"
        }
    },
    beforeCreated(){
        console.log('实例创建之前')
    },
    created(){
        console.log('实例创建完成') 
    },
    beforeMount(){
        console.log('模板编译之前') 
    },
    mounted(){ /*请求数据放 操作dom 在这个里面 必须记住 mounted */
        console.log('模板编译完成') 
    },
    beforeUpdate(){
        console.log('数据更新之前') 
    },
    updated(){
        console.log('数据更新完成')
    },
    beforeDestroy(){
        console.log('实例销毁之前')
    },
    destroyed(){
        console.log('实例销毁完成')
    }

}
</script>

