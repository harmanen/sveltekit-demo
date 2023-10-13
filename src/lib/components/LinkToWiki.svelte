<script lang="ts">
  import Button from './Button.svelte';

  export let urls: { desktop: string; mobile: string };
</script>

<!-- Select a link button to Wikipedia based on the screen width -->
<div class="wikipedia-link-desktop">
  <Button
    element="a"
    href={urls.desktop}
    variant="secondary"
    target="_blank">To Wikipedia</Button
  >
</div>
<div class="wikipedia-link-mobile">
  <Button
    element="a"
    href={urls.mobile}
    variant="secondary"
    target="_blank">To Wikipedia</Button
  >
</div>

<style lang="scss">
  @media screen and (max-width: '799.9px') {
    .wikipedia-link-desktop {
      display: none;
    }
  }
  @media screen and (min-width: '800px') {
    .wikipedia-link-mobile {
      display: none;
    }
  }
</style>
