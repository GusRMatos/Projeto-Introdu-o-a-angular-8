const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/games').get((request, response) => {
  response.send(GAMES);
});

app.route('/api/games').post((request, response) => {
  let game = request.body;

  const firstId = GAMES ? Math.max.apply(null, GAMES.map(gameIterator => gameIterator.id)) + 1 : 1;
  game.id = firstId;
  GAMES.push(game);
  

  response.status(201).send(game);
});

app.route('/api/games/:id').put((request, response) => {
  const gameId = +request.params['id'];
  const game = request.body;

  const index = GAMES.findIndex(gameIterator => gameIterator.id === gameId);
  GAMES[index] = game;

  response.status(200).send(game);
});

app.route('/api/games/:id').get((request, response) => {
  const gameId = +request.params['id'];

  response.status(200).send(GAMES.find(gameIterator => gameIterator.id === gameId));
});

app.route('/api/games/:id').delete((request, response)=> {
  const gameId = +request.params['id'];
  GAMES = GAMES.filter(gameIterator => gameIterator.id !== gameId);
  
  response.status(204).send({});
});

var GAMES = [
    {
        id: 1,
        name: 'Grand thief auto V',
        releaseDate: 'September 11, 2013',
        description: 'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.',
        manufacturer: 'Rockstar-Games',
        rating: 4.4,
        price: 172.08,
        imageUrl: '/assets/images/gta.png',
    },
    {
        id: 2,
        name: 'Red Dead Redemption',
        releaseDate: 'Octuber 26, 2018',
        description: 'Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar Games.',
        manufacturer: 'Rockstar-Games',
        rating: 4.7,
        price: 152.12,
        imageUrl: '/assets/images/rdr.png',
    },
    {
        id: 3,
        name: 'Resident Evil 7',
        releaseDate: 'January 14, 2017',
        description: 'Resident Evil 7: Biohazard, conhecido no Japão como Biohazard 7: Resident Evil é um jogo eletrônico do gênero survival horror produzido pela Capcom ',
        manufacturer: 'Capcom',
        rating: 4.6,
        price: 127.20,
        imageUrl: '/assets/images/resident7.png',
    },
    {
        id: 4,
        name: 'fifa 2021',
        releaseDate: 'Octuber 5, 2020',
        description: 'FIFA 21 é um videogame de simulação de esportes desenvolvido e publicado pela Electronic Arts, tendo como estrela da capa o jogador Kylian Mbappé. ',
        manufacturer: 'Electronic-Arts',
        rating: 1.9,
        price: 148.17,
        imageUrl: '/assets/images/fifa.png',
    },
    {
        id: 5,
        name: 'Battlefield V',
        releaseDate: 'September 4, 2018',
        description: 'Battlefield V é um jogo eletrônico de tiro em primeira pessoa, desenvolvido pela DICE e publicado pela Electronic Arts. ',
        manufacturer: 'Electronic-Arts',
        rating: 2.9,
        price: 451.16,
        imageUrl: '/assets/images/bfd.png',
    }
];    