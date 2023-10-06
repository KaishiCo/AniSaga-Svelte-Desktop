import { writable } from "svelte/store";
import { Rendition } from "epubjs";

const currentBookData = writable([{
    bookID: String,
    bookFP: String,
    location: Rendition
}]);

export default currentBookData;