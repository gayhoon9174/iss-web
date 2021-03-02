<template>
    <div id="List">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        list
    </div>
</template>

<script>
import LeftMenu from './../components/Layout/LeftMenu'

export default {
    name: 'List',
    components:{
        LeftMenu
    },
    data () {
    }
}
</script>

<style lang="scss" scoped>
#List{
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
