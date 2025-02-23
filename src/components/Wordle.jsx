import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

function Wordle({ answer }) {
  const { moves, currentGuess, handleKeyUp, guesses, isCorrect, usedKeys } =
    useWordle(answer);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      console.log("You won");
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (moves > 5) {
      console.log("Unlucky,out of guesses");
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, moves]);

  useEffect(() => {
    console.log(guesses, moves, isCorrect);
  }, [guesses, moves, isCorrect]);

  return (
    <div>
      <div>Answer is: {answer}</div>
      <div>Current Guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} moves={moves} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}

export default Wordle;
