<script setup lang="ts">
import TheCard from '@/components/TheCard.vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

</script>

<template>
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
</template>
