import { defineStore } from 'pinia';
import type { Modal } from '@/types/interfaces';
import type { ModalType } from '@/types/enums';

export const useAppStore = defineStore(
  {
    id: 'app',
    state: () => ({
      modals: [] as Modal[],
    }),
    actions: {
      registerModal(modal: Modal) {
        this.modals.push(modal);
        return this.getModalById(modal.id);
      },
      unregisterModal(modalId: string) {
        this.modals = this.modals.filter(({ id }) => id !== modalId);
      },
      getModalById(modalId: string) {
        return this.modals.find(({ id }) => id === modalId);
      },
      getModalByName(modalName: ModalType) {
        return this.modals.find(({ name }) => name === modalName);
      },
      openModal(modalId: string) {
        const modal = this.getModalById(modalId);

        if (modal) {
          modal.open = true;
        }
      },
      closeModal(modalId: string) {
        const modal = this.getModalById(modalId);

        if (modal) {
          modal.open = false;
        }
      },
    },
  },
);
