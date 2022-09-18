<script setup lang="ts">
import TheGame from '../components/TheGame.vue';
import AppBar from '../components/AppBar.vue';
import TheScore from '../components/TheScore.vue';
import { usePlayerStore } from '../stores/player';
import WinnerModal from '../components/WinnerModal.vue';
import SettingsModal from '@/components/SettingsModal.vue';

const playerStore = usePlayerStore();

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
        <WinnerModal/>
      </div>
      <SettingsModal/>
    </section>
  </div>
</template>

<style lang="postcss">
.wrapper {
  @apply min-h-screen w-full;
}
</style>
