<script lang="ts">
  import { base } from '$app/paths';
  import '../styles/main.scss';
</script>

<div
  class="topbar"
  role="banner"
>
  <h1><a href="{base}/">SvelteKit demo</a></h1>
  <!-- "JavaScript is on/off" is conditionally rendered and color selected 
  based on the html.no-js class -->
  <h2>JavaScript is <span class="on">on</span><span class="off">off</span></h2>
</div>

<div
  class="page-container"
  role="main"
>
  <slot />
</div>

<style lang="scss">
  :global(html) {
    margin: 0 auto;
    padding: 0;
    max-width: 1920px;
  }
  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
  .page-container {
    background-color: var(--bg-color);
    min-height: calc(100vh - var(--top-bar-height));
  }
  .topbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--top-bar-height);
    background-color: var(--dark-gray);
    color: var(--text-color);
  }
  h1,
  h2 {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  h2 {
    color: var(--primary-js-on);
    :global(html.no-js) & {
      color: var(--primary-js-off);
    }
  }
  a {
    text-decoration: none;
    color: var(--text-color);
  }
  span.on {
    :global(html.no-js) & {
      display: none;
    }
  }
  span.off {
    display: none;
    :global(html.no-js) & {
      display: inline;
    }
  }
</style>
