/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ToastProps {
  /**
   * Text or html message for toast
   * @svelte-prop message
   * @default undefined
   */
  message: undefined;

  /**
   * Type (color)
   * @svelte-prop type
   * @values $$colors$$
   * @default 'is-dark'
   */
  type?: string;

  /**
   * Background type (any of the Bulma <code>has-background-</code> classes will work)
   * @svelte-prop background
   * @values <code>has-background-*</code>
   * @default ''
   */
  background?: string;
}

export default class Toast extends SvelteComponentTyped<ToastProps, {}, {}> {}
