<script>
  import BookCardCover from "./BookCardCover.svelte";
</script>

  <div>
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
    <BookCardCover />
  </div>

<style>
div {
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
  top: 0px;
  left: 20rem;
  height: 100vh;
  width: calc(100vw - 20rem);
  background-color: #363a3f;
}
div::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
</style>
