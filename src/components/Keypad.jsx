import { useEffect, useState } from "react";
import data from "../data";

function Keypad({ usedKeys, onKeyPress }) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(data.letters);
  }, []);

  return (
    <div className="keypad">
      {letters.map((l) => {
        const color = usedKeys[l.key];
        return (
          <div
            key={l.key}
            className={color}
            onClick={() => {
              let keyValue =
                l.key === "Ent"
                  ? "Enter"
                  : l.key === "Back"
                  ? "Backspace"
                  : l.key;
              onKeyPress(keyValue);
            }}
          >
            {l.key.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
}

export default Keypad;
