<script>
    import Sidebar from "../Components/Sidebar.svelte";
    import ReaderBody from "../Components/ReaderBody.svelte";
</script>

    <ReaderBody />
    <div class="hide">
        <Sidebar class="hidestyle"/>
    </div>

<style>
.hide :global(.hidestyle) {
  position: fixed;
  top: 0px;
  left: -3.6rem;
  height: 100vh;
  width: 4rem;
  transition: left 0.5s ease;
  display: flex;
  flex-direction: column;
  background-color: #202225;
  color: rgba(255, 255, 255, 1);
}
.hide:hover :global(.hidestyle) {
    left: 0rem;
}
</style>