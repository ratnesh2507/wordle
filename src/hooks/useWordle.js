import { useState } from "react";

export default function useWordle(answer) {
  const [moves, setMoves] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  //converting a letter into an obj with key and color attrs
  function formatGuess() {
    let answerArray = [...answer];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    //green
    formattedGuess.forEach((l, i) => {
      if (answerArray[i] === l.key) {
        formattedGuess[i].color = "green";
        answerArray[i] = null;
      }
    });

    //yellow
    formattedGuess.forEach((l, i) => {
      if (answerArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        answerArray[answerArray.indexOf(l.key)] = null;
      }
    });
    return formattedGuess;
  }

  //adding new guess to array
  function addNewGuess(colorMap) {
    if (currentGuess === answer) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[moves] = colorMap;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setMoves((prevMoves) => {
      return prevMoves + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      colorMap.forEach((l) => {
        const currentColor = newKeys[l.key];
        //green
        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }
        //yellow
        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }
        //grey
        if (
          l.color === "grey" &&
          currentColor !== "yellow" &&
          currentColor !== "green"
        ) {
          newKeys[l.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  }

  //handling keypress
  function handleKeyUp({ key }) {
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (key === "Enter") {
      if (moves > 5) {
        return;
      }
      if (history.includes(currentGuess)) {
        return;
      }
      if (currentGuess.length !== 5) {
        return;
      }
      const colorMap = formatGuess();
      addNewGuess(colorMap);
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  }

  return { moves, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp };
}
