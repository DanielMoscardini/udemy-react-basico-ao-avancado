import './StartScreen.css';

import React from 'react';

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botao abaixo para comecar a jogar</p>
      <button onClick={startGame}>Comecar o jogo</button>
    </div>
  );
};

export default StartScreen;
