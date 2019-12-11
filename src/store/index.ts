import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import cookie from 'js-cookie';
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.user = userData.user;
    },
    removeAuthData(state) {
      state.idToken = null;
      state.user = null;
    },
  },
  actions: {
    login({ commit }, authData) {
      axios
        .post('/login', {
          email: authData.email,
          password: authData.password,
        })
        .then(res => {
          cookie.set('token', res.data.idToken);
          cookie.set('user', JSON.stringify(res.data));
          commit('authUser', {
            token: res.data.idToken,
            user: JSON.stringify(res.data),
          });
          router.push('/campgrounds');
        })
        .catch(Error);
    },
    tryAutoLogin({ commit }) {
      const token = cookie.get('token');
      if (!token) {
        return;
      }

      const user = cookie.get('user');
      commit('authUser', {
        token: token,
        user: user,
      });
    },
    logout({ commit }) {
      commit('removeAuthData');
      cookie.remove('token');
      cookie.remove('user');
      router.replace('/campgrounds');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.idToken !== null;
    },
  },
  modules: {},
});
