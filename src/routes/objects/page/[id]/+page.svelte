<script lang="ts">
  import ObjectsGrid from '$components/ObjectsGrid.svelte';
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import Button from '$components/Button.svelte';
  import { base } from '$app/paths';

  export let data: PageData;
</script>

<ObjectsGrid data={data.mockData} />
<div class="page-navigation-buttons">
  <div class="previous-button">
    {#if Number($page.params.id) - 1 > 0}
      <div class="navigation-button-container">
        <Button
          element="a"
          variant="navigation"
          href={`${base}/objects/page/${Number($page.params.id) - 1}`}
          >Previous page</Button
        >
      </div>
    {/if}
  </div>
  <div class="next-button">
    {#if $page.params.id < $page.data.lastPage}
      <div class="navigation-button-container">
        <Button
          element="a"
          variant="navigation"
          href={`${base}/objects/page/${Number($page.params.id) + 1}`}
          >Next page</Button
        >
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .page-navigation-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .previous-button,
  .next-button {
    width: 50%;
  }
  .previous-button {
    text-align: right;
  }
  .next-button {
    text-align: left;
  }
  .navigation-button-container {
    padding: 20px 10px;
  }
</style>
