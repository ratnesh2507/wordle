import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

function Wordle({ answer }) {
  const { currentGuess, handleKeyUp } = useWordle(answer);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <>
      <div>Answer is: {answer}</div>
      <div>Current Guess: {currentGuess}</div>
    </>
  );
}

export default Wordle;
