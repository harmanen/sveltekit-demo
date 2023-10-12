<script lang="ts">
  import type { MockDataType } from '../../data';

  export let item: MockDataType;
</script>

<div class="card-container">
  <h3>
    {item.title}
  </h3>
  <img
    src={item.thumbnail.source}
    alt="An image of {item.title} which is {item.description}"
  />
  <p class="extract truncate-3">
    {item.extract}
  </p>
  <div class="buttons">
    <button>placeholder</button>
    <button>placeholder</button>
  </div>
</div>

<style lang="scss">
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 5px solid var(--primary-js-on);
    border-radius: 25px;
    background-color: var(--dark-gray);
    color: var(--text-color);
    :global(html.no-js) & {
      border-color: var(--primary-js-off);
    }
    h3 {
      color: var(--primary-js-on);
      :global(html.no-js) & {
        color: var(--primary-js-off);
      }
    }
    img {
      width: 320px;
      height: 200px;
      object-fit: cover;
    }
    p {
      padding: 0 20px 0 20px;
    }
    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 20px;
    }
  }
</style>
