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
    variant?: 'primary' | 'secondary' | 'navigation';
    className?: string;
  };

  export let element: Element;
  export let variant: 'primary' | 'secondary' | 'navigation' = 'primary';
  export let className: string = '';

  let node: HTMLAnchorElement | HTMLButtonElement;

  export function focus() {
    node.focus();
  }
</script>

<svelte:element
  this={element}
  bind:this={node}
  class="button button-{variant} button-{element} {className}"
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
    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
    }
    @media screen and (max-width: '450px') {
      font-size: 0.9em;
    }
  }
  .button-primary,
  .button-navigation {
    background-color: var(--primary-js-on);
    :global(html.no-js) & {
      background-color: var(--primary-js-off);
    }
  }
  .button-navigation {
    border: 5px solid var(--dark-gray);
  }
  .button-secondary {
    background-color: var(--secondary);
  }
  .button-button {
    font-size: 1em;
    font-weight: 700;
  }
</style>
