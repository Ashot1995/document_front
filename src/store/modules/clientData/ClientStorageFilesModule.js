import axios from "axios";

export const ClientStorageFilesModule = {
    state: () => ({
        RepositoryFiles: [],
        all_files_arrived: false,
        FilesForAntiPiracy:[]
    }),
    getters: {
        getFilesForAntiPiracy(state) {
            // TODO переделать, на каждый репозиторий подтянуть свои файлы и структурировать по репозиториям(не забыть про отображение)
            state.RepositoryFiles.forEach(elem => {
                if (
                    elem.owner_ru === ''
                    && elem.owner_en === ''
                    && elem.owner_cn === ''
                    && elem.author_ru === ''
                    && elem.author_en === ''
                    && elem.author_cn === ''
                ) {

                    state.FilesForAntiPiracy.push(elem)
                }
            })
            return state.FilesForAntiPiracy
        }
    },
    mutations: {
        setFiles(state, data) {
            state.RepositoryFiles = data
        },
        addFiles(state, data) {
            data.forEach(file => {
                state.RepositoryFiles.push(file)
            })
            state.all_files_arrived = true
        }
    },
    actions: {
        async onloadClientRepositoryFiles({commit, state}) {
            if (state.RepositoryFiles.length === 0) {
                try {
                    let storages = await axios.get('/config/RepositoryFiles.json')
                    commit('setFiles', storages.data)
                } catch (e) {
                    alert('Ошибка')
                }
            }
        },
        async onloadFilesMore({commit}) {
            try {
                let storages = await axios.get('/config/RepositoryFilesShowMore.json')
                commit('addFiles', storages.data)
            } catch (e) {
                alert('Ошибка')
            }
        },
    },
    namespaced:true
}
