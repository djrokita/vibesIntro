<script lang="ts">
	import { commonStore } from "../stores/common";
	import type { TemplatePage } from "../types";

	// export let pages: Array<TemplatePage>;
</script>

<div class="ml-55 mt-4 p-4">
	<ul class="text-white sm:self-center text-xl">
		{#each $commonStore.pages as page}
			<li class="sm:inline-block hover:bg-blue-700 mx-2 py-2">
				<a class="p-3" href={`/${page.alias}`}>{page.name}</a>
			</li>
		{/each}
	</ul>
</div>
