<template>
    <div id="Write">
        <LeftMenu></LeftMenu>
    </div>
    <div id="Content">
        write
    </div>
</template>

<script>
import LeftMenu from './../components/Layout/LeftMenu'

export default {
    name: 'Write',
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
#Write{
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
