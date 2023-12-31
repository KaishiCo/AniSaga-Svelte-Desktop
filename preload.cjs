console.log("preload.js loaded");
const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database("./epub.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS epub (
      id TEXT PRIMARY KEY,
      title TEXT,
      folderPath TEXT,
      pageLocation TEXT DEFAULT NULL)
  `);
  db.close();
});
