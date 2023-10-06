const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./epub.db");


//insert
function insertEpub(id, title, coverPath, filePath) {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO epub (id, title, coverPath, filePath, pageLocation)
        VALUES ("`+id+`", "`+title+`", "`+coverPath+`", "`+filePath+`")
        `, (err) => {
            if (err) {
                reject(false);
            }
            else {
                resolve(true);
            }
        });
    });
}

//delete


//update
function updateLocation(id, location) {
    db.run(`UPDATE epub SET pageLocation = $bookLocation WHERE id = $bookID`, {
        $bookLocation: location,
        $bookID: id
    });
}

//read
function getEpubs() {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM epub", (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function getEpubInfo(id) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT filePath, pageLocation FROM epub WHERE id="`+id+`"`, (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

export { getEpubs, getEpubInfo, updateLocation };