const sqlite = require("sqlite3").verbose();
const path = require("path");

const db_name = path.join(__dirname, "../data", "/donnees.db");
console.log(db_name);
const db = new sqlite.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connexion réussie à la base de données 'donnees.db'");
});

db.query = function (sql, params) {
  var that = this;
  return new Promise(function (resolve, reject) {
    that.all(sql, params, function (error, rows) {
      if (error)
        reject(error);
      else
        resolve({ rows: rows });
    });
  });
};
const sql_create_Cibles = `
CREATE TABLE IF NOT EXISTS Cibles (
  cible_id INTEGER PRIMARY KEY AUTOINCREMENT,
  email VARCHAR(100) NOT NULL
);`

const sql_create_Campagnes = `
CREATE TABLE IF NOT EXISTS Campagnes (
  campagne_id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom VARCHAR(100) NOT NULL
);`

const sql_create_Mails = `
CREATE TABLE IF NOT EXISTS Mails (
  mail_id INTEGER PRIMARY KEY AUTOINCREMENT,
  cible_id INTEGER,
  campagne_id INTEGER,
  FOREIGN KEY(cible_id) REFERENCES Cibles(cible_id)
  FOREIGN KEY(campagne_id) REFERENCES Campagnes(campagne_id)
);`

// const sql_add = `
// INSERT INTO Cibles (email)
// VALUES ('pierre2vaug@gmail.com');
// `;

db.run(sql_create_Cibles, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("");
});

db.run(sql_create_Campagnes, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("");
});

db.run(sql_create_Mails, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("");
});




async function getCibleIDByEmail(email) {
  const sql = "SELECT cible_id from Cibles Where email = '" + email + "';";
  const result = await db.query(sql, []);
  return result.rows[0].cible_id;
}

module.exports = {
  db,
  getCibleIDByEmail
};