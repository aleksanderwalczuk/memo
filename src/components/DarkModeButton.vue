<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { DisclosureButton } from '@headlessui/vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

  <template :isDark="isDark">
  <DisclosureButton @click="toggleDark()" class="nav-item">
      {{ isDark ? 'Dark' : 'Light' }}
    </DisclosureButton>
  </template>

<style lang="postcss" scoped>
  .nav-item {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white ;
    @apply w-full px-3 py-2 font-medium text-left;
  }
</style>
