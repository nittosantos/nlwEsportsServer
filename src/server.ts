import express from 'express';

const app = express();

app.get('/games', (request, response) => {
  return response.json([{ games: 'Dota 2' }]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;
  return response.json([]);
});

app.get('/ads/:id/discord', (request, response) => {
  // const adId = request.params.id;
  return response.json([]);
});

app.listen(3333);
