import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho.js'
import parametros from './modules/parametros.js'
import *as getters from './getters.js'   


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        nome:' André',
        sobrenome:'Darcie'
    },
    getters:{
        ...getters
    },
    modules:{carrinho, parametros}
})