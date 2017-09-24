import Vue from 'vue'
import Vuex from 'vuex'
import instance from '../utils/instance'
import axios from 'axios'

Vue.use(Vuex)

const GET_DATA = 'GET_DATA'
const DATE = 'DATE'
const START = 'START'
const END = 'END'


export default new Vuex.Store({
  state: {
    data:[],
    date:'请选择日期',
    start:{
      zhan:'',
      ma:''
    },
    end:{
      zhan:'',
      ma:''
    },
    city:{
      "A":{
        "北京": "200",
        "郑州": "1202",
        "广州": "602",
        "南京": "1602",
        "西安": "2702",
        "上海": "2500",
        "深圳": "619",
        "徐州": "1620",
        "重庆": "300",
        "天津": "3000",
        "武汉": "1402",
        "成都": "2802",
        "哈尔滨": "1102",
        "东莞": "606"
      },
      "B":{
        "株洲": "1515",
        "沈阳": "1902",
        "济南": "2402",
        "洛阳": "1210",
        "厦门": "414",
        "青岛": "2413",
        "乌鲁木齐": "3102",
        "阿克苏": "3103",
        "安康": "2703",
        "安陆": "41476",
        "安庆": "103",
        "鞍山": "1903",
        "安顺": "803"
      }
  }
  },
  mutations: {
    [GET_DATA] (state,res) {
    	state.data = res
    },
    [DATE] (state,res) {
      state.date = res
    },
    [START] (state,res) {
      state.start = res
    },
    [END] (state,res) {
      state.end = res
    }
  },
  actions:{
  	getdata({commit},data){
  		instance.get(`/station_200_2500?r=train/trainTicket/getTickets&primary[departureDate]=2017-09-24&primary[departureCityCode]=1903&primary[departureCityName]=鞍山&primary[arrivalCityCode]=200&primary[arrivalCityName]=北京`)
  		.then(function(response){
  			//console.log(response.data)
  			commit("GET_DATA",response.data)
  		})
  		.catch(function(err){
  			console.log(err)
  		})
  	},
  }
})

// getdata = function(cb){
//     instance.get(`/topics?tab=job&page=1&limit=10`)
//     .then(function(data){
//         cb(data.data)
//     })

// }