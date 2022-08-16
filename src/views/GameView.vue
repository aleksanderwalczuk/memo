<script setup lang="ts">
import TheGame from '../components/TheGame.vue';
</script>

<template>
  <div class="wrapper">
    <aside class="h-14 flex flex-col border-b-2">
      <div class="px-4 py-2 flex-grow">
        <h2>Scoring, info</h2>
      </div>
    </aside>
    <section class="flex-wrap h-full">
      <div class="px-4 py-2">
        <h1>Game is on</h1>
        <TheGame />
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
.wrapper {
  @apply min-h-screen w-full;
}
</style>
