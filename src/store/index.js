/**
 * Created by fuqihan on 2017/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import hegiht from '../util/height'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    massage: 1,
    aTodos: {
      value: '默认默认',
      id: 0
    }
  },
  getters: {
    nCounts (state) {
      return state.aTodos.id
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})

export default store
