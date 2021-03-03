<template>
    <div id="Read">
        <table>
            <tr>
                <td></td>
                <td>E-mail</td>
                <td>Name</td>
                <td>Profile</td>
            </tr>
            <tr v-for="(user, idx) in getDataInfo" :key="idx">
                <td>{{user.id}}</td>
                <td>{{user.email}}</td>
                <td>{{user.first_name}} {{user.last_name}}</td>
                <td><img :src="`${user.avatar}`" alt /></td>
            </tr>
        </table>
    </div>    
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"

export default {
    name: 'Read',
    components:{
    },
    data () {
        return {
            dataInfo: 110,
            myname:'ghoon'
        }
    },
    computed:{
        ...mapState(['dataInfo']),
        ...mapGetters(['getDataInfo']),
    },
    methods:{
        ...mapActions(["getDataList"]),
    },
    created(){
        this.getDataList(this.pageNum);
    }
}
</script>

<style lang="scss" scoped>
#Read{
    width:300px;
    height:100%;
    display:inline-block;
    float:left;
}
#Content{
    width:calc(100% - 300px);
    height:100%;
    display:inline-block;
    float:left;
    background:#F5F3F9;
}
</style>
