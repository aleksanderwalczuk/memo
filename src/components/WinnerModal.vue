<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '../stores/game';
import { usePlayerStore } from '../stores/player';

import TheModal from './TheModal.vue';

const gameStore = useGameStore();
const playerStore = usePlayerStore();
const modalClosed = ref(false);

const isOpen = computed(() => gameStore.hasWon && modalClosed.value === false);
</script>

<template>
  <TheModal :is-open="isOpen" @close="modalClosed = true">
    <div v-if="gameStore.hasWon">
      <h2>Congratulations! You've won the game 🎉</h2>
      <form class="flex flex-col">
        Fill the form below to proceed
      </form>
    </div>
  </TheModal>
</template>
