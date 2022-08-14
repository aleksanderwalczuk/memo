<script setup lang="ts">
import TheCard from '../components/TheCard.vue';
</script>

<template>
  <div class="wrapper">
    <aside class="h-14 border-b-2">
      <h2>Scoring, info</h2>
    </aside>
    <section class="flex-wrap h-full">
      <h1>Game is on</h1>
      <div class="flex-center">
        <TheCard :id="'123'" name="foo">
          This card has name of foo
        </TheCard>
        <TheCard :id="'234'" name="bar">
          This card has name of bar
        </TheCard>
        <TheCard :id="'231'" name="bar">
          This card has name of foo
        </TheCard>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
.wrapper {
  @apply min-h-screen w-full;
}
</style>
