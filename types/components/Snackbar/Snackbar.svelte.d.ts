/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SnackbarProps {
  /**
   * Text or html message for snackbar
   * @svelte-prop message
   * @default undefined
   */
  message: undefined;

  /**
   * Duration snackbar will remain on screen
   * @svelte-prop duration
   * @default 3500
   */
  duration?: number;

  /**
   * Where the snackbar will show on the screen
   * @svelte-prop position
   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>
   * @default 'is-bottom-right'
   */
  position?: string;

  /**
   * Type (color)
   * @svelte-prop type
   * @values $$colors$$
   * @default 'is-primary'
   */
  type?: string;

  /**
   * Background type (any of the Bulma <code>has-background-</code> classes will work)
   * @svelte-prop background
   * @values <code>has-background-*</code>
   * @default ''
   */
  background?: string;

  /**
   * @default 'OK'
   */
  actionText?: string;

  /**
   * @default () => {}
   */
  onAction?: () => {};
}

export default class Snackbar extends SvelteComponentTyped<
  SnackbarProps,
  {},
  {}
> {}
