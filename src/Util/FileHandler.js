import * as db from "./DatabaseHandler";
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

function parseFile(filepath) {
    let id = uuidv4().toString();
    let booktitle = filepath.substring(filepath.lastIndexOf("\\")+1, filepath.lastIndexOf("."));
    let path = "src/Assets/" + booktitle + "/";

    console.log(id + " " + booktitle + " " + path);

    fs.mkdirSync(path);

    fs.copyFileSync(filepath, path + "" + booktitle + ".epub");
    fs.copyFileSync(filepath, path + "" + booktitle + ".zip");

    db.insertEpub(id, booktitle, path);
}

export { parseFile };