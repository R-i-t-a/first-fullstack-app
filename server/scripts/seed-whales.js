const client = require('../db-client');
const whales = require('./whales.json');

Promise.all(
  whales.map(whale => {
    return client.query(`
      INSERT into whales (
        ocean_id, species, weight, url
        )
        SELECT
          id as ocean_id,
          $1 as species,
          $2 as weight,
          $3 as url
        FROM oceans
        WHERE name = $4;
        `,
        [whale.species, whale.weight, whale.url, whale.ocean]
      );
    })
  )

  .then(
    () => console.log('seed data load sucessful'),
    err => console.error(err)
  )
  .then(() => client.end());