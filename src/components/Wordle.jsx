import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

function Wordle({ answer }) {
  const { moves, currentGuess, handleKeyUp, guesses, isCorrect, usedKeys } =
    useWordle(answer);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (moves > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, moves]);

  // useEffect(() => {
  //   console.log(guesses, moves, isCorrect);
  // }, [guesses, moves, isCorrect]);

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} moves={moves} />
      <Keypad usedKeys={usedKeys} onKeyPress={handleKeyUp} />
      {showModal && (
        <Modal isCorrect={isCorrect} moves={moves} answer={answer} />
      )}
    </div>
  );
}

export default Wordle;
