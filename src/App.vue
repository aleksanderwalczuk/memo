<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNavigation from '@/components/TheNavigation.vue';
</script>

<template>
  <div>
    <div class="relative mx-auto flex pl-36 dark:(bg-dark-300 text-light-300)">
      <TheNavigation />
      <main class="flex-grow min-h-screen">
        <RouterView />
      </main>
    </div>
    <div id="modal"></div>
  </div>
</template>
