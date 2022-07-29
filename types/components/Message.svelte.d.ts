/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface MessageProps {
  /**
   * @default ''
   */
  type?: string;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default ''
   */
  title?: string;

  /**
   * @default true
   */
  showClose?: boolean;

  /**
   * @default false
   */
  autoClose?: boolean;

  /**
   * @default 5000
   */
  duration?: number;

  /**
   * @default ''
   */
  size?: string;

  /**
   * @default ''
   */
  iconSize?: string;

  /**
   * @default 'delete'
   */
  ariaCloseLabel?: string;
}

export default class Message extends SvelteComponentTyped<
  MessageProps,
  { close: CustomEvent<any> },
  { default: {} }
> {}
