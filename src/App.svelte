<script>
  	import { onDestroy } from 'svelte';
	import { view } from './View';
	import Home from "./Views/Home.svelte";
	import Reader from "./Views/Reader.svelte";

	let state;

	const unsubscribe = view.subscribe((value) => {
		state = value;
	});

	onDestroy(unsubscribe);
</script>

	{#if state === 0}
		<Home />
	{:else if state === 1}
		<Reader />
	{:else}
		<Home />
	{/if}

<style>
</style>