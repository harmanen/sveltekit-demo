<script lang="ts">
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from 'svelte/elements';

  type Element = $$Generic<'button' | 'a'>;

  interface ButtonComponentElements {
    button: HTMLButtonAttributes;
    a: HTMLAnchorAttributes;
  }

  type $$Props = ButtonComponentElements[Element] & {
    element: Element;
    variant?: 'primary' | 'secondary';
    className?: string;
  };

  export let element: Element;
  export let variant: 'primary' | 'secondary' = 'primary';
  export let className: string = '';

  let node: HTMLAnchorElement | HTMLButtonElement;

  export function focus() {
    node.focus();
  }
</script>

<svelte:element
  this={element}
  bind:this={node}
  class="button button-{variant} {className}"
  on:click
  role="button"
  tabindex="0"
  {...$$restProps}
>
  <slot />
</svelte:element>

<style lang="scss">
  .button {
    color: var(--dark-gray);
    font-weight: 600;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
  }
  .button-primary {
    background-color: var(--primary-js-on);
    :global(html.no-js) & {
      background-color: var(--primary-js-off);
    }
  }
  .button-secondary {
    background-color: var(--secondary);
  }
</style>
