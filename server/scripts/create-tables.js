const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS oceans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS whales (
    id SERIAL PRIMARY KEY,
    species VARCHAR(256) NOT NULL,
    weight VARCHAR(256),
    url VARCHAR(1024),
    ocean_id INTEGER NOT NULL REFERENCES oceans(id)
  );
`)

  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });