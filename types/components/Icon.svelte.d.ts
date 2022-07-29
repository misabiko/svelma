/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface IconProps {
  /**
   * @default ''
   */
  type?: string;

  /**
   * @default 'fas'
   */
  pack?: string;

  /**
   * @default undefined
   */
  icon: undefined;

  /**
   * @default ''
   */
  size?: string;

  /**
   * @default ''
   */
  customClass?: string;

  /**
   * @default ''
   */
  customSize?: string;

  /**
   * @default false
   */
  isClickable?: boolean;

  /**
   * @default false
   */
  isLeft?: boolean;

  /**
   * @default false
   */
  isRight?: boolean;
}

export default class Icon extends SvelteComponentTyped<
  IconProps,
  { click: WindowEventMap["click"] },
  {}
> {}
