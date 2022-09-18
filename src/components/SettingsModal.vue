<script setup lang="ts">
import TheModal from './TheModal.vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>
<template>
  <TheModal name="settings" v-slot="{modal}">
    <button @click="appStore.closeModal(modal.id)">Close</button>
    <h1>Settings Modal is Open</h1>
  </TheModal>
</template>
