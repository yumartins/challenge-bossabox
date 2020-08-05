const cors = require('cors');
const express = require('express');

const database = require('./backend/db.json');

const app = express();

app.use(cors());

app.all('/', (req, res) => res.json(database));

app.listen(5000, () => console.log('Ready api => 5000'));
