const mutations = {
    TOGGLE_THEME (state) {
        const theme = state.theme == 'light' ? 'dark' : 'light'

        localStorage.setItem('theme', theme)
        state.theme = theme
    },
    SET_TOKEN (state, payload) {
        state.token = payload
    },
    SET_USER (state, payload) {
        state.user = payload
    },
    FETCH_COINS (state, payload) {
        state.coins = payload
    },
    SET_ACTIVE_COIN (state, payload) {
        state.activeCoin = payload
    },
    SET_CREATE_TOKEN (state, payload) {
        state.creatingToken = payload
    }
}

export default mutations