import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({storage: window.localStorage})

const store = new Vuex.Store({
    modules: {
        user
    },
    plugins: [vuexLocal.plugin]
})

export default store
