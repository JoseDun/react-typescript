import { ReactNode, useState } from "react";
import "./App.css";
import { TURNS, WINNER_COMBOS } from "./constants";
import confetti from "canvas-confetti";

type Props = {
  children?: ReactNode;
  updateBoard: (value: number) => void;
  index: number;
  isSelected?: boolean;
};

const Square = ({ children, updateBoard, index, isSelected }: Props) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState<string[]>(() => {
    const boardFromStorage = window.localStorage.getItem("board");

    if (boardFromStorage) return JSON.parse(boardFromStorage);

    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState<string>(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState<null | boolean>(null);

  const checkWinner = (boardToCheck: any[]) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const checkEndGame = (boardToCheck: any[]): boolean => {
    return boardToCheck.every((square) => square !== null);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  const updateBoard = (index: number): void => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);

    //* guardar localstorage
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    //* revisar si hay ganador
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //* Empate
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toc</h1>

      <button onClick={resetGame}>Empezar de nuevo</button>

      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square
          isSelected={turn === TURNS.X}
          updateBoard={function (value: number): void {
            throw new Error("Function not implemented.");
          }}
          index={0}
        >
          {TURNS.X}
        </Square>

        <Square
          isSelected={turn === TURNS.O}
          updateBoard={function (value: number): void {
            throw new Error("Function not implemented.");
          }}
          index={0}
        >
          {TURNS.O}
        </Square>
      </section>

      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Empate" : "Ganó"}</h2>

            {winner ? (
              <header className="win">
                <Square
                  updateBoard={function (value: number): void {
                    throw new Error("Function not implemented.");
                  }}
                  index={0}
                >
                  {winner}
                </Square>
              </header>
            ) : null}

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
