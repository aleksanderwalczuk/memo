import type { ModalType } from './enums';

export interface Modal {
  name: ModalType,
  id: string,
  open: boolean,
}
