import { useEffect, useState, useRef } from "react";
import '../../pages/gamesMade/snakeGame.css'

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 1, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

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
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(generateFood(INITIAL_SNAKE));
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
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
  }

  return (
    <div className="snake-game-wrapper">
      {gameOver && (
        <div className="game-over-message">
          <h2>Game Over</h2>
        </div>
      )}

      {started && (
        <div
          className="snake-board"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gap: "1px",
            marginBottom: "20px",
           transition: 'none',
            borderRadius: "10px",
          }}
        >
          {[...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const isSnake = snake.some((s) => s.x === x && s.y === y);
            const isFood = food.x === x && food.y === y;
            return (
              <div
                key={i}
                style={{
                  width: `${CELL_SIZE}px`,
                  height: `${CELL_SIZE}px`,
                  backgroundColor: isSnake
                    ? "green"
                    : isFood
                    ? "red"
                    : "black",
                  borderRadius: "4px",
                }}
              ></div>
            );
          })}
        </div>
      )}

      {!started ? (
        <button className="start-btn" onClick={startGame}>
          Start Game
        </button>
      ) : (
        gameOver && (
          <button className="start-btn" onClick={startGame}>
            Restart
          </button>
        )
      )}
    </div>
  );
}
