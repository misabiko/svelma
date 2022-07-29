/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ModalProps {
  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default 'scale'
   */
  animation?: string;

  /**
   * @default { start: 1.2 }
   */
  animProps?: { start: 1.2 };

  /**
   * @default ''
   */
  size?: string;

  /**
   * @default true
   */
  showClose?: boolean;

  /**
   * @default true
   */
  onBody?: boolean;
}

export default class Modal extends SvelteComponentTyped<
  ModalProps,
  {},
  { default: {} }
> {}
