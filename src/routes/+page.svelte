<script lang="ts">
  import Button from '$components/Button.svelte';
  import ObjectsGrid from '$components/ObjectsGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  let showLoadMoreButton = true;

  // Initially load one row (on full width screen)
  let selectedData = data.mockData.slice(0, 5);

  let i = 5;

  const handleLoadMoreObjects = () => {
    if (i + 5 <= data.mockData.length) {
      // Load a full row of 5 more items
      selectedData = [...selectedData, ...data.mockData.slice(i, i + 5)];
      i += 5;
    } else {
      // Load the rest of items and hide the load more button
      selectedData = [...selectedData, ...data.mockData.slice(i)];
      showLoadMoreButton = false;
    }
  };
</script>

<ObjectsGrid data={selectedData} />

{#if showLoadMoreButton}
  <div class="load-more-button-container">
    <Button
      element="button"
      on:click={handleLoadMoreObjects}>Load more objects</Button
    >
  </div>
{/if}

<style lang="scss">
  .load-more-button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    :global(html.no-js) & {
      display: none;
    }
  }
</style>
