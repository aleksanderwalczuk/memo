<script setup lang="ts">
import TheGame from '../components/TheGame.vue';
import AppBar from '../components/AppBar.vue';
import TheScore from '../components/TheScore.vue';
import { usePlayerStore } from '../stores/player';
import { useGameStore } from '../stores/game';
import TheModal from '../components/TheModal.vue';

const playerStore = usePlayerStore();
const gameStore = useGameStore();

</script>

<template>
  <div class="wrapper">
    <AppBar>
      <TheScore :score="playerStore.score"/>
    </AppBar>
    <section class="flex-wrap h-full">
      <div class="px-4 py-2">
        <h1>Game is on</h1>
        <TheGame />
        <TheModal :is-open="gameStore.hasWon">
          <!-- <button @click="open = true">FOOO</button> -->
          <h2>Congratulations! You've won the game 🎉</h2>
          <form class="flex flex-col">
            Fill the form below to proceed
          </form>
        </TheModal>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
.wrapper {
  @apply min-h-screen w-full;
}
</style>
