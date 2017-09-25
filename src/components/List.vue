<template>
  <div class="main">
    <my-header fixed :title="start+'------'+end">
      <router-link to="/" slot="left">
        <my-button icon="back">返回</my-button>
      </router-link>
    </my-header>
    <div class="list" v-if='data.success'>
      <div v-for="item in data.data.rows">
        <div class="li">
          <div class="line1">
            <div class="start">
              <div class="departDepartTime">{{item.departDepartTime}}</div>
              <div class="departStationName">{{item.departStationName}}</div>
            </div>
            <div class="guo">
              <div class="trainNum">{{item.trainNum}}</div>
              <div class="duration">{{item.duration}}</div>
            </div>
            <div class="end">
              <div class="destArriveTime">{{item.destArriveTime}}</div>
              <div class="destStationName">{{item.destStationName}}</div>
            </div>
            <div class="pic">
              <div class="price">{{item.price}}</div>
            </div>
          </div>
          <div class="line2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Header,Button } from 'mint-ui';
export default {
  name: 'list',
  computed:mapState({
    data: state => state.data,
    start: state => state.start.zhan,
    end: state => state.end.zhan
  }),
  mounted(){
    //获取数据
  },
  methods: {
    
  },
  components:{
    //组件
    myHeader: Header,
    myButton:Button
  }
}
</script>

<style scoped>
.list{
  padding-top: 40px;
}
.line1{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  border: 1px solid #ccc;
  padding: 0 20px;
}
.start{
  width: 80px;
}
.guo{
  width: 70px;
  text-align: center;
}
.end{
  width: 80px;
  text-align: right;
}
.pic{
  width: 90px;
  text-align: right;
}
.departDepartTime{
  height: 35px;
  line-height: 35px;
}
.departStationName{
  height: 35px;
  line-height: 25px;
}
.trainNum{
  height: 35px;
  line-height: 35px;
}
.duration{
  height: 35px;
  line-height: 25px;
}
.destArriveTime{
  height: 35px;
  line-height: 35px;
}
.destStationName{
  height: 35px;
  line-height: 25px;
}
.pic{
  height: 70px;
  line-height: 70px;
}
</style>
