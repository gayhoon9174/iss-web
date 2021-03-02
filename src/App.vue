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

.wrap{
  height:100%;
}

</style>
