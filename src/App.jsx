import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    async function getAnswers() {
      const res = await fetch("http://localhost:8080/solutions");
      const data = await res.json();
      const randomAnswer = data[Math.floor(Math.random() * data.length)];
      setAnswer(randomAnswer.word);
    }
    getAnswers();
  }, [setAnswer]);

  return (
    <div>
      <h1>Wordle</h1>
      {answer && <div>Solution is: {answer}</div>}
    </div>
  );
}

export default App;
