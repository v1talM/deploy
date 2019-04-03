const state = {
    log: '',
    requestProgress: '40%',
    showProgress: false,
}

const mutations = {
    PULL_CODE_BY_MODULE (state, res) {
        state.log += res + '<br/><br/>'
    },
    SET_REQUEST_PROGRESS (state, complete) {
        state.requestProgress = complete
    },
    SET_REQUEST_SHOWPROGRESS (state, show) {
        state.showProgress = show
    }
}

const actions = {
    pullCodeByModule ({commit}, module) {
        commit('PULL_CODE_BY_MODULE', module)
    },
    setRequestProgress ({commit}, complete) {
        commit('SET_REQUEST_PROGRESS', complete)
    },
    setRequestShowProgress({commit}, show) {
        commit('SET_REQUEST_SHOWPROGRESS', show)
    }
}

export default {
    state, mutations, actions
}