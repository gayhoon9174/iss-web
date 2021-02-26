<template>
    <div>
        <h1>{{ getUserInfo("name") }}님 환영합니다.</h1>
    </div>
    <button @click="logout">로그아웃</button>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    data:() => ({
        drawer: null
    }),
    computed:{
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
            this.$store.dispatch('logout');
            this.$router.push({ name: "Login" })
        }
    }
}
</script>