<template>
  <div class="main">
    <my-header fixed title="出发地">
      <router-link to="/" slot="left">
        <my-button icon="back">返回</my-button>
      </router-link>
    </my-header>
    <my-index-list class="indexlist">
        <my-index-section v-for="vall in az" :index='vall' :key='vall'>
          <my-cell to='/' v-for='(key,val) in city[vall]' :title='val' :key='key' @click.native="getcity(key,val)" />
        </my-index-section>
    </my-index-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Header,Button,IndexList, IndexSection,Cell } from 'mint-ui';
export default {
  name: 'start',
  data(){
    return{
      az:['A','B','C','D','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','S','Y','Z']
    }
  },
  computed:mapState({
    city: state => state.city,
  }),
  mounted(){
    //获取数据
  },
  methods:{
    getcity(key,val){
      console.log(this.$store)
      this.$store.commit('START',{zhan:val,ma:key})
    }
  },
  components:{
    //组件
    myHeader: Header,
    myButton:Button,
    myIndexList:IndexList,
    myIndexSection:IndexSection,
    myCell:Cell
  }
}
</script>

<style>
.home{
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
}
.indexlist{
  padding-top: 40px;
}
</style>
