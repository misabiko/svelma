/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface NotificationProps {
  /**
   * Type (color)
   * @svelte-prop type
   * @values $$colors$$
   * @default ''
   */
  type?: string;

  /**
   * Whether the notification is visible or not
   * @svelte-prop active=true
   * @default true
   */
  active?: boolean;

  /**
   * Display an X button that closes the notification
   * @svelte-prop showClose=true
   * @default true
   */
  showClose?: boolean;

  /**
   * Automatically close the notification after <code>duration</code>. Doesn't apply when opening programmatically
   * @svelte-prop autoClose=false
   * @default false
   */
  autoClose?: boolean;

  /**
   * Duration notification will remain on screen
   * @svelte-prop duration
   * @default 2000
   */
  duration?: number;

  /**
   * Show icon on left-side of the notification. If set to <code>true</code>, icon will be determined from <code>type</code> property.
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
   * Label for the close button, to be read by accessibility screenreaders
   * @svelte-prop ariaCloseLabel
   * @default ''
   */
  ariaCloseLabel?: string;
}

export default class Notification extends SvelteComponentTyped<
  NotificationProps,
  { close: CustomEvent<any> },
  { default: {} }
> {}
