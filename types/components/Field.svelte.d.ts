/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface FieldProps {
  /**
   * Type (color) of the field and help message. Also adds a matching icon.
   * @svelte-prop type
   * @values $$colors$$
   * @default ''
   */
  type?: string;

  /**
   * Label for input
   * @svelte-prop label
   * @default null
   */
  label?: undefined;

  /**
   * Same as native <code>for</code> on label
   * @svelte-prop labelFor
   * @default ''
   */
  labelFor?: string;

  /**
   * Message to show beneath input
   * @svelte-prop message
   * @default ''
   */
  message?: string;

  /**
   * Direct child components/elements of Field will be grouped horizontally
   * @svelte-prop grouped=false
   * @default false
   */
  grouped?: boolean;

  /**
   * Allow grouped controls to cover multiple lines
   * @svelte-prop groupMultiline=false
   * @default false
   */
  groupMultiline?: boolean;

  /**
   * Alter the alignment of the field
   * @svelte-prop position
   * @values is-centered, is-right
   * @default ''
   */
  position?: string;

  /**
   * Automatically attach child controls together
   * @svelte-prop addons=true
   * @default true
   */
  addons?: boolean;

  /**
   * @default false
   */
  expanded?: boolean;
}

export default class Field extends SvelteComponentTyped<
  FieldProps,
  {},
  { default: { statusType: any } }
> {}
