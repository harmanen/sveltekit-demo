<script lang="ts">
  import ObjectsGrid from '$components/ObjectsGrid.svelte';
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  import Button from '$components/Button.svelte';

  export let data: PageData;
</script>

<ObjectsGrid data={data.mockData} />
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
        href={`/objects/page/${Number($page.params.id) + 1}`}>Next page</Button
      >
    </div>
  {/if}
</div>

<style lang="scss">
  .page-navigation-buttons {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .navigation-button-container {
    padding: 20px 10px;
  }
</style>
