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
    <div class="text-background">
      <h3>{data.title}</h3>
      <p>{data.extract}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .object-container {
    display: flex;
    width: 100%;
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
    @media screen and (min-width: '800px') {
      padding-right: 10px;
    }
    @media screen and (max-width: '800px') {
      padding-bottom: 20px;
    }
  }
  .text-container {
    @media screen and (min-width: '800px') {
      padding-left: 10px;
    }
  }
  .text-background {
    background-color: var(--dark-gray);
    height: calc(100% - 2 * 20px);
    border-radius: 25px;
    padding: 20px 20px 20px;
  }
  img {
    width: 100%;
    border-radius: 25px;
  }
  h3,
  p {
    margin: 0;
    color: var(--text-color);
  }
</style>
