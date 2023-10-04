import { writable } from "svelte/store";
import { Rendition } from "epubjs";

const bookLocation = writable([{
    started: false,
    bookSpot: Rendition,
}]);

export default bookLocation;