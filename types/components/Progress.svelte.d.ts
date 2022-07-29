/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ProgressProps {
  /**
   * Value of progress bar
   * @svelte-prop value
   * @default null
   */
  value?: undefined;

  /**
   * Type (color) of progress bar
   * @svelte-prop type
   * @values $$colors$$
   * @default ''
   */
  type?: string;

  /**
   * Maximum value of progress bar
   * @svelte-prop max
   * @default 100
   */
  max?: number;

  /**
   * Duration of progress change animation (in ms)
   * @svelte-prop duration
   * @default 400
   */
  duration?: number;

  /**
   * Easing function to use for animation
   * @svelte-prop cubicOut
   * @values Any function from <code>svelte/easing</code>, or a custom one
   * @default undefined
   */
  easing?: undefined;
}

export default class Progress extends SvelteComponentTyped<
  ProgressProps,
  {},
  {}
> {}
