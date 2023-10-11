<script>
    import Sidebar from "../Components/Sidebar.svelte";
	import InteractionBar from "../Components/InteractionBar.svelte";
    import { onMount } from "svelte";
    import { view } from "../Stores/View";

    onMount(change);

    function change() {
        view.set(0);
    }
</script>

    <Sidebar />
    <InteractionBar />
    <div></div>

<style>
    div {
        position: fixed;
        display: flex;
        top: 0px;
        left: 20rem;
        height: 100vh;
        width: 100vw;
        background-color: #363a3f;
    }
</style>