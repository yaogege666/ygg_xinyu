import Vuex from 'vuex'

export function getDefaultGetters(state) {
    let getters = {}
    for (let key in state) getters[key] = (state) => state[key]
    return getters
}

export function getDefaultMutations(state) {
    let mutations = {}
    for (let key in state) mutations[`set${key.charAt(0).toUpperCase()}${key.substring(1, key.length)}`] = (state, data) => state[key] = data
    return mutations
}

export function getModuleStore(moduleName) {
    return Vuex.createNamespacedHelpers(moduleName)
}
