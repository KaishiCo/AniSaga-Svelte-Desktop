<script>
    export let imgurl;
    export let bookName;
</script>

<div>
<img src={imgurl} alt={bookName} width="255" height="350">
</div>

<style>
    div {
        position: relative;
        display: flex;
        margin: 0.3rem;
        min-width: 255px;
        min-height: 350px;
        background-color: black;
    }
</style>