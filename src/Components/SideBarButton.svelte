<script>
  import { view } from "../Stores/View";
  import * as fh from "../Util/FileHandler";
  export let value;

  let fileInput;

  function handleFileSelect(event) {
    const selectedFiles = event.target.files;
    if (selectedFiles.length > 0) {
      let selectedFile = selectedFiles[0];
      fh.parseFile(selectedFile.path).then((parsed) => {
        if (!parsed) return;
        view.set(10);
      });
    }
  }
  
  function changeView() {
    view.set(value);
  }
</script>

{#if value == 4}
  <input type="file" accept=".epub" bind:this={fileInput} on:change={handleFileSelect} />
  <button on:click={fileInput.click()}></button>
{:else}
  <button on:click={changeView} />
{/if}

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
    cursor: pointer;
  }
  input {
    display: none;
  }
</style>
