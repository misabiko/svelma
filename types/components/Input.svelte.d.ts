/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface InputProps {
  /**
   * Binding value
   * @svelte-prop value
   * @default ''
   */
  value?: string;

  /**
   * Input type, or <code>textarea</code>
   * @svelte-prop type
   * @values Any native type, <code>textarea</code>
   * @default 'text'
   */
  type?: string;

  /**
   * Size of input
   * @svelte-prop size
   * @values $$sizes$$
   * @default ''
   */
  size?: string;

  /**
   * Makes input full-width when inside a grouped or addon field
   * @svelte-prop expanded=false
   * @default false
   */
  expanded?: boolean;

  /**
   * Show the password reveal toggle button
   * @svelte-prop passwordReveal=false
   * @default false
   */
  passwordReveal?: boolean;

  /**
   * Set input maxlength and show a counter
   * @svelte-prop maxlength
   * @default null
   */
  maxlength?: undefined;

  /**
   * Show the character counter when <code>maxlength<code> is set
   * @svelte-prop hasCounter
   * @default true
   */
  hasCounter?: boolean;

  /**
   * Show loading indicator
   * @svelte-prop loading
   * @default false
   */
  loading?: boolean;

  /**
   * Show this icon on left side of input
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

  /**
   * Input is disabled
   * @svelte-prop disabled
   * @default false
   */
  disabled?: boolean;
}

export default class Input extends SvelteComponentTyped<
  InputProps,
  { change: WindowEventMap["change"]; input: CustomEvent<any> },
  {}
> {}
