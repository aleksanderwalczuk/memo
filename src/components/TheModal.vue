<script setup lang="ts">
import {
  defineEmits, onBeforeUnmount, computed,
} from 'vue';
import { OnClickOutside } from '@vueuse/components';
import { nanoid } from 'nanoid';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const props = defineProps<{
  name: string,
}>();

// let modalInstance: Modal;
const modalId = nanoid(8);
const modalInstance = appStore.registerModal({
  id: modalId,
  name: props.name,
  open: false,
});

const modalEmits = defineEmits(['close', 'open']);

function openModal() {
  appStore.openModal(modalId);
  modalEmits('open');
}

function closeModal() {
  appStore.closeModal(modalId);
  modalEmits('close');
}

const open = computed(() => modalInstance != null && modalInstance.open);

onBeforeUnmount(() => {
  appStore.unregisterModal(modalId);
});

defineExpose([openModal, closeModal]);
</script>

<template>
  <button @click="openModal">Open Modal</button>
  <teleport to="#modal">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="modalInstance!.open = false">Close</button>
      <OnClickOutside @trigger="closeModal">
        <div class="modal-inner">
          <slot :modal="modalInstance"/>
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
