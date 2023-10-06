<script>
  import BookCardCover from "./BookCardCover.svelte";
  import * as db from "../DB/DatabaseHandler";
  const path = '../src/Assets/cover.jpeg';

  let epubs;

  async function getMainContents() {
    epubs = await db.getEpubs();
    console.log(epubs);
  };
</script>

  <div>
    {#await getMainContents}
    {#each epubs as epub (epub.id)}
      <BookCardCover imgurl={epub.coverPath} bookName={"hsdxd1 cover"} pageLocation={epub.pageLocation} />
    {/each}
    {/await}
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
