'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const sqlite = require('sqlite');

const router = express.Router();
router.get('/', (req, res) => {
	console.log('11111')
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Fuck Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/regiter', (req, res) => res.json({ postBody: req.body }));
router.post('/sendMail', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
