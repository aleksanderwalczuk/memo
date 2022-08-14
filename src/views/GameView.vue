<script setup lang="ts">
import TheGame from '../components/TheGame.vue';
</script>

<template>
  <div class="wrapper">
    <aside class="h-14 border-b-2">
      <h2>Scoring, info</h2>
    </aside>
    <section class="flex-wrap h-full">
      <h1>Game is on</h1>
      <TheGame />
    </section>
  </div>
</template>

<style lang="postcss">
.wrapper {
  @apply min-h-screen w-full;
}
</style>
