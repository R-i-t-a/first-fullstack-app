const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS whales;
  DROP TABLE IF EXISTS oceans;
  `)
    .then(
      () => console.log('drop tables complete'),
      err => console.log(err)
    )
    .then(() => {
      client.end();
    });
