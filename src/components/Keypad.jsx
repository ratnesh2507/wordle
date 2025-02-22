import { useEffect, useState } from "react";

function Keypad() {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    async function getLetters() {
      const res = await fetch("http://localhost:8080/letters");
      const data = await res.json();
      setLetters(data);
    }
    getLetters();
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          return <div key={l.key}>{l.key}</div>;
        })}
    </div>
  );
}

export default Keypad;
