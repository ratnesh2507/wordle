import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

function Wordle({ answer }) {
  const { moves, currentGuess, handleKeyUp, guesses, isCorrect } =
    useWordle(answer);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, moves, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div>Answer is: {answer}</div>
      <div>Current Guess: {currentGuess}</div>
    </>
  );
}

export default Wordle;
