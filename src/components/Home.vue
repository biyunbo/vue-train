<template>
  <div class="main">
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
          <router-link class="city-z" to="/start"> {{start}} </router-link>
        </div>
        <div class="end">
          <div class="text">到达地</div>
          <router-link class="city-z" to="/end"> {{end}} </router-link>
        </div>
      </div>
      <my-button class='button' type="primary" size="large" @click='getdata'>查询</my-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { DatetimePicker,Cell,Search,Header,Button,MessageBox  } from 'mint-ui';
export default {
  name: 'home',
  data(){
      return{
          pickerValue:new Date().toISOString().slice(0,10),
          startDate: new Date(),
          endDate: new Date('2020'),
      }
  },
  computed:mapState({
    start: state => state.start.zhan,
    end: state => state.end.zhan,
    date: state => state.date
  }),
  mounted(){
    //获取数据
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
      var date = formatDate(date)
      this.$store.commit('DATE',date)
      console.log(this.$store)
    },
    getdata(){
      var {date,start,end} = this.$store.state
      if(date == '请选择日期'){
        MessageBox('提示', '请选择日期');
      }else if(start.zhan == ''){
        MessageBox('提示', '请选择出发地');
      }else if(end.zhan == ''){
        MessageBox('提示', '请选择到达地');
      }else{
        this.$router.push('/list')
        this.$store.dispatch('getdata',{'departureCityCode':start.ma,'arrivalCityCode':end.ma,"departureCityName":start.zhan,"arrivalCityName":end.zhan,"departureDate":date})
      }
    }
  },
  components:{
    //组件
    myDatetimePicker:DatetimePicker,
    myCell:Cell,
    myHeader: Header,
    myButton:Button,
    MessageBox
  }
}
</script>

<style scoped>
.main{
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
}
.dataname{
  padding-top: 70px;
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
