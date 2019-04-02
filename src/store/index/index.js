import index from '@/api/index'
const state = {
    log: '',
    requestProgress: '40%'
}

const mutations = {
    PULL_CODE_BY_MODULE (state, module) {
        let res = index.pullCodeByModule(module) + '<br/>'
        state.log += res + '<br/>'
    },
    SET_REQUEST_PROGRESS (state, complete) {
        state.requestProgress = complete
    }
}

const actions = {
    pullCodeByModule ({commit}, module) {
        commit('PULL_CODE_BY_MODULE', module)
    },
    setRequestProgress ({commit}, complete) {
        commit('SET_REQUEST_PROGRESS', complete)
    }
}

export default {
    state, mutations, actions
}