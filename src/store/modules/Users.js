export default {
  state: {
    counter: 0,
  },
  actions: {
    decrement: ({ commit }) => commit("decrement"),
    increment: ({ commit }) => {
      setTimeout(() => {
        commit("increment", 5);
      }, 2000);
    },
  },
  mutations: {
    decrement: (state) => state.counter--,
    increment: (state, number) => (state.counter = number * 2),
  },
  getters: {
    counter: (state) => state.counter,
  },
};
