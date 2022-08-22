<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <div class="relative mx-auto flex lg:(px-24)">
    <TheNavigation/>
    <main class="flex-grow min-h-screen">
      <RouterView />
    </main>
  </div>
  <div id="modal"></div>
</template>

<style lang="postcss" scoped>

</style>
