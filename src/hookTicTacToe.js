import React, { useState } from 'react';
import './App.css';

const Square = (pros) => {
  /// 
}


const Game = () => {
  const [xIsNext, setXisNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null)); // [null, null, null, null, null, null]

  const renderSquare = (index) => (
    /// return Square component
    <button>
      {index}
    </button>
  );

  return (
      <div className="App">
        <h2>Tic Tac Toe</h2>
        <h1>Next Player: {xIsNext ? "X" : "O"}</h1>
        <div className="Row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="Row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="Row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
  );
}

export default Game;