<template>
    <div>
        <h1>{{ userInfo.name }}님 환영합니다.</h1>
    </div>
    <button @click="$store.dispatch('logout')">로그아웃</button>
</template>

<script>
import { mapState } from "vuex"

export default {
    data:() => ({
        drawer: null
    }),
    computed:{
        ...mapState(["userInfo"])
    },
    props:{
        source: String
    }
}
</script>