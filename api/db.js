const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.resolve('./db.sqlite'));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY ASC,
      name VARCHAR(100)
    )
  `);

  // db.run(`
  //   INSERT INTO projects (name)
  //   VALUES ('First project')
  // `);
});

module.exports = db;
