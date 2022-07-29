/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  /**
   * HTML tag to use for button (either 'a' or 'button')
   * @svelte-prop tag=button
   * @values <code>button</code>, <code>a</code>
   * @default 'button'
   */
  tag?: string;

  /**
   * Type (color of control)
   * @svelte-prop type - Type (color of control)
   * @values $$colors$$
   * @default ''
   */
  type?: string;

  /**
   * Size of button
   * @svelte-prop size
   * @values $$sizes$$
   * @default ''
   */
  size?: string;

  /**
   * Href to use when <code>tag</code> is 'a'
   * @svelte-prop href
   * @default ''
   */
  href?: string;

  /**
   * Native button type
   * @svelte-prop [nativeType]=button
   * @values Any native button type (button, submit, reset)
   * @default 'button'
   */
  nativeType?: string;

  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default false
   */
  inverted?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default null
   */
  iconLeft?: undefined;

  /**
   * @default null
   */
  iconRight?: undefined;

  /**
   * @default null
   */
  iconPack?: undefined;
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
