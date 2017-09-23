<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/reset.css'
export default {
  name: 'app',
  components:{
    //组件
  }
}
</script>

<style>
#app{
    width: 100%;
    height: 100%;
}
.tabbar{
    height: 50px;
}
</style>
