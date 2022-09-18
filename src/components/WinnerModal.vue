<script setup lang="ts">
import { computed } from 'vue';
import { whenever } from '@vueuse/core';
import { useAppStore } from '@/stores/app';

import { useGameStore } from '../stores/game';
import { usePlayerStore } from '../stores/player';

import TheModal from './TheModal.vue';
import { ModalType } from '@/types/enums';

const gameStore = useGameStore();
const playerStore = usePlayerStore();
const appStore = useAppStore();

const modalInstance = appStore.getModalByName(ModalType.winner);

const isOpen = computed(() => gameStore.hasWon && modalInstance?.open !== true);
whenever(isOpen, () => {
  const modal = appStore.getModalByName(ModalType.winner);

  if (modal) {
    modal.open = true;
  }
});

function handleSubmit(formData: {name: string}) {
  const data = { ...formData, score: playerStore.score };
  console.log(data);

  if (modalInstance) {
    modalInstance.open = false;
  }
}
</script>

<template>
  <TheModal :name="ModalType.winner">
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
