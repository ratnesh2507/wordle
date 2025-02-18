import { useState } from "react";

export default function useWordle(answer) {
  const [moves, setMoves] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  //converting a letter into an obj with key and color attrs
  function formatGuess() {}

  //adding new guess to array
  function addNewGuess() {}

  //handling keypress
  function handleKeyUp({ key }) {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  }

  return { moves, currentGuess, guesses, isCorrect, handleKeyUp };
}
