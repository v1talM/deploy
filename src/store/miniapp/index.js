const state = {
    selectApp: ''
}

const mutations = {
    SET_SELECT_APP (state, info) {
        state.selectApp = info
    }
}

const actions = {
    setSelectApp({commit}, info) {
        commit('SET_SELECT_APP', info)
    }
}

export default {
    state, mutations, actions
}