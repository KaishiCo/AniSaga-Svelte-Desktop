<script>
  import { view } from "../Stores/View";
  export let value;

  let fileInput;

  function testHandler() {
    console.log("testHandler");
  }

  function changeView() {
    switch (value) {
      case 0:
      case 1:
      case 2:
      case 3:
        view.set(value);
        break;
      case 4:
        testHandler();
        break;
    }
  }
</script>

{#if value == 4}
  <input type="file" bind:this={fileInput} />
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
