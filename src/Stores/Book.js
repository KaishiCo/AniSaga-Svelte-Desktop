import { writable } from "svelte/store";

const currentBookData = writable([{
    bookID: String,
    bookFP: String,
    location: String
}]);

export default currentBookData;