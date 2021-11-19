export const FilesForAntiPiracy = {
    state: () => ({
        FilesForAntiPiracyRepositories:[],
        FilesForAntiPiracyMainRepository:[],
        FilesOnAntiPiracy:[],
        FileAdd:{}
    }),
    getters: {

    },
    mutations: {
        setFilesForRepositories(state, data) {
            state.FilesForAntiPiracyRepositories = data
        },
        setFilesForMainRepository(state, data) {
            state.FilesForAntiPiracyMainRepository = data
        },
        addFileOnAntiPiracy(state, file) {
            state.FileAdd = file
        },
        updateData(state, arg) {
            if (arg) {
                state.FilesOnAntiPiracy.push(state.FileAdd)
            } else {
                state.FilesOnAntiPiracy = state.FilesOnAntiPiracy.filter(f => f.id !== state.FileAdd.id)
            }
            state.FilesForAntiPiracyRepositories.forEach(elem => {
                if (elem.id === state.FileAdd.id) {
                    elem['onAntipiracy'] = arg
                }
            })
            state.FilesForAntiPiracyMainRepository.forEach(elem => {
                if (elem.id === state.FileAdd.id) {
                    elem['onAntipiracy'] = arg
                }
            })
        },
        returnFileAdd(state) {
            state.FileAdd = {}
        }
    },
    actions: {
        FilesForAntiPiracyCollector({commit, rootGetters}) {
            let FilesMainRepository = rootGetters["MainRepositoryModule/getFilesForAntiPiracy"]
            commit('setFilesForMainRepository', FilesMainRepository)
            let FilesRepositories = rootGetters["ClientStorageFilesModule/getFilesForAntiPiracy"]
            commit('setFilesForRepositories', FilesRepositories)
        },
        listenAnswerForAddFile({commit}, answer) {
            commit('updateData', answer)
            commit('returnFileAdd')
        },
    },
    namespaced:true
}
