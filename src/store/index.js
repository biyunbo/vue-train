import Vue from 'vue'
import Vuex from 'vuex'
import instance from '../utils/instance'

Vue.use(Vuex)

const GET_DATA = 'GET_DATA'
export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    [GET_DATA] (state,res) {
    	state.data = res
    }
  },
  actions:{
  	getdata({commit}){
  		instance.get(`/topics?tab=job&page=1&limit=10`)
  		.then(function(response){
  			//console.log(response.data)
  			commit("GET_DATA",response.data)
  		})
  		.catch(function(err){
  			console.log(err)
  		})
  	}
  }
})

// getdata = function(cb){
//     instance.get(`/topics?tab=job&page=1&limit=10`)
//     .then(function(data){
//         cb(data.data)
//     })

// }