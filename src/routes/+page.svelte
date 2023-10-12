<script>
  import { Card } from '$components';
</script>

<div class="grid-container">
  <!-- TMP, replace with real data when grid works -->
  {#each [1, 2, 3, 4, 5, 6] as item}
    <div class="grid-item">
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
  }
  .grid-item {
    width: 360px;
    height: 430px;
    padding: var(--grid-padding);
  }
</style>
