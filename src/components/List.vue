<template>
  <div class="main">
    <my-header fixed :title="start+'  ------>  '+end">
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
              <div class="price"><span>￥</span>{{item.price}}<b>起</b></div>
            </div>
          </div>
          <div class="line2">
            <div :class="item1.leftNumber>0 ? 'you' : 'wu' " class="box"  v-for='item1 in item.seatDesc'>
              <span >{{item1.seatName}}</span>
              <span v-if='item1.seatStatus!=""'>{{item1.seatStatus}}</span>
              <span v-else>{{item1.leftNumber}}张</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Header,Button,Indicator } from 'mint-ui';
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
  created(){
    console.log(this.data)
    if(this.data.length == 0){
      Indicator.open('加载中...')
      console.log(1)
    }else{
      Indicator.close();
    }
  },
  beforeUpdate(){
    console.log(this.data)
    if(this.data.length == 0){
      Indicator.open('加载中...')
      console.log(1)
    }else{
      Indicator.close();
    }
  },
  components:{
    //组件
    myHeader: Header,
    myButton:Button,
    Indicator
  }
}
</script>

<style lang="scss" scoped>
.list{
  padding-top: 40px;
  background: #F3F2F5;
}
.loding{
  padding-top: 40px;
}
.line1{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.line2{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 30px;
  padding: 0 20px;
  background: #fff;
  .box{
    width: 80px;
    font-size: 12px;
    line-height: 30px;
  }
  .you{
    color: #051B28;
  }
  .wu{
    color: #ccc;
  }
}
.li{
  margin-bottom: 10px;
  border: 1px solid #ccc;
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
  line-height: 45px;
  font-size: 18px;
  font-weight: 600;
}
.departStationName{
  height: 35px;
  line-height: 25px;
  font-size: 16px;
  color: #555;
}
.trainNum{
  height: 35px;
  line-height: 45px;
  color: #666;
  font-size: 14px;
  text-align: center;
}
.duration{
  height: 35px;
  line-height: 25px;
  color: #666;
  font-size: 12px;
  text-align: center;
}
.destArriveTime{
  height: 35px;
  line-height: 45px;
  font-size: 18px;
  font-weight: 600;
}
.destStationName{
  height: 35px;
  line-height: 25px;
  font-size: 16px;
  color: #555;
}
.pic{
  height: 70px;
  line-height: 70px;
  color: #F77333;
  span{
    font-size: 12px;
  }
  b{
    font-weight: 300;
    color: #999;
    font-size: 12px;
  }
}
</style>
