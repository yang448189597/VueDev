<template>
    
    <div>
        <br>
        <h1>News Demo</h1>
        <br>

        <ul class="list">
            <li v-for="(item,key) in newsList" :key="(item,key)">
                <router-link :to="'/content/'+item.aid">{{key}}------------{{item.title}}</router-link>
            </li>
        </ul>


        <br>
        <h1>Pcontent Demo</h1>
        <br>

        <ul>
            <li v-for="(item,key) in productList" :key="(item,key)">
                <router-link :to="'/pcontent/?id='+key">{{key}}------------{{item}}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import store from '../vuex/store.js'

export default {
    data(){
        return {
            msg:"我是一个新闻的Demo",
            newsList:[],
            productList:['商品1111','商品1111','商品1111'],
        }
    },
    store,
    methods:{
        requestData(){
            var api ='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'

            this.$http.get(api).then((response)=>{
                console.log(response)
                this.newsList = response.body.result;
                // 请求到数据之后 放入store.state
                this.$store.commit('addList',response.body.result)
                // console.log(response.body.data.tech)
            },function(err){
                console.log(err)
            })
        }
    },

    mounted(){
        var listData = this.$store.state.list;

        if(listData.length > 0){
            this.newsList = listData;
        }else{
            this.requestData();
        }

    }
}
</script>

<style lang='scss'>
    .list{
        li {
            height: 3.4rem;
            line-height: 3.4rem;
            border-bottom: 1px solid #eeeeee;
            font-size: 1.6rem

            a{
                color: #666;
            }
        }
    }

</style>
