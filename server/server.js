const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use(express.json());

const client = require('./db-client');

app.get('/api/whales', (req, res) => {
  client.query(`
    SELECT
      w.id,
      w.species,
      o.id as "oceanId",
      o.name as ocean
    FROM WHALES as w
    JOIN oceans as o
    ON w.ocean_id = o.id
    ORDER by w.species;
    `)
    .then(result => {
      res.send(result.rows);
      console.log(result);
    })
    .catch(err => console.log(err));
});

app.get('/api/whales/:id', (req, res) => {
  client.query(`
    SELECT
      id,
      species,
      ocean_id as "oceanId",
      weight,
      url
    FROM whales
    WHERE id = $1;
    `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));

});

app.post('/api/whales', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO whales (species, ocean_id, weight, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
  [body.species, body.oceanId, body.weight, body.url]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.put('/api/whales/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update whales
    set
      species = $1,
      ocean_id = $2,
      weight = $3,
      url = $4
    where id = $6
    returning *;
    `,
  [body.species, body.oceanId, body.weight, body.url, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/whales/:id', (req, res) => {
  client.query(`
    delete from whales where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/oceans', (req, res) => {
  client.query(`
    SELECT *
    FROM oceans;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

const PORT = 3000;
app.listen(3000, () => console.log('app running on', PORT));