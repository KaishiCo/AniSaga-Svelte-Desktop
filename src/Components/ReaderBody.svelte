<script>
  import { onMount } from "svelte";
  import ePub from "epubjs";
  const fs = require('fs');
  

  onMount(async () => {
    console.log("onMount called");
    const path = 'src/Assets/hsdxd1.epub';

    fs.readFile(path, function read(err, data) {
      if (err) throw err;
      const arrayBuffer = new Uint8Array(data).buffer;
      
      var book = ePub(arrayBuffer);
      const rendition = book.renderTo("viewer", { width: 1920, height: 1080 });
      rendition.display();
    });
  });
</script>

<div>
  <div id="viewer" />
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
