import { useState } from 'react';
import '../gamesMade/css/tic-tac-toe.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Tic() {
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  }

  const status = winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? "Draw"
    : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="ttt-container">
      <button className="sg-back-btn" onClick={() => navigate('/game')}>
        <FaArrowLeft />
      </button>
      <h1 className="ttt-title">Tic Tac Toe</h1>
      <div className="ttt-status">{status}</div>
      <div className="ttt-board">
        {[0, 1, 2].map((row) => (
          <div className="ttt-row" key={row}>
            {renderSquare(row * 3)}
            {renderSquare(row * 3 + 1)}
            {renderSquare(row * 3 + 2)}
          </div>
        ))}
      </div>
      <button className="ttt-reset" onClick={resetGame}>Restart</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
