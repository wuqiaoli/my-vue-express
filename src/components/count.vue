<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
        <p>访问状态对象{{count}}</p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>
<script>
import store from '@/store/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default{
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },
    computed:mapState({
            count:state=>state.count  //理解为传入state对象，修改state.count属性
    }),
    // computed:{
    //     ...mapState(["count"]),
    //     count(){
    //         return this.$store.getters.count;
    //     }
    // },
    // //
    computed:{
         ...mapGetters(["count"]),
    } ,
    // methods:mapMutations(['add','reduce']) ,  
    data(){
        return{
            msg:'Hello Vuex',
        }
    },
    methods:{
        ...mapMutations([  
            'add','reduce'
        ]),
        ...mapActions(['addAction','reduceAction'])
    },
}
</script>