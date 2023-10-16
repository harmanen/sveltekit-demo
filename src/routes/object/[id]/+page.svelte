<script lang="ts">
  import LinkToWiki from '$components/LinkToWiki.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="object-container">
  <div class="object-item image-container">
    <a
      href={data.originalimage?.source}
      target="_blank"
    >
      <img
        src={data.thumbnail?.source}
        alt="An image of {data.title} which is {data.description}"
      />
    </a>
  </div>
  <div class="object-item text-container">
    <div class="text-background">
      <h3>{data.title}</h3>
      <div class="extract">{@html data.extract_html}</div>
      <div class="instructions">
        Click the image to see it in full resolution!
      </div>
      <div class="link-button-container">
        <LinkToWiki
          urls={{
            desktop: data.content_urls?.desktop.page || '',
            mobile: data.content_urls?.mobile.page || '',
          }}
        />
      </div>
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
  .link-button-container {
    padding: 30px 0;
    @media screen and (max-width: '1000px') {
      text-align: center;
    }
  }
  a {
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 25px;
  }
  h3,
  .extract,
  .instructions {
    margin: 0;
    color: var(--text-color);
    @media screen and (max-width: '800px') {
      text-align: center;
    }
  }
  h3 {
    color: var(--primary-js-on);
    :global(html.no-js) & {
      color: var(--primary-js-off);
    }
  }
  .extract,
  .instructions {
    padding-top: 10px;
    @media screen and (min-width: '1000px') {
      font-size: 1.5em;
    }
    @media screen and (max-width: '450px') {
      font-size: 0.9em;
    }
  }
  .instructions {
    padding: 20px 0;
  }
</style>
