<script>
  import ePub from "epubjs";
  const fs = require('fs');
  const path = 'src/Assets/hsdxd1.epub';

  const arrayBuffer = new Uint8Array(fs.readFileSync(path)).buffer;
  const book = ePub(arrayBuffer);
  const rendition = book.renderTo("viewer", {width: "100%", height: "100%"});
  
  rendition.display();

  function onKeyDown(e) {
    switch(e.keyCode) {
      case 39:
        rendition.prev();
        break;
      case 37:
        rendition.next();
        break;
    }
  }
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
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
