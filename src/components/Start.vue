<template>
  <myHeader fixed title="出发地">
    <router-link to="/" slot="left">
      <my-button icon="back">返回</my-button>
    </router-link>
  </myHeader>
</template>

<script>
import { Header,Button } from 'mint-ui';

export default {
  name: 'start',
  components:{
    //组件
    myHeader: Header,
    myButton:Button
  }
}
</script>

<style>

</style>
