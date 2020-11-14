<template>
    <div id="vuexnews">
        VuexNews Page ------- {{this.$store.state.count}}
    </div>
</template>

<script>
import store from '../../vuex/store.js'
export default {
    data(){
        return{
            
        }
    },
    store
}
</script>

