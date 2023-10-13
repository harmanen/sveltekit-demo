<script>
  import { page } from '$app/stores';
  import Button from '$components/Button.svelte';
</script>

<div class="objects-page-layout">
  <slot />
  <div class="page-navigation-buttons">
    {#if Number($page.params.id) - 1 > 0}
      <div class="navigation-button-container">
        <Button
          element="a"
          variant="navigation"
          href={`/objects/page/${Number($page.params.id) - 1}`}
          >Previous page</Button
        >
      </div>
    {/if}
    {#if $page.params.id < $page.data.lastPage}
      <div class="navigation-button-container">
        <Button
          element="a"
          variant="navigation"
          href={`/objects/page/${Number($page.params.id) + 1}`}
          >Next page</Button
        >
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .objects-page-layout {
    @media screen and (max-width: '800px') {
      padding: 20px;
    }
  }
  .page-navigation-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .navigation-button-container {
    padding: 20px 10px;
  }
</style>
