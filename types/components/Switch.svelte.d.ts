/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface SwitchProps {
  /**
   * Binding for whether the switch to "on" or not
   * @svelte-prop checked
   * @default false
   */
  checked?: boolean;

  /**
   * Type (color of control)
   * @svelte-prop type - Type (color of control)
   * @values $$colors$$
   * @default 'is-primary'
   */
  type?: string;

  /**
   * Size of switch
   * @svelte-prop size
   * @values $$sizes$$
   * @default ''
   */
  size?: string;

  /**
   * Whether switch is disabled or not
   * @svelte-prop disabled
   * @default false
   */
  disabled?: boolean;
}

export default class Switch extends SvelteComponentTyped<
  SwitchProps,
  { input: WindowEventMap["input"]; click: WindowEventMap["click"] },
  { default: {} }
> {}
