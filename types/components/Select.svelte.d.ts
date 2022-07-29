/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SelectProps {
  /**
   * Binding value
   * @svelte-prop selected
   * @default ''
   */
  selected?: string;

  /**
   * Type (color) of the select
   * @svelte-prop type
   * @values <code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>, and any other colors you've set in the <code>$colors</code> list on Sass
   * @default ''
   */
  type?: string;

  /**
   * Text when nothing is selected
   * @svelte-prop placeholder
   * @default ''
   */
  placeholder?: string;

  /**
   * Multiple Select
   * @svelte-prop multiple
   * @default false
   */
  multiple?: boolean;

  /**
   * Size of the select
   * @svelte-prop size
   * @values <code>is-small</code>, <code>is-medium</code>, <code>is-large</code>
   * @default ''
   */
  size?: string;

  /**
   * Same as native size
   * @svelte-prop nativeSize
   * @default undefined
   */
  nativeSize: undefined;

  /**
   * Select will be expanded (full-width)
   * @svelte-prop expanded
   * @default false
   */
  expanded?: boolean;

  /**
   * Select will be rounded
   * @svelte-prop rounded
   * @default false
   */
  rounded?: boolean;

  /**
   * Select value is required
   * @svelte-prop required
   * @default false
   */
  required?: boolean;

  /**
   * Add the loading state to the Select
   * @svelte-prop loading
   * @default false
   */
  loading?: boolean;

  /**
   * Icon name to be added
   * @svelte-prop icon
   * @default ''
   */
  icon?: string;

  /**
   * Icon pack to use
   * @svelte-prop iconPack
   * @values <code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>
   * @default 'mdi'
   */
  iconPack?: string;

  /**
   * Add the disabled state to the Select
   * @svelte-prop disabled
   * @default false
   */
  disabled?: boolean;
}

export default class Select extends SvelteComponentTyped<
  SelectProps,
  {
    input: CustomEvent<any>;
    blur: CustomEvent<null>;
    hover: CustomEvent<null>;
    focus: CustomEvent<null>;
  },
  { default: {} }
> {}
