import { useEffect, useState, useRef } from "react";
import '../gamesMade/css/snake.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 5, y: 5 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

function generateFood(snake) {
  let newFood;
  do {
    newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === newFood.x && s.y === newFood.y));
  return newFood;
}

export default function Snake() {
  const navigate = useNavigate();
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(generateFood(INITIAL_SNAKE));
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (!started || gameOver) return;

    intervalRef.current = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(intervalRef.current);
  }, [snake, direction, started, gameOver]);

  function moveSnake() {
    const newHead = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y,
    };

    if (
      newHead.x < 0 ||
      newHead.y < 0 ||
      newHead.x >= GRID_SIZE ||
      newHead.y >= GRID_SIZE ||
      snake.some((s) => s.x === newHead.x && s.y === newHead.y)
    ) {
      setGameOver(true);
      clearInterval(intervalRef.current);
      return;
    }

    const newSnake = [newHead, ...snake];

    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(generateFood(newSnake));
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }

  function startGame() {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setStarted(true);
    setScore(0);
  }

  return (
    <div className="snake-page">
      <button className="gtav-back-btn" onClick={() => navigate('/game')}>
        <FaArrowLeft />
      </button>

      <h1 className="snake-title">Snake Game</h1>

      <div className="snake-game-wrapper">
        {started && (
          <div
            className="snake-board"
            style={{
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
            }}
          >
            <div className="score">Score: {score}</div>

            {gameOver && (
              <div className="gameover">GAME OVER</div>
            )}

            {[...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => {
              const x = i % GRID_SIZE;
              const y = Math.floor(i / GRID_SIZE);
              const isSnake = snake.some((s) => s.x === x && s.y === y);
              const isFood = food.x === x && food.y === y;

              return (
                <div
                  key={i}
                  className={`snake-cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
                ></div>
              );
            })}

            {gameOver && (
              <button className="restart-btn" onClick={startGame}>
                Restart
              </button>
            )}
          </div>
        )}

        {!started && (
          <button className="start-btn" onClick={startGame}>
            Start Game
          </button>
        )}
      </div>
    </div>
  );
}
