<script lang="ts">
	import { commonStore } from "../stores/common";
	import type { TemplatePage } from "../types";

	// export let pages: Array<TemplatePage>;
</script>

<div>
	<ul>
		{#each $commonStore.pages as page}
			<li><a href={`/${page.alias}`}>{page.name}</a></li>
		{/each}
	</ul>
</div>
