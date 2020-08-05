const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.listen(5000, () => console.log('Ready api => 5000'));
