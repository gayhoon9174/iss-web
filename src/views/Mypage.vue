<template>
    <div>
        <h1>{{ getUserInfo("name") }}{{ userInfo.first_name }}님 환영합니다.</h1>
    </div>
    <button @click="logout">로그아웃</button>
</template>

<script>
import { mapState, mapGetters } from "vuex"

export default {
    data:() => ({
        drawer: null
    }),
    computed:{
        ...mapState(['userInfo']),
        ...mapGetters(['getUser'])
    },
    props:{
        source: String
    },
    methods : {
        getUserInfo(keyname) {
            if( this.getUser == null ) {
                return "";
            }

            if( keyname == null || keyname === "") {
                return "";
            }

            return (this.getUser[keyname]!=null)?this.getUser[keyname]:"";
        },
        logout() {
            this.$store.dispatch('logout'); //dispatch는 actions 실행할때 사용
            this.$router.push({ name: "Login" })
        }
    }
}
</script>