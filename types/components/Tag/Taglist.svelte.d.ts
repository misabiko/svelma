/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TaglistProps {
  /**
   * Tags inside are attached together
   * @svelte-prop attached
   * @default false
   */
  attached?: boolean;
}

export default class Taglist extends SvelteComponentTyped<
  TaglistProps,
  {},
  { default: {} }
> {}
