import axios from 'axios'

const qs = require('query-string')

export const ClientModule = {
  state: {
    authorization: false,
    login: false,
    token: ""
  },
  mutations: {
    SET_AUTH_TOKEN (state, payload) {
      state.token = payload
    }
  },
  actions: {
    async loginUserAction (context, data) {
      try {
        const response = await axios.post('login', qs.stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        if (response.status === 200) {
          console.log(response.data)
          context.commit('SET_AUTH_TOKEN', response.data.access_token)
          localStorage.setItem('user',JSON.stringify(response.data.user))
          const token = response.data.access_token
          const type = '_token'
          const date = new Date()
          date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
          const expires = date.toUTCString()
          document.cookie = `${type} = ${token}; expires = ${expires}; path=/`
          return response.status
        }
        return response.status
      } catch (e) {
        return e.response.status
      }
    },
    async registerUserAction (context, data) {
      try {
        const response = await axios.post('register', qs.stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        if (response.status === 200) {
          localStorage.setItem('user',JSON.stringify(response.data.user))
          context.commit('SET_AUTH_TOKEN', response.data.access_token)
          const token = response.data.access_token
          const type = '_token'
          const date = new Date()
          date.setTime(date.getTime() + (24 * 60 * 60 * 1000))
          const expires = date.toUTCString()
          document.cookie = `${type} = ${token}; expires = ${expires}; path=/`
          return response.status
        }
        return response.status
      } catch (e) {
        return e.response
      }
    },

    async logoutUserAction (context, data) {
      try {
        const response = await axios.post('logout', qs.stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        if (response.status === 200) {
          return response.status
        }
        return response.status
      } catch (e) {
        return e.response
      }
    },
  },
  getters: {
  }
}