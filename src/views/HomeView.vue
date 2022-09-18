<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue';
import AppBar from '../components/AppBar.vue';
import SettingsModal from '@/components/SettingsModal.vue';

</script>

<template>
  <AppBar>
  </AppBar>
  <div>
    <div class="py-8 px-12">
      <TheWelcome />
      <SettingsModal/>
    </div>
  </div>
</template>
