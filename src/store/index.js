import Vue from 'vue'
import Vuex from 'vuex'

import dataModule from './dataModules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dataModule
  }
})
