<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { commonStore } from "../stores/common";
	import type { TemplatePage } from "../types";
	import Navbar from "./Navbar.svelte";

	let activePage: string = null;
	let commonUnSubscriber;
	let homePage: TemplatePage = $commonStore.pages.at(0);

	onMount(() => {
		commonUnSubscriber = commonStore.subscribe(
			(store) => (activePage = store.activePage)
		);
	});

	onDestroy(() => {
		commonUnSubscriber();
	});
	$: console.log("🚀 ~ file: Page.svelte:7 ~ activePage:", activePage);
</script>

<nav>
	<header><a href={`/${homePage.alias}`}>VibesIntro</a></header>
	<Navbar />
</nav>
<main>
	<div>
		<h1>You are on <strong>{activePage}</strong> page</h1>
	</div>
</main>
<footer>This is footer</footer>
