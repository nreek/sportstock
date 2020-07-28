import api from '@/api'

const actions = {
    setToken({ commit }, payload) {
        window.localStorage.setItem('token', payload)
        commit('SET_TOKEN', payload);
    },
    setUser({ commit }, payload) {
        commit('SET_USER', payload);
    },
    setCreateToken({ commit }, payload) {
        commit('SET_CREATE_TOKEN', payload);
    },
    setActiveCoin({ commit, state }, payload) {
        let coin = state.coins.find( coin => coin.name == payload )
        commit('SET_ACTIVE_COIN', coin);
    },
    async fetchCoins({ commit }) {
        const response = await api.get('wallets')
        commit('FETCH_COINS', response);
    }
}

export default actions;