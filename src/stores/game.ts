import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { usePlayerStore } from './player';

interface Card {
  id: string,
  name: string,
  guessed: boolean,
}

// when a card is picked timer should start
// when another card has been picked it should be cleared and start again
// when we have a match timer should be cleared again
// now when second timer hasn't finished user can pick first card with previous timer

// disabled should be globaly controlled by this store

function createCards(): Card[] {
  const names = ['foo', 'bar', 'baz', 'foo', 'bar', 'baz'];

  return names.map((name) => ({ name, id: uuidv4(), guessed: false }));
}

const playerStore = usePlayerStore();

export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    counter: 0,
    hasBegun: null as null | number,
    cards: createCards(),
    timeout: null as null | number,
    picked: [] as Pick<Card, 'id' | 'name'>[],
    flushQueue: [] as string[],
    // guessed: [] as Card[],
    wonTimestamp: null as null | number,
  }),
  getters: {
    pickedLimit: ({ picked }) => picked.length === 2,
    notGuessed: ({ cards }) => cards.filter(({ guessed }) => guessed === false),
    guessed: ({ cards }) => cards.filter(({ guessed }) => guessed === true),
    // eslint-disable-next-line max-len
    areEqual: ({ picked }) => picked.length === 2 && picked.every((value) => value.name === picked[0]?.name),
    hasWon: ({ hasBegun, cards }) => hasBegun !== null && cards.every(
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
        setTimeout(() => {
          this.flushAll();
          playerStore.incrementScore();
        }, 1000);

        if (this.hasWon) {
          // tme could be resolved in players store
          setTimeout(() => {
            this.wonTimestamp = Date.now();
          }, 1000);
        }
      }
    },
    // eslint-disable-next-line consistent-return
    register(card: Pick<Card, 'id' | 'name'>): void {
      if (this.pickedLimit) {
        return;
      }

      if (this.hasBegun !== null) {
        this.hasBegun = Date.now();
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
    clearTimeout() {
      if (this.timeout != null) {
        clearTimeout(this.timeout);
      }
    },
    clearFlushQueue() {
      this.clearTimeout();
      this.flushQueue = [] as string[];
      this.picked = [];
    },
    flushAll() {
      this.clearTimeout();
      this.picked = [];
    },
  },
});
