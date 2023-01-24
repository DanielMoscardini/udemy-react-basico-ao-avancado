import './Game.css';

import React from 'react';

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="point">
        <span>Pontuacao: 000</span>
      </p>
      <h1>Advinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra <span>Dica...</span>
      </h3>
      <p>Voce ainda tem x tentativas</p>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras ja utilizadas: </p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  );
};

export default Game;
