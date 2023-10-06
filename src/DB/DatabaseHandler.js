const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./epub.db");

//insert


//delete


//update


//read
async function getEpubs() {
    db.run("SELECT * FROM epub", (err, rows) => {
        if (err) throw err;

        return rows;
    });
}

export { getEpubs };