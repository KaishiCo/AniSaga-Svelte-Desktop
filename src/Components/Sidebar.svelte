<script>
  import SideBarButton from "./SideBarButton.svelte";
</script>

<div class={$$props.class}>
  <SideBarButton value={0} />
  <SideBarButton value={1} />
  <SideBarButton value={2} />
  <SideBarButton value={3} />

  <!-- upload file test -->
  <SideBarButton value={4} />
</div>

<style>
  div {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 4rem;
    display: flex;
    flex-direction: column;
    background-color: #202225;
    color: rgba(255, 255, 255, 1);
  }
</style>
