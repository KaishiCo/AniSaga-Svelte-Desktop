<script>
	import { onMount } from "svelte";

	let arrayBuffer;

	onMount(async () => {
		const response = await fetch("http://localhost:8000/epubs/1");
		arrayBuffer = await response.arrayBuffer();

		const book = ePub(arrayBuffer);
		const rendition = book.renderTo("viewer", { width: 600, height: 400 });
		rendition.display();
	});
</script>

<div id="viewer" />

<style>
	div {
		position: fixed;
		display: flex;
		top: 0px;
		left: 0px;
		height: 100vh;
		width: 100vw;
		background-color: #363a3f;
	}
</style>
