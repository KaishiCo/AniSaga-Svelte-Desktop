<script>
  import { onMount } from "svelte";

  let arrayBuffer;
  

  onMount(async () => {
    console.log("onMount called");
    const response = await fetch("http://localhost:9000/api/epubs/1");
    arrayBuffer = await response.arrayBuffer();
    console.log(arrayBuffer);

    var book = ePub(arrayBuffer);
    const rendition = book.renderTo("viewer", { width: 600, height: 400 });
    rendition.display();
  });
</script>

<div>
  <div id="viewer" />
  <div><p>test</p></div>
</div>

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
