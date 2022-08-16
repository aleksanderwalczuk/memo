<script lang="ts" setup>
import { ref } from 'vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

const active = ref(false);

const emit = defineEmits(['show']);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

function toggle() {
  const disabled = gameStore.picked.find(({ id }) => id === props.id) != null;

  if (gameStore.pickedLimit === false) {
    active.value = !active.value;

    // if the same card has been clicked 2nd time player puts it back
    // works only if picked limit hasn't been resolved
    if (disabled === true) {
      gameStore.clearFlushQueue();
      return;
    }

    if (active.value) {
      gameStore.clearTimeout();
      gameStore.timeout = setTimeout(() => {
        gameStore.clearFlushQueue();
      }, 3000);
      gameStore.flushQueue.push(props.id);
      emit('show');
      gameStore.register({ id: props.id, name: props.name });
    }
  }
}

</script>

<template>
  <div class="card" @click="toggle">
    <div class="cover" :class="{
      'opacity-0': active,
    }">
    </div>
    <div class="content">
      <div v-if="active">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply p-4 border rounded-sm hover: (cursor-pointer);
}

.cover {
  @apply absolute top-0 left-0 w-full h-full transition transition-opacity ease-in-out bg-light-700;
}

.content {
  @apply w-full h-full;
}

@screen 2xl {
  .card {
    @apply my-4 mx-8;
  }

  .content {
    @apply min-h-18.75rem min-w-14.0625rem;
    max-height: 400px;
    max-width: 300px;
  }
}
</style>
