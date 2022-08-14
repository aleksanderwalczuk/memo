import { defineStore } from 'pinia';

export const PlayerStore = defineStore({
  id: 'player',
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter += this.counter;
    },
  },
});
