<template>
  <div class="home">
    <myHeader fixed title="首页"></myHeader>
    <div class="dataname">出发日期</div>
    <li class="date" @click="openPicker">{{date}}</li>
    <my-datetimePicker 
      ref="picker" 
      type="date" 
      v-model="pickerValue" 
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="handleConfirm"
      ></my-datetimePicker>
      <div class="city">
        <div class="start">
          <div class="text">出发地</div>
          <router-link class="city-z" to="/start"></router-link>
        </div>
        <div class="end">
          <div class="text">到达地</div>
          <router-link class="city-z" to="/end"></router-link>
        </div>
      </div>
      <my-button class='button' type="primary" size="large">查询</my-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { DatetimePicker,Cell,Search,Header,Button } from 'mint-ui';
export default {
  name: 'home',
  data(){
      return{
          pickerValue:new Date().toISOString().slice(0,10),
          startDate: new Date(),
          endDate: new Date('2020-1-1'),
          date:'请选择日期',
          value:'1'
      }
  },
  computed:mapState({
    data: state => state.data.data,
  }),
  mounted(){
    //获取数据
    this.$store.dispatch('getdata')
    console.log(this.$refs.picker)
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
    handleConfirm(date){
      var formatDate = function (date) {
          var y = date.getFullYear();
          var m = date.getMonth() + 1;
          m = m < 10 ? '0' + m : m;
          var d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          return y + '-' + m + '-' + d;
      };
      this.date = formatDate(date)
    }
  },
  components:{
    //组件
    myDatetimePicker:DatetimePicker,
    myCell:Cell,
    myHeader: Header,
    myButton:Button
  }
}
</script>

<style scoped>
.home{
  padding-top: 70px;
  padding-left: 10px;
  padding-right: 10px;
}
.dataname{
  width: 80%;
  height: 30px;
  text-align: center;
  margin: 0 auto;
  line-height: 30px;
}
.date{
  width: 80%;
  height: 30px;
  border-radius: 50px;
  margin: 0 auto;
  border:1px solid #26a2ff;
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
  color:#26a2ff;
}
.city{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.city-z{
  width: 100px;
  height: 30px;
  border-radius: 50px;
  text-align: center;
  border:1px solid #26a2ff;
  line-height: 30px;
  color:#26a2ff;
  margin-top: 10px;
  display: block;
}
.text{
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
}
.button{
  margin-top: 200px;
}
</style>
