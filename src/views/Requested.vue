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
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
#Requested{
    width:300px;
    height:100%;
    float:left;
}
</style>
