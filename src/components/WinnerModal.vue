<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '../stores/game';
import { usePlayerStore } from '../stores/player';

import TheModal from './TheModal.vue';

const gameStore = useGameStore();
const playerStore = usePlayerStore();
const modalClosed = ref(false);

const isOpen = computed(() => gameStore.hasWon && modalClosed.value === false);

function handleSubmit(formData: {name: string}) {
  const data = { ...formData, score: playerStore.score };
  console.log(data);
  modalClosed.value = true;
}
</script>

<template>
  <TheModal :is-open="isOpen" @close="modalClosed = true">
    <div v-if="gameStore.hasWon">
      <h2>Congratulations! You've won the game 🎉</h2>
      <div class="flex justify-between">
        <div class="w-1/2">
          <FormKit @submit="handleSubmit" type="form">
            <FormKit label="Player name" name="name" :value="playerStore.name" />
          </FormKit>
        </div>
        <div class="w-1/2">
          <div class="scoreboard w-1/2">
          <h3>Highscores:</h3>
          <ol>
            <li class="flex justify-between"><span>Some user</span><span>5</span></li>
          </ol>
        </div>
        </div>
      </div>
    </div>
  </TheModal>
</template>
