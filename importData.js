const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const ndjson = require('ndjson');

const db = new sqlite3.Database('mydb.db');

// replace content by your db structure
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS data (
    id TEXT,
    type TEXT,
    name TEXT,
    postcode TEXT,
    lat REAL,
    lon REAL,
    city TEXT,
    departement TEXT,
    region TEXT,
    population INTEGER,
    adm_weight INTEGER,
    importance REAL
  )`;
db.run(createTableQuery);

const insertQuery = `INSERT INTO data (
  id, type, name, postcode, lat, lon, city,
  departement, region, population, adm_weight, importance
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

// Create a reading stream for the JSON file (to process large files)
const stream = fs.createReadStream('./data/myjson.json')
  .pipe(ndjson.parse());

// Process line by line on the json file
stream.on('data', (obj) => {
  const params = [
    obj.id, obj.type, obj.name, obj.postcode, obj.lat, obj.lon,
    obj.city, obj.departement, obj.region, obj.population, obj.adm_weight,
    obj.importance
  ];
  db.run(insertQuery, params, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
});

stream.on('end', () => {
  console.log('Import completed');
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Database connection closed');
    }
  });
});

stream.on('error', (err) => {
  console.error(err.message);
});
