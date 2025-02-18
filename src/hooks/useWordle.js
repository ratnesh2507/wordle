import { useState } from "react";

export default function useWordle(solution) {
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
  function handleKeyUp() {}

  return { moves, currentGuess, guesses, isCorrect, handleKeyUp };
}
