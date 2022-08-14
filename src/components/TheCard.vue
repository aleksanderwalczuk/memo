<script lang="ts" setup>
import { ref } from 'vue';

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

function show() {
  active.value = true;
  emit('show', props.id);
}

</script>

<template>
  <div class="card" @click="show">
    <div class="cover" :class="{
      'opacity-0': active,
    }">
    </div>
    <div
      class="content"
    >
      <div v-if="active">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply p-4 border rounded-sm hover:(cursor-pointer);
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
