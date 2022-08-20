const db = require('./db');

module.exports = function getProjects() {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(`
      SELECT id, name
      FROM projects
    `);

    stmt.all((err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(rows);
    });
  });
};
