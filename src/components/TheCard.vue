<script lang="ts" setup>
import { computed } from 'vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore();

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

const isActive = computed(() => gameStore.picked.filter(({ id }) => id === props.id).length > 0);
const isGuessed = computed(() => gameStore.guessed.filter(({ id }) => id === props.id).length > 0);

function toggle() {
  if (isGuessed.value === true) {
    return;
  }
  const disabled = gameStore.picked.find(({ id }) => id === props.id) != null;

  if (gameStore.pickedLimit === false) {
    // if the same card has been clicked 2nd time player puts it back
    // works only if picked limit hasn't been resolved
    if (disabled === true) {
      gameStore.clearFlushQueue();
      return;
    }

    if (!isActive.value) {
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
  <div
    class="card"
    @click="toggle"
    :class="{
      'border border-light-700 is-guessed' : isGuessed
    }"
  >
    <div class="cover" :class="{
      'opacity-0': isActive,
    }">
    </div>
    <div class="content">
      <div v-if="isActive">
        <slot :active="isActive" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply p-4 border border-slate-300 rounded-sm hover:(cursor-pointer);
}
.card.is-guessed {
  @apply cursor-default;
}
.is-guessed .cover {
  @apply bg-transparent;
  @apply dark:(bg-dark-50)
}
.cover {
  @apply absolute top-0 left-0 w-full h-full transition transition-opacity ease-in-out bg-light-700;
  @apply dark:(bg-dark-500 text-light-300)
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
