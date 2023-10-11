<script>
  import BookCardCover from "./BookCardCover.svelte";
  import * as db from "../DB/DatabaseHandler";
  import { onMount } from "svelte";

  let epubs = [];

  onMount(async () => {
    epubs = await getAllEpubs();
  });

  async function getAllEpubs() {
    return await db.getEpubs().then((res) => {
      return res;
    })
  };
</script>

  <div>
    {#if epubs.length > 0}
      {#each epubs as epub (epub.id)}
      <BookCardCover imgurl={"../" + epub.folderPath + "cover.jpeg"} bookName={epub.title} bookId={epub.id} />
      {/each}
    {/if}
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
