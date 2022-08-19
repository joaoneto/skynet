const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.resolve('./db.sqlite'));

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS text_list (info TEXT)');
  // db.run('INSERT INTO text_list (info) VALUES ("hello world")');
});

module.exports = db;
