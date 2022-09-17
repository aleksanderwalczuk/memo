<script setup lang="ts">
import TheModal from './TheModal.vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>
<template>
  <TheModal :is-open="appStore.settingsOpen">
    <h1>Settins Modal is Open</h1>
  </TheModal>
</template>
