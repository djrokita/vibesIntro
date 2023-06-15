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

<div class="flex flex-col h-screen justify-between">
	<header class="bg-blue-900 shadow-lg">
		<div class="container">
			<div class="sm:flex justify-between content-center flex-wrap">
				<a
					class="text-white text-3xl font-bold p-4"
					href={`/${homePage?.alias}`}>VibesIntro</a
				>
				<Navbar />
			</div>
		</div>
	</header>
	<main class="flex justify-center">
		<div>
			<h1 class="text-5xl">You are on <strong>{activePage}</strong> page</h1>
		</div>
	</main>
	<footer class="h-20 bg-slate-800 text-slate-100 text-lg text-center p-3">
		This is footer
	</footer>
</div>
