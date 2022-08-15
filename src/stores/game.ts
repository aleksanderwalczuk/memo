import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

interface Card {
  id: string,
  name: string,
  guessed: boolean,
  timeout?: number
}

function createCards(): Card[] {
  const names = ['foo', 'bar', 'baz', 'foo', 'bar', 'baz'];

  return names.map((name) => ({ name, id: uuidv4(), guessed: false }));
}

export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    counter: 0,
    hasBegun: false,
    cards: createCards(),
    picked: [] as Pick<Card, 'id' | 'timeout' | 'name'>[],
    // guessed: [] as Card[],
  }),
  getters: {
    pickedLimit: ({ picked }) => picked.length === 2,
    notGuessed: ({ cards }) => cards.filter(({ guessed }) => guessed === false),
    guessed: ({ cards }) => cards.filter(({ guessed }) => guessed === true),
    // eslint-disable-next-line max-len
    areEqual: ({ picked }) => picked.length === 2 && picked.every((value) => value.name === picked[0]?.name),
    hasWon: ({ hasBegun, cards }) => hasBegun === true && cards.every(
      ({ guessed }) => guessed === true,
    ),
  },
  actions: {
    setGuessed(): void {
      if (this.areEqual) {
        this.picked.forEach(({ id }) => {
          const card = this.cards.find((guessedCard) => guessedCard.id === id);

          if (card) {
            card.guessed = true;
          }
        });
        this.flushAll();
      }
    },
    // eslint-disable-next-line consistent-return
    register(card: Pick<Card, 'id' | 'timeout' | 'name'>): void {
      if (this.pickedLimit) {
        return;
      }

      if (this.hasBegun === false) {
        this.hasBegun = true;
      }

      this.counter += this.counter;
      this.picked.push(card);

      this.setGuessed();
    },
    flushOne(id: string) {
      this.picked.find((el) => el.id === id);
      this.picked = this.picked.filter((el) => el.id !== id);
    },
    flushMany(ids: string[]) {
      this.picked = this.picked.filter((el) => ids.includes(el.id));
    },
    flushAll() {
      this.picked.forEach((card) => card.timeout && clearTimeout(card.timeout));
      this.picked = [];
    },
  },
});
