import * as db from "./DatabaseHandler";
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const StreamZip = require('node-stream-zip');

async function parseFile(filepath) {
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

    await extractCover(destFile, path);

    db.insertEpub(id, booktitle, path);
    return true;
}

async function extractCover(destFile, path) {
    const zip = new StreamZip.async({ file: destFile});
    await zip.extract('cover.jpeg', path + "cover.jpeg");
    await zip.close();
}

export { parseFile };
