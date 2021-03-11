<template>
    <div id="Modify">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        <Modifycomp></Modifycomp>
    </div>
</template>

<script>
import LeftMenu from '@/components/Layout/LeftMenu'
import Modifycomp from '@/components/Board/Modify'

export default {
    name: 'Modify',
    components:{
        LeftMenu,
        Modifycomp
    },
    data () {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
#Modify{
    width:300px;
    height:100%;
    float:left;
}
</style>
