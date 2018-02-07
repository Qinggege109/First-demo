import getters from './getters'
const state = {
    content: true,
    loading: false
}
const mutations = {
    contentShow(state) {
        state.content = true
    },
    contentHide(state) {
        state.content = false
    }
}

export default {
    state,
    getters,
    mutations
}