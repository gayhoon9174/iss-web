<template>
    <div id="All">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        <List></List>
    </div>
</template>

<script>
import LeftMenu from '@/components/Layout/LeftMenu'
import List from '@/components/Board/List'

export default {
    name: 'All',
    components:{
        LeftMenu,
        List
    },
    data () {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
#All{
    width:300px;
    height:100%;
    float:left;
}
</style>
