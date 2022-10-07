import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
  log: ['query'],
});

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
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
