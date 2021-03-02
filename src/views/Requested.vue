<template>
    <div id="Requested">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        Requested
    </div>
</template>

<script>
import LeftMenu from './../components/Layout/LeftMenu'

export default {
    name: 'Requested',
    components:{
        LeftMenu
    },
    data () {
    }
}
</script>

<style lang="scss" scoped>
#Requested{
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
