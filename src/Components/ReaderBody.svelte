<script>
  import ePub from "epubjs";
  import currentBookData from '../Stores/Book';
  import { onDestroy } from "svelte";
  const fs = require('fs');

  let currBook;
  const unsubscribe = currentBookData.subscribe((data) => {
    currBook = data;
  });

  let rendition;

  if (currBook.location === null) {
    const arrayBuffer = new Uint8Array(fs.readFileSync(currBook.bookFP)).buffer;
    const book = ePub(arrayBuffer);
    rendition = book.renderTo("viewer", {width: "100%", height: "100%"});

    rendition.display();
  }
  else {
    const arrayBuffer = new Uint8Array(fs.readFileSync(currBook.bookFP)).buffer;
    const book = ePub(arrayBuffer);
    rendition = book.renderTo("viewer", {width: "100%", height: "100%"});

    rendition.display(currBook.location.start.cfi);
  }

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

  onDestroy( () => {
    //todo update currentLocation on the db
    currentBookData.set({bookID: currBook.bookID, bookFP: currBook.bookFP, location: rendition.currentLocation()});
    unsubscribe;
  });
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
