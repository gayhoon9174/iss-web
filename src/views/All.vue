<template>
    <div id="All">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        <Read></Read>
    </div>
</template>

<script>
import LeftMenu from '@/components/Layout/LeftMenu'
import Read from '@/components/Board/Read'

export default {
    name: 'All',
    components:{
        LeftMenu,
        Read
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
