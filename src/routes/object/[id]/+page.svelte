<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="object-container">
  <div class="object-item image-container">
    <img
      src={data.thumbnail?.source}
      alt="An image of {data.title} which is {data.description}"
    />
  </div>
  <div class="object-item text-container">
    <h3>{data.title}</h3>
    <p>{@html data.extract_html}</p>
  </div>
</div>

<style lang="scss">
  .object-container {
    display: flex;
    width: 100%;
    min-height: calc(100vh - var(--top-bar-height));
    @media screen and (max-width: '800px') {
      flex-direction: column;
    }
  }
  .object-item {
    width: 50%;
    padding: 20px;
    @media screen and (max-width: '800px') {
      width: 100%;
      padding: 0;
    }
  }
  .image-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  img {
    width: 100%;
    @media screen and (max-width: '800px') {
      width: 95%;
      padding-top: 20px;
    }
  }
</style>
