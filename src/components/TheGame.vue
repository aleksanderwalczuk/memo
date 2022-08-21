<script setup lang="ts">
import TheCard from '@/components/TheCard.vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

</script>

<template>
  <div class="flex-center flex-wrap">
    <TheCard v-for="{id, name} in gameStore.cards" :key="id" :id="id" :name="name">
      {{ name }}
    </TheCard>
  </div>
</template>
