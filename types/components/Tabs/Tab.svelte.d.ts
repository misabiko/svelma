/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TabProps {
  /**
   * Label for tab
   * @svelte-prop label
   * @default undefined
   */
  label: undefined;

  /**
   * Show this icon on left-side of the tab
   * @svelte-prop icon
   * @default ''
   */
  icon?: string;

  /**
   * Fontawesome icon pack to use. By default the <code>Icon</code> component uses <code>fas</code>
   * @svelte-prop iconPack
   * @values <code>fas</code>, <code>fab</code>, etc...
   * @default ''
   */
  iconPack?: string;
}

export default class Tab extends SvelteComponentTyped<
  TabProps,
  {},
  { default: { label: any; iconPack: string; icon: string } }
> {
  changeTab: () => any;
}
