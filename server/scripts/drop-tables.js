const pg = require('pg');
const Client = pg.Client;

const databaseURL = 'postgres://localhost:5432/sea_mammals';

const client = new Client(databaseUrl);

client.connect()
    .then(() => {
        return client.query(`
        DROP TABLE IF EXISTS whales;
        `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });