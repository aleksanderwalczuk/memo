<script setup lang="ts">
import { ref } from 'vue';
import TheGame from '../components/TheGame.vue';
import AppBar from '../components/AppBar.vue';
import TheScore from '../components/TheScore.vue';
import { usePlayerStore } from '../stores/player';
import TheModal from '../components/TheModal.vue';

const playerStore = usePlayerStore();

const modalOpen = ref(false);

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
        <TheModal>
          <!-- <button @click="open = true">FOOO</button> -->
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
