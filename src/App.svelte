<script>
  	import { onDestroy } from 'svelte';
	import { view } from './Stores/View';
	import Home from "./Views/Home.svelte";
	import Reader from "./Views/Reader.svelte";
	import Loading from './Views/Loading.svelte';

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
	{:else if state === 10}
		<Loading />
	{:else}
		<Home />
	{/if}

<style>
</style>