/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface DialogProps {
  /**
   * Show a header on the dialog with this text
   * @svelte-prop message
   * @default ''
   */
  title?: string;

  /**
   * Text or html message for this dialog
   * @svelte-prop message
   * @default undefined
   */
  message: undefined;

  /**
   * Text to show on the confirmation button
   * @svelte-prop confirmText
   * @default 'OK'
   */
  confirmText?: string;

  /**
   * Text to show on the cancel  button
   * @svelte-prop cancelText
   * @default 'Cancel'
   */
  cancelText?: string;

  /**
   * Focus on confirm or cancel button when dialog opens
   * @svelte-prop focusOn
   * @values <code>confirm</code>, <code>cancel</code>
   * @default 'confirm'
   */
  focusOn?: string;

  /**
   * Show this icon on left-side of dialog. It will use the color from <code>type</code>
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
   * Show an input field
   * @svelte-prop hasInput
   * @default false
   */
  hasInput?: boolean;

  /**
   * @default null
   */
  prompt?: undefined;

  /**
   * Show the cancel button. True for <code>confirm()</code>
   * @svelte-prop showCancel
   * @default false
   */
  showCancel?: boolean;

  /**
   * Dialog's size
   * @svelte-prop size
   * @values $$sizes$$
   * @default ''
   */
  size?: string;

  /**
   * Type (color) to use on confirm button and icon
   * @svelte-prop type
   * @values $$colors$$
   * @default 'is-primary'
   */
  type?: string;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * Animation to use when showing dialog
   * @svelte-prop animation
   * @values Any transition name that ships with Svelte, or a custom function
   * @default 'scale'
   */
  animation?: string;

  /**
   * Props to pass to animation function
   * @svelte-prop animProps
   * @default { start: 1.2 }
   */
  animProps?: { start: 1.2 };

  /**
   * Props (attributes) to use to on prompt input element
   * @svelte-prop inputProps
   * @default {}
   */
  inputProps?: {};

  /**
   * @default true
   */
  appendToBody?: boolean;
}

export default class Dialog extends SvelteComponentTyped<
  DialogProps,
  { destroy: CustomEvent<null> },
  {}
> {}
