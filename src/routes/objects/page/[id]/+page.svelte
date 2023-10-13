<script lang="ts">
  import ObjectsGrid from '$components/ObjectsGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<ObjectsGrid data={data.mockData} />
