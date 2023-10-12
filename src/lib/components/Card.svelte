<script lang="ts">
  export let item: number; // TMP
</script>

<div class="card-container">Card: {item}</div>

<style lang="scss">
  .card-container {
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-js-on);
    border-radius: 25px;
    background-color: var(--dark-gray);
    color: var(--text-color);
    :global(html.no-js) & {
      border-color: var(--primary-js-off);
    }
  }
</style>
