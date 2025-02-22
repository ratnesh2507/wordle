import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

function Wordle({ answer }) {
  const { moves, currentGuess, handleKeyUp, guesses, isCorrect } =
    useWordle(answer);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, moves, isCorrect);
  }, [guesses, moves, isCorrect]);

  return (
    <div>
      <div>Answer is: {answer}</div>
      <div>Current Guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} moves={moves} />
      <Keypad />
    </div>
  );
}

export default Wordle;
