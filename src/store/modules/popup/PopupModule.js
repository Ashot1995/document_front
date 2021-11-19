export const PopupModule = {
    state: () => ({
        dialogVisibleShow: false,
        dialogVisibleType: '',
    }),
    getters: {

    },
    mutations: {
        setDialogVisibleShow(state, arg) {
            state.dialogVisibleShow = arg
        },
        setDialogVisibleType(state, type) {
            state.dialogVisibleType = type
        }
    },
    actions: {
        showPopup({commit}, type) {
            commit('setDialogVisibleShow', true)
            setTimeout(() => commit('setDialogVisibleType', type), 200)
        },
        hidePopup({commit}) {
            commit('setDialogVisibleType', '')
            setTimeout(() => commit('setDialogVisibleShow', false), 500)
        },
        toggleTypePopup({commit}, type) {
            setTimeout(() => commit('setDialogVisibleType', ''), 0)
            setTimeout(() => commit('setDialogVisibleType', type), 500)
        }
    },
    namespaced:true
}
