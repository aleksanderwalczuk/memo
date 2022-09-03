<script setup lang="ts">
import {
  toRef, defineEmits,
} from 'vue';
import { OnClickOutside } from '@vueuse/components';

const props = defineProps({ isOpen: { type: Boolean, default: false } });
const open = toRef(props, 'isOpen');

const modalEmits = defineEmits(['close', 'open']);

function openModal() {
  open.value = true;
  modalEmits('open');
}

function closeModal() {
  open.value = false;
  modalEmits('close');
}

defineExpose([openModal, closeModal]);
</script>

<template>
  <button @click="openModal">Open Modal</button>
  <teleport to="#modal">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
      <OnClickOutside @trigger="closeModal">
        <div class="modal-inner">
          <slot :open="open" />
        </div>
      </OnClickOutside>
    </div>
  </teleport>
</template>

<style scoped lang="postcss">
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
