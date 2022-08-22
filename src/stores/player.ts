import { defineStore, type PiniaCustomStateProperties } from 'pinia';

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    score: 0,
    name: 'Untitled',
    level: 0,
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
    loadState() {
      if (window.localStorage != null) {
        return JSON.parse(localStorage.getItem('memoGameState') ?? '[]') as Array<unknown>;
      }
      throw Error('localStorage is undefined');
    },
    setState(state: PiniaCustomStateProperties<{ score?: number, name?: string, level?: number}>) {
      this.$patch(state);
    },
    saveState() {
      if (window.localStorage != null) {
        const savedGameStates = JSON.parse(localStorage.getItem('memoGameState') ?? '[]') as Array<unknown>;
        const gameState = {
          time: Date.now(),
          player: this.name,
          state: this.$state,
        };

        window.localStorage.setItem('memoGameState', JSON.stringify([...savedGameStates, gameState]));
      }
    },
  },
});
