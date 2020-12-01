import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho.js'
import parametros from './modules/parametros.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{carrinho, parametros}
})