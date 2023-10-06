<script>
    export let imgurl;
    export let bookName;
    export let bookId;
    import * as db from "../DB/DatabaseHandler";
    import currentBookData from "../Stores/Book";
    import { view } from "../Stores/View";

    async function setBookInfo() {
        let bookInfo = await db.getEpubInfo(bookId).then((res) => {
            return res;
        });
        currentBookData.set({bookID: bookId, bookFP: bookInfo.filePath, location: bookInfo.pageLocation});
        view.set(1);
    }
</script>

<div>
<img src={imgurl} alt={bookName} width="255" height="350" on:click={setBookInfo}>
</div>

<style>
    div {
        position: relative;
        display: flex;
        margin: 0.3rem;
        min-width: 255px;
        max-width: 255px;
        min-height: 350px;
        max-height: 350px;
        background-color: black;
    }
</style>