import { writable } from "svelte/store";

const currentBookData = writable([{
    bookID: String,
    bookTitle: String,
    bookFP: String,
    location: String
}]);

export default currentBookData;