<script>
    import { view } from '../Stores/View';
    export let value;

    function changeView() {
        view.set(value);
    }
</script>

<button on:click={changeView}></button>

<style>
    button {
        position: relative;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        margin-left: auto;
        margin-right: auto;
        border: 0;
        border-radius: 30px;
        width: 3rem;
        height: 3rem;
        color: blueviolet;
        background-color: blueviolet;
    }
    button:hover {
        cursor:pointer;
    }
</style>