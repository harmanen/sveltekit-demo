<script lang="ts">
  import { base } from '$app/paths';
  import type { MockDataType } from '$mockData';
  import Button from './Button.svelte';
  import LinkToWiki from './LinkToWiki.svelte';

  export let item: MockDataType;
</script>

<div class="card-container">
  <h3>
    {item.title}
  </h3>
  <a
    href="{base}/object/{item.titles.canonical}"
    aria-hidden="true"
    tabindex="-1"
  >
    <img
      src={item.thumbnail.source}
      alt="An image of {item.title} which is {item.description}"
    />
  </a>
  <p class="extract truncate-3">
    {item.extract}
  </p>
  <div class="buttons">
    <div class="button">
      <Button
        element="a"
        href="{base}/object/{item.titles.canonical}">View more!</Button
      >
    </div>
    <div class="button">
      <LinkToWiki
        urls={{
          desktop: item.content_urls.desktop.page,
          mobile: item.content_urls.mobile.page,
        }}
      />
    </div>
  </div>
</div>

<style lang="scss">
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: calc(100% - var(--grid-padding));
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
      @media screen and (max-width: '450px') {
        width: 200px;
        height: 100px;
      }
      @media screen and (max-width: '270px') {
        width: 150px;
        height: 100px;
      }
    }
    p {
      padding: 0 20px 0 20px;
      @media screen and (max-width: '450px') {
        font-size: 0.9em;
        text-align: center;
      }
    }
    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px 0;
      @media screen and (max-width: '450px') {
        flex-direction: column;
        padding: 0;
      }
    }
    .button {
      @media screen and (max-width: '450px') {
        padding: 20px 0;
      }
    }
  }
</style>
