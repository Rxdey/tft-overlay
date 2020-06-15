import Vue from 'vue';
import Vuex from 'vuex';
import { ipcRenderer } from 'electron';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    equipList: [],
    chessList: [],
    raceList: [],
    jobList: [],
    season: '3'
  },
  mutations: {
    setequipList(state, data) {
      state.equipList = data;
    },
    setchessList(state, data) {
      state.chessList = data;
    },
    setraceList(state, data) {
      state.raceList = data;
    },
    setjobList(state, data) {
      state.jobList = data;
    }
  },
  actions: {
    UPDATE_EQUIPLIST({ state, commit }) {
      if (state.equipList.length) return state.equipList;
      const local = localStorage.getItem('equipList');
      if (local) {
        commit('setequipList', JSON.parse(local));
        return JSON.parse(local);
      }
      const res = ipcRenderer.sendSync('async-getdata', 'equip');
      if (!res) return 0;
      localStorage.setItem('equipList', JSON.stringify(JSON.parse(res).data));
      return JSON.parse(res).data;
    },
    UPDATE_CHESSLIST({ state, commit }) {
      if (state.chessList.length) return state.chessList;
      const local = localStorage.getItem('chessList');
      if (local) {
        commit('setchessList', JSON.parse(local));
        return JSON.parse(local);
      }
      const res = ipcRenderer.sendSync('async-getdata', 'chess');
      if (!res) return 0;
      localStorage.setItem('chessList', JSON.stringify(JSON.parse(res).data));
      return JSON.parse(res).data;
    },
    UPDATE_RACELIST({ state, commit }) {
      if (state.raceList.length) return state.raceList;
      const local = localStorage.getItem('raceList');
      if (local) {
        commit('setraceList', JSON.parse(local));
        return JSON.parse(local);
      }
      const res = ipcRenderer.sendSync('async-getdata', 'race');
      if (!res) return 0;
      localStorage.setItem('raceList', JSON.stringify(JSON.parse(res).data));
      return JSON.parse(res).data;
    },
    UPDATE_JOBLIST({ state, commit }) {
      if (state.jobList.length) return state.jobList;
      const local = localStorage.getItem('jobList');
      if (local) {
        commit('setjobList', JSON.parse(local));
        return JSON.parse(local);
      }
      const res = ipcRenderer.sendSync('async-getdata', 'job');
      if (!res) return 0;
      localStorage.setItem('jobList', JSON.stringify(JSON.parse(res).data));
      return JSON.parse(res).data;
    }
  },
  modules: {
  }
});
