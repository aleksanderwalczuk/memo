import { defineStore } from 'pinia';

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    score: 0,
    name: 'Untitled',
  }),
  getters: {
    doubleCount: (state) => state.score * 2,
  },
  actions: {
    incrementScore() {
      this.score += 1;
    },
    resetScore() {
      this.score = 0;
    },
    setName(name: string) {
      this.name = name;
    },
  },
});
