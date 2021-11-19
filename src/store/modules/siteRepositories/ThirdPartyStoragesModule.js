import axios from "axios";

export const ThirdPartyStoragesModule = {
    state: () => ({
        repositories: [],
        limit:5,
        showMore: false,
    }),
    getters: {
        getComputedRepositories(state) {
            return state.limit ? state.repositories.slice(0,state.limit) : state.repositories
        }
    },
    mutations: {
        setShowMore(state, arg) {
            state.showMore = arg
        },
        setLimit(state, arg) {
            state.limit = arg
        },
        setRepositories(state, repositories) {
            state.repositories = repositories
        },
    },
    actions: {
        async fetchRepositories({commit}) {
            try {
                const response = await axios.get('party-storages')
                commit('setRepositories', response.data)
            } catch (e) {
                alert('Ошибка запроса репозиториев. Повторите попытку позже')
            }
        },
        showMoreBox({commit}) {
            commit('setShowMore', true)
            commit('setLimit', null)
        },
    },
    namespaced:true
}
