import { createStore } from 'vuex'

export default createStore({
  state: {

    contacsDB: []

  },
  getters: {
  },
  mutations: {

    readContactsDbInit(state) {
      const contacsList = localStorage.getItem("dinarvandAppContactsList");
      if (contacsList) {
        state.contacsDB = JSON.parse(contacsList);
        return state.contacsDB;
      } else {
        return [];
      }
    },

    readContactsDStore(state) {
      return state.contacsDB;
    },

    addItemContactsDB(state, newItem) {
      state.contacsDB.push(newItem);
      const contacsList = JSON.stringify(state.contacsDB)
      localStorage.setItem("dinarvandAppContactsList", contacsList);
    },

    updateItemContactsDB(state, item) {

      for (var i = 0; i < state.contacsDB.length; i++) {
        if (state.contacsDB[i]['id'] === item['id']) {
          state.contacsDB[i] = item;
          const contacsList = JSON.stringify(state.contacsDB)
          localStorage.setItem("dinarvandAppContactsList", contacsList);
          return true
        }

      }
    
    },


    removeItemContactsDB(state, itemId) {

      for (var i = 0; i < state.contacsDB.length; i++) {
        if (state.contacsDB[i]['id'] === itemId) {
          state.contacsDB.splice(i, 1);
          const contacsList = JSON.stringify(state.contacsDB)
          localStorage.setItem("dinarvandAppContactsList", contacsList);
          return true
        }

      }
    
    },


  },
  actions: {
    execReadContactsDbInit({ commit, state }) {
      commit("readContactsDbInit")
      return state.contacsDB;
    },

    execReadContactsDbStore({ commit, state }) {
      commit("readContactsDStore")
      return state.contacsDB;
    },

    execAddItemContactsDB({ commit }, item) {
      commit("addItemContactsDB", item)
    },

    execUpdateItemContactsDB({ commit }, item) {
      commit("updateItemContactsDB", item)
    },

    execRemoveItemContactsDB({ commit }, item) {
      commit("removeItemContactsDB", item)
    }

  },
  modules: {
  }
})
