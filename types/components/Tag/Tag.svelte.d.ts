/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TagProps {
  /**
   * Type (color) of the icon
   * @svelte-prop type
   * @values <code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>, and any other colors you've set in the <code>$colors</code> list on Sass
   * @default ''
   */
  type?: string;

  /**
   * Size of the tab
   * @svelte-prop size
   * @values <code>is-medium</code>, <code>is-large</code>
   * @default ''
   */
  size?: string;

  /**
   * Tag border rounded
   * @svelte-prop rounded
   * @default false
   */
  rounded?: boolean;

  /**
   * Add close/delete button to the tag
   * @svelte-prop closable
   * @default false
   */
  closable?: boolean;

  /**
   * Close/delete button style equal to attached tags
   * @svelte-prop attached
   * @default false
   */
  attached?: boolean;

  /**
   * Adds ellipsis to not overflow the text
   * @svelte-prop ellipsis
   * @default false
   */
  ellipsis?: boolean;

  /**
   * If should stop when using tab key
   * @svelte-prop tabstop
   * @default true
   */
  tabstop?: boolean;

  /**
   * Disable delete button
   * @svelte-prop disabled
   * @default false
   */
  disabled?: boolean;
}

export default class Tag extends SvelteComponentTyped<
  TagProps,
  { close: CustomEvent<null> },
  { default: {} }
> {}
