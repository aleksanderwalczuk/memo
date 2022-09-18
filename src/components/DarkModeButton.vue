<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { DisclosureButton } from '@headlessui/vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

  <template :isDark="isDark">
  <DisclosureButton @click="toggleDark()" class="nav-item">
        <span class="flex items-baseline">
          <template v-if="isDark">
            <span class="font-medium relative -top-[2px] mr-4">Light</span>
            <div class="relative w-5 h-5">
              <!-- eslint-disable -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="icon-absolute">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>  
              <!-- eslint-enable -->
            </div>
          </template>
          <template v-else>
            <span class="font-medium relative -top-[2px] mr-4 leading-none">Dark</span>
            <!-- eslint-disable -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" class="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            <!-- eslint-enable -->
          </template>
        </span>
    </DisclosureButton>
  </template>

<style lang="postcss" scoped>
  .nav-item {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white ;
    @apply w-full px-3 py-2 font-medium text-base text-left;
  }
  .icon-absolute {
    @apply w-6 h-6 absolute top-1/2 left-1/2;
    transform: translate(-50%, -50%);
  }
</style>
