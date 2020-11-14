import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* state 在vuex中主要用于存储数据 */
var state = {
  count: 1,
  list: []
}

/* mutations 在vuex中存放方法 主要用于改变state中的数据 */
var mutations = {
  incCount() {
    ++state.count
  },
  addList(state, data) {
    state.list = data
  }
}

/* vuex 实例化 */
const store = new Vuex.Store({
  state,
  mutations: mutations
})

export default store
