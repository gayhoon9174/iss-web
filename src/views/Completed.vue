<template>
    <div id="Completed">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        Completed
    </div>
</template>

<script>
import LeftMenu from './../components/Layout/LeftMenu'

export default {
    name: 'Completed',
    components:{
        LeftMenu
    },
    data () {
    }
}
</script>

<style lang="scss" scoped>
#Completed{
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
