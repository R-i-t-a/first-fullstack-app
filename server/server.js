const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/sea_mammals';
const client = new Client(databaseUrl);
client.connect();

function readData() {
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw); 
  
  return data;
}

app.get('/api/whales', (req, res) => {
  client.query(`
    SELECT
      id,
      species,
      weight,
      url
    FROM whales;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/whales/:id', (req, res) => {
  client.query(`
    SELECT
      id,
      species,
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
    INSERT INTO whales (species, weight, url)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
  [body.species, body.weight, body.url]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

const PORT = 3000;
app.listen(PORT, () => console.log('app running...'));