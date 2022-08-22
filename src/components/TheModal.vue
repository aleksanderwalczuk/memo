<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <button @click="open = true">Open Modal</button>
  <slot :open="open" />
  <teleport to="#modal">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
      <div class="w-10/12 h-10/12 mx-auto bg-light-200 rounded-md border-2 border-light-600 py-2 px-4">
        <div class="bg-violet-600">
          something
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  @apply fixed top-0 left-0 z-20 w-full h-screen p-4 md:(py-8 px-16);
  background-color: rgba(0, 0, 0, 0.3);
}
.box {
 width: 200px;
}
</style>
