const client = require('../db-client');
const oceans = require('./oceans.json');

Promise.all(
  oceans.map(ocean => {
    return client.query(`
      INSERT INTO oceans (name)
      VALUES ($1);
      `,
    [ocean.name]
    );
  })
)
  .then(
    () => console.log('seed data load sucessful'),
    err => console.error(err)
  )
  .then(() => client.end());