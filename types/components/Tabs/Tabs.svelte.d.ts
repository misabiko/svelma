/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TabsProps {
  /**
   * Index of the active tab (zero-based), bindable
   * @svelte-prop active
   * @default 0
   */
  active?: number;

  /**
   * Size of tabs
   * @svelte-prop size
   * @values $$sizes$$
   * @default ''
   */
  size?: string;

  /**
   * Position of tabs list, horizontally. By default they're positioned to the left
   * @svelte-prop position
   * @values is-centered, is-right
   * @default ''
   */
  position?: string;

  /**
   * Style of tabs
   * @svelte-prop style
   * @values is-boxed, is-toggle, is-toggle-rounded, is-fullwidth
   * @default ''
   */
  style?: string;
}

export default class Tabs extends SvelteComponentTyped<
  TabsProps,
  { change: CustomEvent<any> },
  { default: {} }
> {
  /**
   * Sets active tab index, can be used when bind:active cannot be used
   * @svelte-prop setActive
   */
  setActive: () => any;
}
