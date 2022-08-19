const db = require('./db');

module.exports = function getTextList() {
  return new Promise((resolve, reject) => {
    db.all('SELECT info FROM text_list', (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(rows.map((row) => row.info));
    });
  });
};
