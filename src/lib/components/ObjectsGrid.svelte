<script lang="ts">
  import type { MockDataType } from '$mockData';
  import Card from './Card.svelte';

  export let data: Array<MockDataType>;
</script>

<div class="grid-container">
  {#each data as item}
    <div
      class="grid-item"
      data-testid="grid-item"
    >
      <Card {item} />
    </div>
  {/each}
</div>

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
    @media screen and (max-width: '450px') {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .grid-item {
    width: 360px;
    height: 430px;
    padding: var(--grid-padding);
    transition: 0.1s;
    @media screen and (max-width: '450px') {
      width: 100%;
    }
  }
  .grid-item:hover {
    transform: scale(1.05);
  }
</style>
