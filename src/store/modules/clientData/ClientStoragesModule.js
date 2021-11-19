import axios from "axios";

export const ClientStoragesModule = {
    state: () => ({
        Points: [],
        NewPointType:'',
        PointToRemove: {},
    }),
    getters: {

    },
    mutations: {
        setNewPointType(state, type) {
            state.NewPointType = type
        },
        setPointToRemove(state, Point) {
            state.PointToRemove = Point
        },
        removePoint(state, arg) {
            if (arg === true) {
                state.Points = state.Points.filter(f => f.id !== state.PointToRemove.id)
            }
            state.PointToRemove = {}

        },
        setPoints(state, Points) {
            state.Points = Points
        },
        createNewPoint(state) {
            const newPoint = {
                id: Date.now(),
                Authors: [],
                Company:[],
                Participants:[],
                AdditionalInformation: '',
                Type: 1,
                logoType: state.NewPointType,
                stateId: 1,
                Files: []
            }
            state.Points.unshift(newPoint)
            state.NewPointType = ''
        },
        saveData(state, Point) {
            state.Points.forEach(elem => {
                if (elem.id === Point.id) {
                    elem.Authors = Point.Authors
                    elem.Company = Point.Company
                    elem.Participants = Point.Participants
                    elem.AdditionalInformation = Point.AdditionalInformation
                    elem.Type = Point.Type
                    elem.logoType = Point.logoType
                    elem.stateId = Point.stateId
                    elem.Files = Point.Files
                }
            })
        }
    },
    actions: {
        async onloadClientRepositories({commit}) {
            try {
                let storages = await axios.get('client-storages')
                commit('setPoints', storages.data)
            } catch (e) {
                alert('Ошибка')
            }
        },
    },
    namespaced:true
}
