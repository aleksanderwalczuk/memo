<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute, type RouteLocationRaw } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import { Disclosure, DisclosureButton } from '@headlessui/vue';
import { useAppStore } from '@/stores/app';
import DarkModeButton from './DarkModeButton.vue';

type EventCallback = (...args: unknown[]) => void

interface NavigationItem {
  name: string,
  to?: string| RouteLocationRaw,
  classNames: string,
  activeClassNames?: string,
  elementType?: 'button'| 'link' | 'component',
  event?: {
    eventName: string,
    callback: EventCallback
  },
  component?: typeof DarkModeButton,
}

const isDark = useDark();
const darkModeLabel = ref(isDark ? 'light' : 'dark');
const toggleDark = useToggle(isDark);

const active = ref(false);
const route = useRoute();

const appStore = useAppStore();

function testlol(id) {
  console.log(id);
}

const navigation: NavigationItem[] = [
  {
    name: 'Start',
    to: '/game',
    classNames: 'nav-item',
  },
  {
    name: 'Home',
    to: '/',
    classNames: 'nav-item',
  },
  {
    name: 'Your Profile',
    to: '/profile',
    classNames: 'nav-item',
  },
  {
    name: darkModeLabel.value,
    classNames: 'nav-item',
    elementType: 'component',
    event: {
      eventName: 'click',
      callback() {
        return toggleDark();
      },
    },
    component: DarkModeButton,
  },
  {
    name: 'Settings',
    classNames: 'nav-item',
    elementType: 'button',
    event: {
      eventName: 'click',
      callback: appStore.openSettingsModal,
    },
  },
];
</script>

<template>
  <header class="relative z-20">
    <div class="nav-wrapper">

      <Disclosure as="nav" v-slot="{ open }">
        <button
          class="block ml-auto font-semibold my-2 mb-4 border-2 border-r-0 py-2 px-4"
          @click="active = !active"
        >
          trigger
        </button>
        <div class="py-8 px-4" :class="{
          'transform -translate-x-full': active
        }">
          <h2>{{ route.meta.title }}</h2>
          <nav>
            <div class="nav-wrapper">
              <ul>
                <template
                  v-for="{
                    name, to, classNames, activeClassNames, elementType,
                    event, component
                    } in navigation"
                  :key="name"
                >
                  <li v-if="elementType === 'link' || elementType == null">
                    <span class="flex">
                      <RouterLink
                        :active-class="activeClassNames || 'nav-item-active'"
                        :to="to || ''"
                        :class="classNames"
                      >
                        {{ name }}
                      </RouterLink>
                    </span>
                  </li>
                  <li v-else-if="elementType === 'component' && component">
                    <component :is="component"/>
                  </li>
                  <li v-else-if="event">
                    <DisclosureButton :class="classNames" class="text-left" v-on="{
                      [event.eventName]: event.callback
                    }" >
                      {{ name }}
                    </DisclosureButton>
                  </li>
                </template>
              </ul>
            </div>
          </nav>
        </div>
      </Disclosure>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
li {
  @apply block my-4;
}

.nav-wrapper {
  @apply fixed top-0 left-0 bg-white dark:(bg-dark-300 text-light-300) h-full z-10 border-r-2 w-36;
}
.nav-item {
  @apply text-gray-400 dark:text-gray-300 hover:bg-gray-700 hover:text-white ;
  @apply w-full px-3 py-2 font-medium;
}
.nav-item-active {
  @apply bg-gray-300 text-gray-900 dark:(text-white bg-gray-900);
}
</style>
