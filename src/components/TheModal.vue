<script setup lang="ts">
import { ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';

defineProps({ foo: { type: Number } });
const open = ref(false);

</script>

<template>
  <button @click="open = true">Open Modal</button>
  <slot :open="open" />
  <teleport to="#modal">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
      <OnClickOutside @trigger="() => { open = false }">
        <div class="modal-inner">
          <div class="bg-violet-600">
            something
          </div>
        </div>
      </OnClickOutside>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  @apply fixed top-0 left-0 z-20 w-full h-screen p-4 md:(py-8 px-16);
  background-color: rgba(0, 0, 0, 0.3);
}
.modal-inner {
  @apply w-10/12 h-10/12 mx-auto bg-light-200 rounded-md border-2 border-light-600 py-2 px-4;
  @apply dark:(bg-dark-100 text-light-300);
}
.box {
 width: 200px;
}
</style>
