import {getDefaultGetters, getDefaultMutations} from "../../util/store";

let state = {
    userInfo: null,
    loginTime: null
}

export default {
    namespaced: true,
    state,
    getters: getDefaultGetters(state),
    mutations: getDefaultMutations(state)
}
