/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CollapseProps {
  /**
   * Whether the Collapse is open or not
   * @svelte-prop open=true
   * @default true
   */
  open?: boolean;

  /**
   * Animation to use when opening/closing
   * @svelte-prop animation=slide
   * @values Any animation that ships with Svelte
   * @default 'slide'
   */
  animation?: string;
}

export default class Collapse extends SvelteComponentTyped<
  CollapseProps,
  {},
  { default: {}; trigger: {} }
> {}
