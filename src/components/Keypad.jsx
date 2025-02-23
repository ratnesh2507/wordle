import { useEffect, useState } from "react";

function Keypad({ usedKeys }) {
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
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key.toUpperCase()}
            </div>
          );
        })}
    </div>
  );
}

export default Keypad;
