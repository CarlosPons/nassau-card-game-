// file: src/App.js
import './App.css';
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import GameLogic from './GameLogic';
import GameRender from './GameRender';
//import GameRender3D from './GameRender3D';

const NassauCardGame = Game({
  setup: GameLogic.initialState,
  moves: {
    drawCard: GameLogic.drawCard,
    playCard: GameLogic.playCard
  },
  flow: {
    onTurnBegin: GameLogic.onTurnStart
  }
});

const App = new Client({
  game: NassauCardGame,
  board: GameRender
});

export default App;