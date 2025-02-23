import { useState } from "react";
import { useEffect } from "react";
import Wordle from "./components/Wordle";
import data from "./data";

function App() {
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    const randomAnswer =
      data.solutions[Math.floor(Math.random() * data.solutions.length)];
    setAnswer(randomAnswer.word);
  }, []);

  return (
    <div>
      <h1>Wordle</h1>
      {answer && <Wordle answer={answer} />}
    </div>
  );
}

export default App;
