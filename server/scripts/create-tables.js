const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/sea_mammals';

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS whales (
        id SERIAL PRIMARY KEY,
        species VARCHAR(256) NOT NULL,
        weight VARCHAR(256),
        url VARCHAR(1024)
      );
    `);        
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });