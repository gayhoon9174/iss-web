<template>
  <div id="nav">
      <!--<router-link to="/">Login</router-link> |
      <router-link to="/ProductListOne">ProductListOne</router-link> |
      <router-link to="/ProductListTwo">ProductListTwo</router-link>-->
  </div>
  <router-view />
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("getMemberInfo");
  },
  components:{
  },
  name: 'App',
  data () {
    return{

    }
  }
}
</script>

<style lang="scss">
@import './assets/css/common.css';
@import './assets/css/font.css';
@import './assets/css/global.scss';
@import './assets/css/board.scss';

.wrap{
  height:100%;
}


#Content{
    width:calc(100% - 300px);
    height:100%;
    float:left;
    background:#F5F3F9;
}

.contents_box{
  background: $white_color;
  padding:40px 30px;
  border-radius: 20px;
  margin-bottom:30px;
}

</style>
