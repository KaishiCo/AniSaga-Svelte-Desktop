console.log("preload.js loaded");
const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database("./epub.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS epub (
      id TEXT PRIMARY KEY,
      title TEXT,
      coverPath TEXT,
      filePath TEXT,
      pageLocation TEXT DEFAULT NULL)
  `);
  // db.run(`
  //   INSERT INTO epub (id, title, coverPath, filePath)
  //   VALUES ("1", "HsDxd", "../src/Assets/cover.jpeg", "src/Assets/hsdxd1.epub")
  // `);
  // db.run(`
  //   DELETE FROM epub
  // `);
  db.close();
});
