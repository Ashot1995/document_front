import axios from "axios";

export const MainRepositoryModule = {
    state: () => ({
        Files:[],
        FileToRemove: {},
        FilesForAntiPiracy:[]
    }),
    getters: {
        getFilesForAntiPiracy(state) {
            state.Files.forEach(elem => {
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
        setFileToRemove(state, File) {
            state.FileToRemove = File
        },
        removeFile(state, arg) {
            if (arg === true) {
                state.Files = state.Files.filter(f => f.id !== state.FileToRemove.id)
            }
            state.FileToRemove = {}
        },
        setFiles(state, Files) {
            state.Files = Files
        }
    },
    actions: {
        async fetchGetFiles({commit}) {
            try {
                const response = await axios.get('main-storages')
                commit('setFiles', response.data)
            } catch (e) {
                alert('Ошибка')
                console.log(e)
            }
        }
    },
    namespaced:true
}
