import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

function createCards() {
  const names = ['foo', 'bar', 'baz'];

  return names.map((name) => ({ name, id: uuidv4(), guessed: false }));
}

export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    counter: 0,
    cards: createCards(),
    picked: [] as any[],
    guessed: [],
  }),
  getters: {
    pickedLimit: ({ picked }) => picked.length === 2,
  },
  actions: {
    register(id: string, timeout?: number) {
      if (this.pickedLimit) {
        return;
      }
      this.counter += this.counter;
      this.picked.push({ id, timeout });
    },
    flushAll() {
      this.picked = [];
    },
    flushOne(id: string) {
      this.picked.find((el) => el.id === id);
      this.picked = this.picked.filter((el) => el.id !== id);
    },
    flushMany(ids: string[]) {
      this.picked = this.picked.filter((el) => ids.includes(el.id));
    },
  },
});
