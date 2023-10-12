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
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  .grid-item {
    width: 360px;
    height: 430px;
    padding: var(--grid-padding);
  }
</style>
