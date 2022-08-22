<script setup lang="ts">
const props = defineProps({
  score: {
    default: 0,
    required: true,
  },
});
</script>
<template>
<div class="card">
  <span class="">
    Your score:
  </span>
  <span class="score">{{ props.score }}</span>
</div>
</template>
