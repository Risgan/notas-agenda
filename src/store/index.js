import { createStore } from 'vuex'

export default createStore({
  state: {
    modalVisible: false,
    eventos: [],
  },
  getters: {
  },
  mutations: {
    mostrarModal(state) {
      console.log(state);
      state.modalVisible = true;
    },
    ocultarModal(state) {
      state.modalVisible = false;
    },
    agregarEvento(state, nuevoEvento) {
      console.log( state.eventos);
      state.eventos.push(nuevoEvento);
    },
  },
  actions: {
  },
  modules: {
  }
})
