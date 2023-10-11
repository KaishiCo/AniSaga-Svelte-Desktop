import * as db from "./DatabaseHandler";
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

function parseFile(filepath) {
    let id = uuidv4().toString();
    let booktitle = filepath.substring(filepath.lastIndexOf("\\") + 1, filepath.lastIndexOf("."));
    let path = "src/Assets/" + booktitle + "/";

    db.epubExists(booktitle).then((res) => {
        console.log(res);
    });

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }

    let destFile = path + "" + booktitle + ".epub";
    fs.copyFileSync(filepath, destFile);

    // fs.readSync(destFile, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log(data);
    //     }
    // });

    db.insertEpub(id, booktitle, path);
}

export { parseFile };
