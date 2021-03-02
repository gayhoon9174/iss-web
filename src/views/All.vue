<template>
    <div id="All">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        All
    </div>
</template>

<script>
import LeftMenu from './../components/Layout/LeftMenu'

export default {
    name: 'All',
    components:{
        LeftMenu
    },
    data () {
    }
}
</script>

<style lang="scss" scoped>
#All{
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
