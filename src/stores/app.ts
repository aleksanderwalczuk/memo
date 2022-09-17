import { defineStore } from 'pinia';

export const useAppStore = defineStore(
  {
    id: 'app',
    state: () => ({
      settingsOpen: false,
    }),
    actions: {
      openSettingsModal() {
        this.settingsOpen = true;
      },
      closeSettingsModal() {
        this.settingsOpen = false;
      },
    },
  },
);
