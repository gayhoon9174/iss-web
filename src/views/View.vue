<template>
    <div id="View">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        <Viewcomp></Viewcomp>
    </div>
</template>

<script>
import LeftMenu from '@/components/Layout/LeftMenu'
import Viewcomp from '@/components/Board/View'

export default {
    name: 'View',
    components:{
        LeftMenu,
        Viewcomp
    },
    data () {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
#View{
    width:300px;
    height:100%;
    float:left;
}
</style>
