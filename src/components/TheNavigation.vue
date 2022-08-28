<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const active = ref(false);
const route = useRoute();
</script>

<template>
  <header class="relative z-20">
    <div class="nav-wrapper">
    <button
        class="
        block ml-auto font-semibold my-2 mb-4 border-2 border-r-0 py-2 px-4"
        @click="active = !active"
      >
        trigger
      </button>
      <div class="py-8 px-4"
      :class="{
        'transform -translate-x-full': active
      }">
        <h2>{{ route.meta.title }}</h2>
        <nav>
          <div class="nav-wrapper">
            <ul>
              <li>
                <RouterLink
                  active-class="hidden"
                  to="/game"
                  class="btn rounded-md border-2">
                  Start
                </RouterLink>
              </li>
              <li>
                <RouterLink active-class="" to="/" class="">
                  Home
                </RouterLink>
              </li>
              <li><button @click="toggleDark()">Toggle dark</button></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
li {
  @apply block my-4;
}
.nav-wrapper {
  @apply fixed top-0 left-0 bg-white dark:(bg-dark-300 text-light-300) h-full z-10 border-r-2 w-24;
}
</style>
