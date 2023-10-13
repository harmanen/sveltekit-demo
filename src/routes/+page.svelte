<script lang="ts">
  import { Card } from '$components';
  import Button from '$components/Button.svelte';
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

<div class="grid-container">
  <!-- TMP, replace with real data when grid works -->
  {#each selectedData as item}
    <div class="grid-item">
      <Card {item} />
    </div>
  {/each}
</div>

{#if showLoadMoreButton}
  <div class="load-more-container">
    <Button
      element="button"
      on:click={handleLoadMoreObjects}>Load more objects</Button
    >
  </div>
{/if}

<style lang="scss">
  .grid-container {
    padding: var(--grid-padding);
    display: grid;
    justify-items: center;

    // Default 5 columns
    grid-template-columns: repeat(5, 1fr);

    // Decrease amount of columns based on the viewport width
    @media screen and (max-width: '1915px') {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: '1530px') {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: '1160px') {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: '800px') {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .grid-item {
    width: 360px;
    height: 430px;
    padding: var(--grid-padding);
    transition: 0.1s;
  }
  .grid-item:hover {
    transform: scale(1.05);
  }
  .load-more-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
</style>
