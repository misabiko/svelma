/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ModalCardProps {
  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default "Modal Title"
   */
  title?: string;

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
  onBody?: boolean;
}

export default class ModalCard extends SvelteComponentTyped<
  ModalCardProps,
  { success: CustomEvent<null>; failure: CustomEvent<null> },
  { default: {} }
> {}
