<template>
    <dir>
        <li v-for="(item,index) in pageLists"
            :key="index">
        {{item.title}}-{{item.content}}
        </li>
    </dir>
</template>

<script>
import store from '@/store'
export default {
    name:"List",
    store,
    computed:{
        pageLists (){
            return store.state.lists
        }
    }
}
</script>

<style scoped>

</style>