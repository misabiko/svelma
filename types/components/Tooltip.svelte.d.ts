/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface TooltipProps {
  /**
   * Type (color) of the tooltip
   * @svelte-prop type
   * @values <code>is-white</code>, <code>is-black</code>, <code>is-light</code>, <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>, <code>is-warning</code>, <code>is-danger</code>, and any other colors you've set in the <code>$colors</code> list on Sass
   * @default 'is-primary'
   */
  type?: string;

  /**
   * Whether tooltip is active or not
   * @svelte-prop active
   * @default true
   */
  active?: boolean;

  /**
   * Tooltip text
   * @svelte-prop label
   * @default ''
   */
  label?: string;

  /**
   * Tooltip position in relation to the element
   * @svelte-prop position
   * @values <code>is-top</code>, <code>is-bottom</code>, <code>is-top-left</code>, <code>is-top-right</code>, <code>is-bottom-left</code>, <code>is-bottom-right</code>
   * @default 'is-top'
   */
  position?: string;

  /**
   * Tooltip will be always active
   * @svelte-prop always
   * @default false
   */
  always?: boolean;

  /**
   * Tooltip will have fly animation, customizable
   * @svelte-prop animate
   * @default true
   */
  animate?: boolean;

  /**
   * Tooltip will be square (not rounded corners)
   * @svelte-prop square
   * @default false
   */
  square?: boolean;

  /**
   * Tooltip slot will have a dashed underline
   * @svelte-prop dashed
   * @default false
   */
  dashed?: boolean;

  /**
   * Tooltip will be multilined
   * @svelte-prop multilined
   * @default false
   */
  multilined?: boolean;

  /**
   * Tooltip multiline size (only works for multilined tooltips)
   * @svelte-prop size
   * @values <code>is-small</code>, <code>is-medium</code>, <code>is-large</code>
   * @default 'is-medium'
   */
  size?: string;

  /**
   * Tooltip will be fully rounded on left and right edges
   * @svelte-prop rounded
   * @default false
   */
  rounded?: boolean;

  /**
   * Tooltip style override
   * @svelte-prop style
   * @default undefined
   */
  style?: undefined;
}

export default class Tooltip extends SvelteComponentTyped<
  TooltipProps,
  {},
  { default: {} }
> {}
