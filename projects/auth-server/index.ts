import { Request, Response } from 'express';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyParser());

const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InBldGVyIiwiZXhwIjozNTIzNDQxMTg3fQ.MAOFjGA0mHVgfMesnoNrqSzFzMWfaEXj4MyswRY4CK4';

app.post('/api/login', (req: Request, res: Response) => {
  if (req.body && req.body.username === 'peter' && req.body.password === 'fancy-pw') {
    res.json({token: jwt});
  }
  res.status(401).end();
});

app.get('/api/auth', (req: Request, res: Response) => {
  if (req.header('authorization')) {
    const token = req.header('authorization').split(' ')[1];
    if (token === jwt) {
      res.status(200).end();
    }
  }
  res.status(401).end();
});

app.get('/api/flight', (req: Request, res: Response) => {
  setTimeout(() => {
    if (req.header('authorization')) {
      const token = req.header('authorization').split(' ')[1];
      if (token === jwt) {
        const flights = JSON.parse(fs.readFileSync(path.join(__dirname, 'flights.json')).toString('utf8'));
        res.json(flights);
      }
    }
    res.status(401).end();
  }, 4000);
});

const port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
