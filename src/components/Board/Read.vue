<template>
    <div id="Read">
        <div class="board_header">
            <div class="title">
                <h3>All</h3>
            </div>
            <!-- <div class="search">
                <form>
                    <select>
                        <option>e-mail</option>
                        <option>name</option>
                    </select>
                </form>
            </div> -->
        </div>
        <table class="board_a_list">
            <colgroup>
                <col width="5%" />
                <col width="*" />
                <col width="10%" />
                <col width="10%" />
            </colgroup>
            <tbody>
                <tr v-for="(user, idx) in getDataInfo" :key="idx" @click="fnView(`${row.id}`)">
                    <td>{{user.id}}</td>
                    <td class="align_left">{{user.email}}</td>
                    <td>{{user.first_name}} {{user.last_name}}</td>
                    <td><img class="list_profile" :src="`${user.avatar}`" alt /></td>
                </tr>
            </tbody>
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
        }
    },
    computed:{
        ...mapState(['dataInfo']),
        ...mapGetters(['getDataInfo']),
    },
    methods:{
        ...mapActions(["getDataList"]),
        //view페이지 이동
        fnView(id) {
			this.body.id = id
			this.$router.push({path:'./view',query:this.body}) //추가한 상세페이지 라우터
        },
    },
    created(){
        this.getDataList(this.pageNum);
    }
}
</script>

<style lang="scss" scoped>
#Read{
    width:100%;
    height:100%;
    display:inline-block;
}
</style>
