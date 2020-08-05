const cors = require('cors');
const express = require('express');
const next = require('next');

const router = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());

  server.use(router);

  server.all('*', (req, res) => handle(req, res));

  server.listen(3000);
});
